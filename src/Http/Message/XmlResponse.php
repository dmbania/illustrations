<?php

namespace ForestersFinancial\FliacIllustrations\Http\Message;

use ForestersFinancial\FliacIllustrations\Utility\XMLNodeException;
use Slim\Http\Response;

class XmlResponse
{
    /**
     * Return an error XML response.
     *
     * @param Response $response Slim response object
     * @param array    $payload  Error message data to be inserted into <payload>
     *
     * @return Response slim response object with XML response
     */
    public static function error(Response $response, $payload)
    {
        return $response
            ->withStatus(500)
            ->withHeader('Content-Type', 'text/xml')
            ->withHeader('Pragma', 'no-cache')
            ->withHeader('Cache-Control', 'no-cache')
            ->write(self::formatXmlResponse('error', $payload));
    }

    /**
     * Return a successful XML response that does not follow the status-payload structure.
     *
     * @param Response $response Slim response object
     * @param array    $payload  Success data to be inserted into <payload>
     *
     * @return Response slim response object with XML response
     */
    public static function response(Response $response, $payload)
    {
        return $response
            ->withHeader('Content-Type', 'text/xml')
            ->withHeader('Pragma', 'no-cache')
            ->withHeader('Cache-Control', 'no-cache')
            ->write($payload);
    }

    /**
     * Return a successful XML response.
     *
     * @param Response $response Slim response object
     * @param array    $payload  Success data to be inserted into <payload>
     *
     * @return Response slim response object with XML response
     */
    public static function success(Response $response, $payload)
    {
        return $response
            ->withHeader('Content-Type', 'text/xml')
            ->withHeader('Pragma', 'no-cache')
            ->withHeader('Cache-Control', 'no-cache')
            ->write(self::formatXmlResponse('ok', $payload));
    }

    /**
     * Build the proper array for the XML response, and pass it to be encoded.
     *
     * @param string $status  ok|error The status of this XML response
     * @param array  $payload And array of data to be sent as the XML response payload
     *
     * @return string An XML response string
     */
    private static function formatXmlResponse($status, $payload)
    {
        return self::encode([
            'status' => $status,
            'payload' => $payload,
        ]);
    }

    /**
     * Checks that the argument is a valid XML name.
     *
     * @param string $s
     *
     * @return bool
     */
    private static function checkName($s)
    {
        return 1 == preg_match('/^[_a-zA-Z][_a-zA-Z0-9\-\.]*$/', $s);
    }

    /**
     * Returns an XML document representing the argument.
     *
     * @param mixed $data
     *
     * @return string The XML document
     *
     * @see encodeVariable()
     */
    public static function encode($data)
    {
        $dataXML = self::encodeVariable($data);

        if (!$dataXML) {
            $dataXML = '<error>Unable to encode response</error>';
        }

        return "<?xml version=\"1.0\" standalone=\"yes\"?>\n<response>{$dataXML}</response>";
    }

    /**
     * Returns the XML encoding of a single variable.
     *
     * @param mixed $data The variable to be encoded
     *
     * @return string The XML encoding
     *
     * @see encode(), encodeObject(), encodeArray()
     */
    private static function encodeVariable(&$data)
    {
        if (is_object($data)) {
            return self::encodeObject($data);
        } elseif (is_array($data)) {
            return self::encodeArray($data);
        } elseif (is_bool($data)) {
            if ($data) {
                return 'true';
            } else {
                return 'false';
            }
        } elseif (is_float($data) || is_int($data)) {
            return "{$data}";
        } elseif (is_string($data)) {
            return htmlentities($data);
        } elseif (is_null($data)) {
            return null;
        } else {
            return false;
        }
    }

    /**
     * Returns the XML encoding of an object.
     *
     * For each property, encodes the value of the property and adds it to the XML as
     *
     * <code>
     * <key>[encoded value]</key>
     * </code>
     *
     * @param object $data The object to be encoded
     *
     * @return string The XML encoding
     *
     * @see encodeVariable()
     */
    private static function encodeObject($data)
    {
        $rc = '';
        $vars = get_object_vars($data);
        foreach ($vars as $k => &$v) {
            $vXML = self::encodeVariable($v, $k);
            if ($vXML === false) {
                return false;
            }
            if (!is_null($vXML)) {
                $rc .= "<{$k}>{$vXML}</{$k}>\n";
            }
        }

        return $rc;
    }

    /**
     * Returns the XML encoding of an array.
     *
     * For each key, encodes the associated value and adds it to the XML as
     *
     * <code>
     * <key>[encoded value]</key>
     * </code>
     *
     * However, if the key is an integer, it is added as:
     *
     * <code>
     * <item key="key">[encoded value]</item>
     * </code>
     *
     * @param array $data The array to be encoded
     *
     * @return string The XML encoding
     *
     * @see encodeVariable()
     */
    private static function encodeArray(array $data)
    {
        $rc = '';
        foreach ($data as $k => &$v) {
            $vXML = self::encodeVariable($v, $k);
            if ($vXML === false) {
                return false;
            }
            if (!is_null($vXML)) {
                if (self::checkName($k)) {
                    $tag = $k;
                    $attr = '';
                } else {
                    if (self::checkName($k)) {
                        $tag = $k;
                    } else {
                        $tag = 'item';
                        $k = htmlentities($k);
                        $attr = " key=\"{$k}\"";
                    }
                }
                $rc .= "<{$tag}{$attr}>{$vXML}</{$tag}>\n";
            }
        }

        return $rc;
    }

    /**
     * Returns text content of child nodes.
     *
     * Throws a {@link XMLNodeException} if incorrect number of values found
     *
     * @param DOMNode $node  Parent node
     * @param string  $tag   Name of tag to find
     * @param int     $card1 Cardinality allowed in search. If $card2 is not set, this is an exact
     *                       value; otherwise it is the minimum
     * @param int     $card2 Maximum cardinality allowed in search (if set)
     *
     * @return string|array If the maximum cardinality is 1, then returns a string (or NULL). If
     *                      the max cardinality is >1, then returns an array of strings.
     */
    public static function getDomValues(\DOMNode $node, $tag, $card1 = -1, $card2 = -1)
    {
        $minCard = $card1;
        $maxCard = ($card2 == -1) ? $card1 : $card2;

        $nodelist = $node->getElementsByTagName($tag);
        $values = [];

        for ($i = 0; $i < $nodelist->length; ++$i) {
            if ($nodelist->item($i)->parentNode->isSameNode($node)) {
                $values[] = $nodelist->item($i)->textContent;
            }
        }

        $numValues = count($values);

        if ($minCard > 0 && $numValues < $minCard) {
            throw new XMLNodeException("Incorrect number of {$tag} elements [expected {$minCard}, found {$numValues}]", $node);
        }

        if ($maxCard > 0 && $numValues > $maxCard) {
            throw new XMLNodeException("Incorrect number of {$tag} elements [expected no more than {$maxCard}, found {$numValues}]", $node);
        }

        if ($maxCard == 1) {
            if ($numValues == 0) {
                return null;
            } else {
                return $values[0];
            }
        } else {
            return $values;
        }
    }
}

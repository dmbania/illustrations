<?php

namespace ForestersFinancial\FliacIllustrations\Application;

use Monolog\Formatter\HtmlFormatter;
use Monolog\Handler\AbstractProcessingHandler;
use Twig_Environment;

class ErrorResponseHandler extends AbstractProcessingHandler
{
    private $debugMode;
    private $twig;
    private $responseCallback;

    public function __construct($level, $debugMode, Twig_Environment $twig)
    {
        parent::__construct($level);

        $this->debugMode = $debugMode;
        $this->twig = $twig;
        $this->responseCallback = null;
    }

    public function setResponseCallback(callable $callback)
    {
        $this->responseCallback = $callback;
    }

    protected function write(array $record)
    {
        if ($this->responseCallback) {
            call_user_func($this->responseCallback, $record);
        } elseif ($this->debugMode) {
            echo (string) $record['formatted'];
        } else {
            http_response_code(500);
            echo $this->twig->render('errors/exception.twig');
        }
    }

    protected function getDefaultFormatter()
    {
        return new HtmlFormatter();
    }
}

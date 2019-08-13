<?php

namespace ForestersFinancial\RepNet\Http\Message;

use Slim\Http\Response;

class JsonResponse
{
    public static function error(Response $response, $payload)
    {
        return $response->withJson(self::formatJson('error', $payload), 500);
    }

    public static function formatResponse($status, $payload)
    {
        header('Pragma: no-cache');
        header('Cache-Control: no-cache');
        header('Content-Type: application/json');

        return json_encode(self::formatJson($status, $payload));
    }

    public static function success(Response $response, $payload)
    {
        return $response->withJson(self::formatJson('ok', $payload));
    }

    private static function formatJson($status, $payload)
    {
        return [
            'status' => $status,
            'payload' => $payload,
        ];
    }
}

<?php

namespace ForestersFinancial\FliacIllustrations\Http\Handler;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Log\LoggerInterface;

class Error
{
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function __invoke(Request $request, Response $response, $throwable)
    {
        $this->logger->error($throwable->getMessage(), ['exception' => $throwable]);

        return $response;
    }
}

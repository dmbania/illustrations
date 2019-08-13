<?php

namespace ForestersFinancial\FLiacIllustrations\Http\Handler;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

class NotAllowed
{
    private $twig;

    public function __construct(Twig $twig)
    {
        $this->twig = $twig;
    }

    public function __invoke(Request $request, Response $response, array $methods)
    {
        $response = $response
            ->withStatus(405)
            ->withHeader('Allow', implode(', ', $methods));

        return $this->twig->render($response, 'errors/not-found.twig');
    }
}

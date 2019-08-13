<?php

namespace ForestersFinancial\FliacIllustrations\Http\Handler;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

class NotFound
{
    private $twig;

    public function __construct(Twig $twig)
    {
        $this->twig = $twig;
    }

    public function __invoke(Request $request, Response $response)
    {
        $response = $response->withStatus(404);

        return $this->twig->render($response, 'errors/not-found.twig');
    }
}

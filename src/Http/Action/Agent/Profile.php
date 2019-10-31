<?php

namespace ForestersFinancial\FliacIllustrations\Http\Action\Agent;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

class Profile
{
    private $twig;

    public function __construct(Twig $twig)
    {
        $this->twig = $twig;
    }

    public function __invoke(Request $request, Response $response)
    {
        $vars = [];

        return $this->twig->render($response, 'agent/profile.twig', $vars);
    }
}

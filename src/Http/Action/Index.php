<?php

namespace ForestersFinancial\FliacIllustrations\Http\Action;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

class Index
{
    private $twig;
    // private $var;

    //  Add your Dependency Injections here.
    public function __construct(Twig $twig)
    {
        $this->twig = $twig;
    }

    public function __invoke(Request $request, Response $response)
    {
        //  get the current user
        $currentUser = $request->getAttribute('current_user');

        //  get querystring value
        // $param = $request->getQueryParam('param', [DEFAULT]);

        //  get POST value
        // $postParam = $request->getParsedBodyParam('post_param', [DEFAULT]);

        //  Redirecting
        // return $response->withRedirect('/', [301/404/...]);

        //  Returning JSON
        // return $response->withJson($json, [500]);

        //  Return the twig
        $vars = [
            'current_user' => $currentUser,
        ];

        return $this->twig->render($response, 'home/index.twig', $vars);
    }
}

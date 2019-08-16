<?php

namespace ForestersFinancial\FliacIllustrations\Http\Action;

use ForestersFinancial\FliacIllustrations\Http\Message\JsonResponse;
use ForestersFinancial\FliacIllustrations\Http\Message\XmlResponse;
use ForestersFinancial\FliacIllustrations\Service\ServiceToWebDecorator;
use ForestersFinancial\FliacIllustrations\Service\WebToServiceDecorator;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

class Update
{
    private $twig;
    private $products;
    private $riders;
    // private $var;

    //  Add your Dependency Injections here.
    public function __construct(Twig $twig)
    {
        $this->twig = $twig;
        $this->products = [
            'ISP3 Choice 15',
            'ISP3 Choice While Life Express',
            'ISP3 Choice While Life',
            'ISWL-2 3.50%',
        ];
        $this->riders = [
            'of Berk',
            'of Icarus',
            'of Rohan',
            'of the Covenant',
            'of the Purple Sage',
            'of the Relm',
            'on the Storm',
        ];
    }

    public function __invoke(Request $request, Response $response)
    {
        //  get the current user
        // $currentUser = $request->getAttribute('current_user');

        //  get POST values
        $post = $request->getParsedBody();

        $WebToService = (new WebToServiceDecorator($post))->get();

        // NOTE:
        //
        // There should be some code here which will call the Steve service with the WebToService
        // data above, and pass the results to the next line to be mapped back to what we neeed
        // for the web form.

        $ServiceToWeb = (new ServiceToWebDecorator($WebToService))->get();

        shuffle($this->products);
        shuffle($this->riders);

        $ServiceToWeb['summary'] = [
            'product' => $this->products[0],
            'riders' => $this->riders[0],
            'face-amount' => rand(10000000, 1000000000) / 100,
            'premium' => rand(500000, 50000) / 100,
        ];

        // $json = json_encode($post, true);

        //  Redirecting
        // return $response->withRedirect('/', [301/404/...]);

        //  Returning JSON
        // return $response->withJson($ServiceToWeb);

        //  Return the twig
        // $vars = [];
        // return $this->twig->render($response, 'path/index.twig', $vars);

        // Return a successful XML or JSON response
        return JsonResponse::success($response, $ServiceToWeb);
    }
}

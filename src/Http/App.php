<?php

namespace ForestersFinancial\FliacIllustrations\Http;

use DI\Bridge\Slim\App as SlimApp;
use DI\ContainerBuilder;

class App extends SlimApp
{
    public function __construct()
    {
        parent::__construct();

        // Add middleware and routes
        $app = $this;
        require __DIR__ . '/../../config/routes.php';
    }

    protected function configureContainer(ContainerBuilder $builder)
    {
        $builder->addDefinitions(__DIR__ . '/../../config/services.php');
    }
}

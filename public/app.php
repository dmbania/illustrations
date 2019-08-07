<?php

use ForestersFinancial\FliacIllustrations\Http\App;
use ForestersFinancial\FliacIllustrations\Utility\Container;
use Monolog\ErrorHandler;

if (php_sapi_name() === 'cli-server' && is_file(__DIR__ . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH))) {
    return false;
}

require __DIR__ . '/../vendor/autoload.php';

define('ROOT_DIR', realpath(__DIR__ . '/..'));

(new josegonzalez\Dotenv\Loader(__DIR__ . '/../.env'))
    ->parse()
    ->putenv();

$app = new App();
Container::$container = $app->getContainer();

// Set up error and exception handling
ErrorHandler::register($app->getContainer()->get('logger'));
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 0);

$app->run();

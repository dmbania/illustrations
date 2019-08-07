<?php

// use Doctrine\DBAL\Configuration;
// use Doctrine\DBAL\DriverManager;
// use Doctrine\DBAL\Portability\Connection;
// use ForestersFinancial\FICNet\Application\AssetFingerprinter;
// use ForestersFinancial\FICNet\Application\ErrorResponseHandler;
// use ForestersFinancial\FICNet\AssociateDirectory\DirectorySearcher;
// use ForestersFinancial\FICNet\AssociateDirectory\LdapTree;
// use ForestersFinancial\FICNet\BossDataProblems\BossDataRepository;
// use ForestersFinancial\FICNet\Fam\ImaxxFundRepo;
// use ForestersFinancial\FICNet\Http\Action;
// use ForestersFinancial\FICNet\Http\Handler;
// use ForestersFinancial\FICNet\IVR\CallRepository;
// use ForestersFinancial\FICNet\RepOfficeLookup\RepOfficeRepository;
// use ForestersFinancial\FICNet\SuggestionBox\SuggestionMailer;
// use ForestersFinancial\FICNet\TrackingSystem\TrackingSystemRepository;
use Monolog\Formatter\HtmlFormatter;
use Monolog\Handler\BufferHandler;
use Monolog\Handler\ChromePHPHandler;
use Monolog\Handler\FingersCrossedHandler;
use Monolog\Handler\NativeMailerHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Monolog\Processor\PsrLogMessageProcessor;
use Monolog\Processor\WebProcessor;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Slim\Views\Twig;
use Slim\Views\TwigExtension;
use Twig\TwigFunction;

return [
    // Slim settings and error handlers
    'settings.addContentLengthHeader' => false,
    'errorHandler' => DI\get(Handler\Error::class),
    'phpErrorHandler' => DI\get(Handler\Error::class),
    'notFoundHandler' => DI\get(Handler\NotFound::class),
    'notAllowedHandler' => DI\get(Handler\NotAllowed::class),

    //  Aliases for backward compatability until all of FICNet is
    //  converted to Slim
    'error_response_handler' => DI\get(ErrorResponseHandler::class),
    'logger' => DI\get(LoggerInterface::class),
    'twig' => function (Twig $twig) {
        return $twig->getEnvironment();
    },

    'asset_fingerprinter' => function (ContainerInterface $container) {
        return new AssetFingerprinter(ROOT_DIR . '/html');
    },

    ErrorResponseHandler::class => function (ContainerInterface $container) {
        $debugMode = (bool) getenv('ENABLE_DEBUG_ERROR_PAGE');
        $level = $debugMode ? Logger::NOTICE : Logger::ERROR;

        return new ErrorResponseHandler($level, $debugMode, $container->get('twig'));
    },

    LoggerInterface::class => function (ContainerInterface $container) {
        $logger = new Logger('log');

        // Allow PSR-3 {foo}-style replacements in log messages
        $logger->pushProcessor(new PsrLogMessageProcessor());

        // Add information about the HTTP request to log records
        $logger->pushProcessor(new WebProcessor());

        // Custom response handler to echo output to the client
        $logger->pushHandler($container->get('error_response_handler'));

        // Send an email containing all log records when an ERROR or higher occurs (if enabled)
        if (getenv('ERROR_NOTIFICATION_EMAIL')) {
            $to = getenv('ERROR_NOTIFICATION_EMAIL');
            $subject = getenv('SITE') . ': %message%';
            $from = 'weberrors@foresters.com';
            $nativeMailerHandler = new NativeMailerHandler($to, $subject, $from, Logger::DEBUG);
            $nativeMailerHandler->addHeader('Reply-To: webdev@foresters.com');
            $nativeMailerHandler->setContentType('text/html');
            $nativeMailerHandler->setFormatter(new HtmlFormatter());
            $bufferHandler = new BufferHandler($nativeMailerHandler);
            $fingersCrossedHandler = new FingersCrossedHandler($bufferHandler, Logger::ERROR);
            $logger->pushHandler($fingersCrossedHandler);
        }

        // Send all log records to browser console (if enabled)
        if (getenv('ENABLE_BROWSER_CONSOLE_LOGGING')) {
            $logger->pushHandler(new ChromePHPHandler());
        }

        // Send all log records to the PHP error log
        $logger->pushHandler(new StreamHandler(getenv('LOG_FILE'), getenv('LOG_LEVEL')));

        return $logger;
    },

    Twig::class => function (ContainerInterface $container) {
        $options = [
            'strict_variables' => true,
        ];

        $twig = new Twig(__DIR__ . '/../views', $options);

        $twig->addExtension(new TwigExtension(
            $container->get('router'),
            $container->get('request')->getUri()
        ));

        $env = $twig->getEnvironment();

        $fingerprinter = $container->get('asset_fingerprinter');
        $env->addFunction(new TwigFunction('fingerprint', [$fingerprinter, 'fingerprint']));

        return $twig;
    },
];

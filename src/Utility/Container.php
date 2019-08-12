<?php

namespace ForestersFinancial\FliacIllustrations\Utility;

/**
 *  This class supplies global, singleton access to DIC services. It should
 *  only be used when a service is needed from the container but cannot easily
 *  be injected via dependency injection.
 */
abstract class Container
{
    public static $container = null;

    public static function get($key)
    {
        return self::$container->get($key);
    }
}

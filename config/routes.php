<?php

use ForestersFinancial\FliacIllustrations\Http\Action;

// use ForestersFinancial\FliacIllustrations\Http\Middleware;

// $app->get('/user/login', Action\User\Login::class);
// $app->get('/user/logout', Action\User\Logout::class);

$app->get('/', Action\Index::class);
$app->get('/generate/', Action\GenerateIllustrations::class);

$app->get('/agent/profile', Action\Agent\Profile::class);
$app->get('/agent/profile/{agentId:.*}', Action\Agent\Profile::class);
$app->get('/agents/', Action\Agent\Index::class);
// $app->get('/fliac-form', Action\Fliac\Illustrations\Form::class);
// $app->get('/fliac-index', Action\Fliac\Illustrations\Index::class);
// $app->get('/fliac-agent', Action\Fliac\Illustrations\Agent::class);
// $app->post('/services/fliac/pdf', Action\Fliac\Illustrations\Pdf::class);
$app->post('/services/illustration/update', Action\Update::class);

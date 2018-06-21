<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DownloadServerServiceTest extends TestCase
{
    private $client;

    public function __construct()
    {
        $app = $this->createApplication();
        $this->client = $app->make("App\Contracts\DownloadServerInterface");


    }
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $result = $this->client->download("standalone", "windows");

        var_dump($result["headers"]);
        $this->assertTrue(true);
    }
}

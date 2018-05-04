<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Helpers\BsHttpClient;

class BsHttpClientTest extends TestCase
{
    private $client;

    public function __construct()
    {
        $this->createApplication();
        $this->client = new BsHttpClient([
            "url" => env("BSYSTEM_URL"),
            "login" => env("BSYSTEM_USER"),
            "password" => env("BSYSTEM_PASSWORD"),
            "credentials_expire" => env("BSYSTEM_CREDETIANALS_EXPIRE"),
            "port" => env("BSYSTEM_PORT",null),
            "cookie" => env("BSYSTEM_COOKIE")
        ]);


    }


    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $result = $this->client->sendCommand("add_client", "/admin/corporates", ["login" => "alex"]);

        $this->assertTrue(true);
    }
}

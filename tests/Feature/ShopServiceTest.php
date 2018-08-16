<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ShopServiceTest extends TestCase
{

    private $client;

    public function __construct()
    {
        $app = $this->createApplication();
        $this->client = $app->make("App\Contracts\ShopInterface");
    }


    public function testGetUnpaidInvoices(){
        $data = ["customer_id" => "1000033"];
        $result = $this->client->getUnpaidInvoices($data["customer_id"]);
        var_dump($result);
        $this->assertTrue(true);

    }


   /* public function testGetInvoice(){
        $data = ["customer_id" => "1000033", "id" => "2018134018"];
        $result = $this->client->getInvoice($data["id"], $data["customer_id"]);
        $this->assertTrue(true);
    }*/

   /* public function testGetTransactions()
    {
        $data = ["customer_id" => "1000033"];
        $result = $this->client->corporatePayments($data);
        var_dump($result);
        $this->assertTrue(true);
    }*/

    /**
     * A basic test example.
     *
     * @return void
     */
   /* public function testBuyServer()
    {

        $data = [
            "basket" =>["1", "3", "7"],
            "lang" => "ru",
            "license_id" => "",
            "os" => "linux",
            "payment_method" => "bitcoin",
            "period" => "annual",
            "server_id" => "",
            "users" => 10,
            "customer_id" => "1000023"
        ];

        $result = $this->client->buyServer($data);
        var_dump($result);
        $this->assertTrue(true);
    }*/
}

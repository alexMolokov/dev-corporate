<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 24.05.2018
 * Time: 17:16
 */

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\OTRS\OtrsClientService;

class OtrsClientServiceTest extends TestCase
{
    private $client;

    public function __construct()
    {
        $app = $this->createApplication();
        $this->client = $app->make("App\Contracts\TicketsInterface");
    }

   /* public function testGetSessionId()
    {
        $this->client->getSessionId();
        $this->assertTrue(true);
    }*/


     /*public function testCreate()
    {
        $data = [
            "title" => "Test добавлен",
            "name" => "ООО ВАСЯ",
            "queueId" => 37,
            "priorityId" => 3,
            "body" => "body текст",
            "BsystemUserId" => 5,
            "stateId" => 1
        ];
        $this->client->create($data);
        $this->assertTrue(true);
    }*/

   /* public function testGet()
    {
        $data = ["ticketNumber" => 562530394816, "ArticleLimit" => 20, "BsystemUserId" => "1000010"];
        $result = $this->client->get($data);
        var_dump($result);

        $this->assertTrue(true);
    }*/

    public function testUpdate()
    {
        $data = ["ticketNumber" => "561504941003", "body" => "message"];
        $result = $this->client->addArticle($data);


        $this->assertTrue(true);
    }


    /**public function testSearch()
    {
        $data = ["limit" => 10, "queueIds" => [36,37], "BsystemUserId" => 5];
        $this->client->search($data);
        $this->assertTrue(true);
    }**/

}

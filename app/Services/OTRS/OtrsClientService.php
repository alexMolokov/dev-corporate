<?php
namespace  App\OTRS;

use App\Contracts\TicketsInterface;
use App\Helpers\HttpClient;

class OtrsClientService implements  TicketsInterface
{
    private $httpUser;
    private $httpPassword;

    private $url;
    private $serviceUser;
    private $servicePassword;

    private $queueTech;
    private $queueCommon;


    private $client;

    private $sessionId;


    public function __construct(array $config)
    {
        $this->httpUser = (is_null($config["httpUser"]))? null:  $config["httpUser"];
        $this->httpPassword = (is_null($config["httpPassword"]))? null:  $config["httpPassword"];

        $this->queueTech = (is_null($config["queueTech"]))? null:  $config["queueTech"];
        $this->queueCommon = (is_null($config["queueCommon"]))? null:  $config["queueCommon"];

        if(!isset($config["url"]))
        {
            throw new \Exception("URL for TicketSystem not exists");
        }

        if(!isset($config["serviceUser"]))
        {
            throw new \Exception("Login for TicketSystem not exists");
        }

        if(!isset($config["servicePassword"]))
        {
            throw new \Exception("Password for TicketSystem not exists");
        }

        $this->url = $config["url"];
        $this->serviceUser = $config["serviceUser"];
        $this->servicePassword = $config["servicePassword"];

        $this->client = new HttpClient($this->url,true,30,4,false,true);
        $this->client->setHeaders([
            "Accept: application/json",
            "Content-Type: application/json"
        ]);

        if(!is_null($this->httpUser))
        {
            $this->client->authentication = 1;
            $this->client->auth_name = $this->httpUser;
            $this->client->auth_pass = $this->httpPassword;
        }
    }

    public function getSessionId()
    {
        $result = $this->send('/Session', [
            "UserLogin" => $this->serviceUser,
            "Password"  => $this->servicePassword,
        ]);


    }

    protected function send($path="",$args = [])
    {
        $body = json_encode($args);

        $this->client->setPost($body);

        var_dump($body);

        $this->client->createCurl($this->url . $path);
        $response = $this->client->result();


        die();


    }

    public function create(array $data)
    {

    }


}
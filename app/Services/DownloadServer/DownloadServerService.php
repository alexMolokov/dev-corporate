<?php
namespace App\Services\DownloadServer;

use App\Contracts\DownloadServerInterface;
use App\Helpers\HttpClient;
use Mockery\Exception;

class DownloadServerService implements  DownloadServerInterface
{
    private $client;

    private $urls;
    private $notNullable = ["urls"];


    public function __construct(array $config)
    {
        foreach($config as $key => $value)
        {
            if(property_exists($this,$key)) $this->{$key} = $value;
        }

        foreach($this->notNullable as $key)
        {
            if(!isset($config[$key])) throw new \Exception($key . " - must be at config");
        }

        $this->client = new HttpClient(null);
        $this->client->useAuth(true);
        $this->client->setName($config["httpUser"]);
        $this->client->setPass($config["httpPassword"]);
        $this->client->setBinaryTransfer(true);
        $this->client->setTimeout(150);
    }


    public function download($edition, $os)
    {
        $this->client->createCurl($this->urls[$edition][$os]);

        return [
            "headers" => $this->client->getResponseHeaders(),
            "body" => $this->client->result()
        ];
     }
}
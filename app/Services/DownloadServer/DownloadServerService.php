<?php
namespace App\Services\DownloadServer;

use App\Contracts\DownloadServerInterface;
use App\Helpers\HttpClient;
use  App\Exceptions\ServiceDataError;

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
        try {
            $this->client->createCurl($this->urls[$edition][$os]);
        }
        catch (\Exception $e)
        {
              throw new ServiceDataError("Service unavailable", $e);
        }


        return [
            "headers" => $this->client->getResponseHeaders(),
            "body" => $this->client->result()
        ];
     }
}
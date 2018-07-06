<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 04.05.2018
 * Time: 10:57
 */

namespace App\Helpers;

class BsHttpClient
{
    private $m_baseURL;
    private $m_login = "unknown";
    private $m_password = "";
    private $m_credentialsExpire;
    private $m_port;
    private $m_connected = false;
    private $m_httpClient;
    private $m_cookie;


    private $m_token;
    private $connection_error;


    public function __construct($config = [])
    {
        $this->m_baseURL = $config["url"];
        $this->m_login = $config["login"];
        $this->m_password = $config["password"];

        $this->m_credentialsExpire = $config["credentials_expire"];
        $this->m_port = (is_null($config["port"]))? null:  $config["port"];
        $this->m_cookie = (is_null($config["cookie"]))? null:  $config["cookie"];

        $this->m_connected = false;
        $this->m_httpClient = new HttpClient($this->m_baseURL);
        $this->m_httpClient->setVerbose(false);
    }

    public function __call($methodName, $args)
    {
        return call_user_func_array(array($this->m_httpClient, $methodName), $args);
    }

    /**
     * Ping remote service. Ping works only after authorization was complete
     * @return boolean
     */
    public function ping()
    {
        return $this->sendCommand("ping","/ping");
    }

    /**
     * Check if remote service is connected
     * @return boolean
     */
    public function isConnected()
    {
        return $this->m_connected&&$this->ping();
    }

    public function getToken()
    {
        return $this->m_token;
    }

    public function setToken($token)
    {
        $this->m_token = $token;
    }

    public function setConnected($isConnected = true)
    {
        $this->m_connected = $isConnected;
    }

    public function getConnected()
    {
        return $this->m_connected;
    }


    private function generateClientSeed($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';
        for ($i = 0; $i < $length; $i++)
        {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }
        return $randomString;
    }

    private function calculateAuthHash($serverSeed,$clientSeed)
    {
        $val=$this->m_login . $this->m_password . $serverSeed . $clientSeed;
        $hash=sha1($val);
        return $hash;
    }

    /**
     * Connect to remote service
     * @return boolean
     */
    public  function doConnect()
    {
            $result = $this->send("request_auth","/login");
            if ($result->status)
            {
                $response = $result->response;
                $clientSeed = $this->generateClientSeed();

                $credentials = [
                    "login" => $this->m_login,
                    "client_seed" => $clientSeed,
                    "phash" => $this->calculateAuthHash($response->server_seed, $clientSeed)
                ];

                $authResponse = $this->send("send_credentials","/login",$credentials);
                if ($authResponse->status)
                {
                    $this->m_token = $authResponse->response;
                    $this->m_connected = true;
                }
            }
    }

    public function sendCommand($op,$path="/",$args = [])
    {
        if(!$this->m_connected ) $this->doConnect();

        if($this->m_connected) return $this->send($op,$path,$args);
    }


    public function send($op,$path="/",$args = [])
    {
        $args['token'] = $this->m_token;

        $postFields = [
            "op" => $op,
            "args" => json_encode($args)
        ];

        if ($this->m_port)
        {
            $this->m_httpClient->setPort($this->m_port);
        }
        $this->m_httpClient->setPost($postFields);
        $this->m_httpClient->setCookie($this->m_cookie);
        $this->m_httpClient->createCurl($this->m_baseURL.$path);
        $this->m_cookie = $this->m_httpClient->getCookie();

        $response = $this->m_httpClient->result();

        try
        {
            return  json_decode($response);
        }
        catch (\Exception $e)
        {
            return  (object) [
                "status" => false,
                "description" => (!is_null($response))? $response : ""
            ];
        }
    }
}
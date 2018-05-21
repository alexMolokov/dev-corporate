<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 04.05.2018
 * Time: 10:11
 */

namespace App\Services\Bs\Http;

use App\Contracts\CorporateClientInterface;
use App\CorporateClient;


class CorporateClientService extends Service implements CorporateClientInterface
{
    const PATH = "/admin/corporates/client";
    const OPS =[
        "get" => "get_client",
        "getByLogin" =>  "get_client_by_login",
        "add" => "add_client"
    ];

    /**
     * @brief Get Corporate Client by ID
     *
     * @param int $id
     * @return CorporateClient | null
     *
     */
    public function get($customerId)
    {
        $result = $this->client->sendCommand(self::OPS["get"], self::PATH,["customer_id" => $customerId]);
        if($result->status)
        {
            return $this->__getCorporateClient($result->response);
        }

    }

    public function getByLogin($login)
    {
        $result = $this->client->sendCommand(self::OPS["getByLogin"], self::PATH,["login" => $login]);
        if($result->status)
        {
           return $this->__getCorporateClient($result->response);
        }
    }


    /**
     * @brief Add Corporate Client
     *
     * @param CorporateClient $corporateClient
     * @return integer | null
     */
    public function add(CorporateClient $corporateClient)
    {
        $data = $corporateClient->toArray();
        $result = $this->client->sendCommand(self::OPS["add"], self::PATH, $corporateClient->toArray());


    }

    private function __getCorporateClient($response)
    {
        return new CorporateClient([
            "customerId" => $response->customer_id,
            "name" => $response->name,
            "title" => $response->title,
            "login" => $response->login,
            "password" => $response->password
        ]);
    }
}
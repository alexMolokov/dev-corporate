<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 04.05.2018
 * Time: 10:11
 */

namespace App\Services;

use App\Contracts\CorporateClientInterface;
use App\CorporateClient;
use App\Helpers\BsHttpClient;

class BsHttpCorporateClientService implements CorporateClientInterface
{
    const PATH = "admin/corporates/client";
    const OPS =[
        "get" => "get",
        "add" => "add_client"
    ];

    private $client;

    /**
     * @brief BsHttpService constructor.
     * @param BsHttpClient $client
     *
     */
    public function __construct(BsHttpClient $client)
    {
        $this->client = $client;
    }

    /**
     * @brief Get Corporate Client by ID
     *
     * @param int $id
     * @return CorporateClient | null
     *
     */
    public function get($id)
    {
        $result = $this->client->sendCommand(self::OPS["get"], self::PATH,["customer_id" => $id]);
        return new CorporateClient();
    }

    /**
     * @brief Add Corporate Client
     *
     * @param CorporateClient $corporateClient
     * @return integer | null
     */
    public function add(CorporateClient $corporateClient)
    {
        $result = $this->client->sendCommand(self::OPS["add"], self::PATH, $corporateClient->toArray());
        var_dump($result);

    }
}
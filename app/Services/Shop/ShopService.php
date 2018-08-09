<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 09.07.2018
 * Time: 11:03
 */

namespace App\Services\Shop;
use App\Contracts\ShopInterface;
use App\Helpers\BsHttpClient;
use App\Services\Bs\Http\Service;

use App;


class ShopService  extends Service implements ShopInterface
{
    const PATH = "/payment";
    const OPS =[
        "getConfig" => "get_shop_config",
        "buyServer" => "buy_corporate_server",
        "renewLicense" =>  "renew_corporate_license",
        "upgradeLicense" => "upgrade_corporate_license",
        "newLicense" => "new_corporate_license",
    ];


    public function getConfig()
    {
        if($result = $this->client->sendCommand(self::OPS["getConfig"], self::PATH, []))
        {
            if($result->status) return $result->response;
        }
    }

    public function buyServer(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["buyServer"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }

    public function renewLicense(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["renewLicense"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }

    public function upgradeLicense(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["upgradeLicense"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }

    public function newLicense(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["newLicense"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }
}
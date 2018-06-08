<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 06.06.2018
 * Time: 18:32
 */

namespace App\Helpers\Mappers;
use App\Models\Server\CorporateServer;
use App\Models\Server\CorporateLicense;


class ServerMapper
{
    private static $OS = [
        "linux_x86_32" => "Linux Debian",
        "linux_x86_64" => "Linux Debian",
        "windows" => "Windows Server"
    ];

    private static $SHOP;

    public static function toServer($object)
    {
        if(!isset(self::$SHOP)) self::$SHOP = config("shop");

        return new CorporateServer([
            "id" => $object->_id,
            "release" => $object->release,
            "added" => date("Y-m-d",$object->timestamp),
            "os" => self::$OS[$object->os],
            "name" => self::getServerName($object->edition),
            "edition" => $object->edition
        ]);
    }


    private static function getServerName($edition)
    {
            if($edition == "standalone") return  self::$SHOP["products"]["1"]["name"];
            return self::$SHOP["products"]["2"]["name"];
    }

    public static function toLicense($object)
    {

        $license =  new CorporateLicense([
            "id" => $object->id,
            "serverId" => $object->server_id,
            "users" => $object->users,
            "validTill" => (is_numeric($object->date_to))? date("Y-m-d", $object->date_to) : "",
            "added" => date("Y-m-d",$object->timestamp),
        ]);

        $serverModules = (array) $object->server_modules;
        foreach($serverModules as $serverModule => $value)
        {
            if($value) $license->addServerModule($serverModule);
        }

        $processModules = (array) $object->process_modules;
        foreach($processModules as $processModule => $count)
        {
            $license->addProcessModule($processModule, $count);
        }


        return $license;
    }
}

<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 08.05.2018
 * Time: 15:52
 */

namespace App\Helpers\Mappers;


use App\Helpers\BsHttpClient;

abstract class Mapper
{
    protected static $client;

    public function __construct(BsHttpClient $client)
    {
        $this->client = $client;
    }

    function createObject($ar) {
        return $this->doCreateObject($ar);
     }

     function insert($obj){
        $this->doInsert($obj);
     }



     abstract function doCreateObject($ar);

}
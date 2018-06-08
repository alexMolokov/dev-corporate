<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 03.05.2018
 * Time: 17:35
 */

namespace  App\Contracts;



interface  CorporateServerInterface
{
   /**
     * @param $customerId
     * @return CorporateServer
     */
    public function getServers($customerId);

}
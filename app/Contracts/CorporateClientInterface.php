<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 03.05.2018
 * Time: 17:35
 */

namespace  App\Contracts;

use App\CorporateClient;

interface  CorporateClientInterface
{
    public function add(CorporateClient $corporateClient);

    /**
     * @param $customerId
     * @return CorporateClient
     */
    public function get($customerId);

    /**
     * @param $login
     * @return CorporateClient
     */
    public function getByLogin($login);


}
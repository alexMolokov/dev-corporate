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

    /**
     * @param $customerId
     * @param $name
     * @return boolean
     */
    public function changeCompanyName($customerId, $name);


    /**
     * @param $customerId
     * @param  string $password
     * @return boolean;
     */
    public function changePassword($customerId, $password);

    /**
     * @brief Change company details
     *
     * @param $customerId
     * @param array $info
     * @return boolean
     */
    public function changeCompanyDetails($customerId, array $info);

}
<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 24.05.2018
 * Time: 16:15
 */

namespace App\Contracts;

use App\Models\User\RegisterUser;

interface RegistrationInterface
{
    /**
     * @param $email
     * @return boolean (true if exists)
     */
    public function tryEmail($email);


    /**
     * @param $login
     * @return boolean (true if exists)
     */
    public function tryLogin($login);

    public function getClientByLogin($login);

    public function getClientByEmail($email);

    public function addClient(RegisterUser $client);

    public function changeCredentials($customer_id, $login, $password);






}
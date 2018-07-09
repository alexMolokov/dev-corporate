<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 06.06.2018
 * Time: 18:32
 */

namespace App\Helpers\Mappers;
use App\Models\User\RegisterUser;


class RegisterUserMapper
{

    public static function toRegisterUser($object)
    {

        return new RegisterUser([
            "login" => $object->login,
            "email" => $object->email
        ]);
    }
}

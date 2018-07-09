<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 09.07.2018
 * Time: 11:03
 */

namespace App\Services\Registration;
use App\Contracts\RegistrationInterface;
use App\Helpers\BsHttpClient;
use App\Models\User\RegisterUser;
use App\Services\Bs\Http\Service;
use App\Helpers\Mappers\RegisterUserMapper;

use Illuminate\Support\Facades\Redis;


class RegistrationService  extends Service implements RegistrationInterface
{
    const PATH = "/admin/corporates/client";
    const OPS =[
        "tryEmail" => "try_email",
        "tryLogin" =>  "try_login",
        "getClientByLogin" => "get_client_by_login",
        "getClientByEmail" => "get_client_by_email"
    ];

    private $ttl = 1440;


    public function setTtl($ttl)
    {
        if(is_numeric($ttl) && $ttl > 0)
        {
            $this->ttl = $ttl;
        }
    }

    public function tryEmail($email)
    {
        $result = $this->client->sendCommand(self::OPS["tryEmail"], self::PATH,["email" => $email]);
        return $result->status;
    }

    public function tryLogin($login)
    {
        $result = $this->client->sendCommand(self::OPS["tryLogin"], self::PATH,["login" => $login]);
        return $result->status;
    }


    public function getClientByLogin($login)
    {
        $result = $this->client->sendCommand(self::OPS["getClientByLogin"], self::PATH,["login" => $login]);
        if($result->status)
        {
            $user = RegisterUserMapper::toRegisterUser($result->response);
            return $user;
        }
    }

    public function getClientByEmail($email)
    {
        $result = $this->client->sendCommand(self::OPS["getClientByEmail"], self::PATH,["email" => $email]);
        if($result->status)
        {
            $user = RegisterUserMapper::toRegisterUser($result->response);
            return $user;
        }
    }

    public function saveCodeForEmail($email)
    {
        $key  = "user:forget:email:{$email}";
        $result  = Redis::get($key);
        if(!$result)
        {
            $code = $this->_generateCode();
            Redis::set($key, $code);
            Redis::set($this->_getKeyCode($code), $email);
            Redis::expire($key,  $this->ttl);
            Redis::expire($this->_getKeyCode($code),  $this->ttl);
        }
        return Redis::get($key);
    }

    public function getEmailByCode($code)
    {
        $key = $this->_getKeyCode($code);
        return  Redis::get($key);
    }

    private function _getKeyCode($code)
    {
        return    "user:forget:code:{$code}";
    }

    private function _generateCode($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';
        for ($i = 0; $i < $length; $i++)
        {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }
        return sha1($randomString);
    }
}
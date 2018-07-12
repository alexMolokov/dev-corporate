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
use Defuse\Crypto\Crypto;
use Defuse\Crypto\Key;
use App;


class RegistrationService  extends Service implements RegistrationInterface
{
    const PATH = "/admin/corporates/client";
    const OPS =[
        "tryEmail" => "try_email",
        "tryLogin" =>  "try_login",
        "getClientByLogin" => "get_client_by_login",
        "getClientByEmail" => "get_client_by_email",
        "changePassword" =>  "change_password",
        "addClient" => "add_client",
        "changeCredentials" => "change_credentials"
    ];

    private $ttl = 2440;
    private $key = "def000008e6d983c9a2f5a80e50039747385b24a6512d8b9a439603f6cd0cf2a6498b638e014500c2bb007e86ab9ae50497aef64011ee9a194750d7f5e8d472443e17c20";

    public function setTtl($ttl)
    {
        if(is_numeric($ttl) && $ttl > 0)
        {
            $this->ttl = $ttl;
        }
    }

    public function changeCredentials($customer_id, $login, $password)
    {
        if($result = $this->client->sendCommand(self::OPS["changeCredentials"], self::PATH,[
            "login" => $login,
            "password" => null,
            "site_password" => $password,
            "customer_id" => $customer_id
        ]))
        {
            return $result->status;
        }

        return false;

    }

    public function addClient(RegisterUser $client)
    {
         if($result = $this->client->sendCommand(self::OPS["addClient"], self::PATH,
            [
                "name" => $client->getName(),
                "title" => $client->getName(),
                "email" => $client->getEmail(),
                "affiliate" => "",
                "stats_client" => "",
                "country" => "",
                "lang" => App::getLocale(),
                "details" => "Corporate site registration",
                "date" => date("Y-m-d"),
                "phones" => "",
                "url" => "",
                "ticket" => "",
                "city" => ""
                ]))
        {
            return $result->status;
        }

        return false;
    }

    public function changePassword($customerId, $password)
    {
        $result = $this->client->sendCommand(self::OPS["changePassword"], self::PATH,["customer_id" => $customerId, "password" => $password]);
        return $result->status;
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

    private function  _getKey()
    {
        return Key::loadFromAsciiSafeString($this->key);
    }

    public function saveTempRegister(array $data)
    {
        $key  = "user:register:email:{$data['email']}";
        $result  = Redis::get($key);
        if(!$result)
        {
            $code = $this->_generateCode();

            Redis::set($key, json_encode(["login" => $data['login'], "name" => $data["name"],"email" => $data["email"], "code" => $code, "password" => Crypto::encrypt($data["password"], $this->_getKey())]));
            Redis::set($this->_getRegisteredKeyCode($code), $data["email"]);
            Redis::expire($key,  $this->ttl);
            Redis::expire($this->_getRegisteredKeyCode($code),  $this->ttl);
        }
        $data = json_decode(Redis::get($key));
        return $data->code;
    }

    public function saveCode(RegisterUser $client)
    {
        $email = $client->getEmail();
        $key  = "user:forget:email:{$email}";
        $result  = Redis::get($key);
        if(!$result)
        {
            $code = $this->_generateCode();
            Redis::set($key, json_encode(["login" => $client->getLogin(), "customer_id" => $client->getCustomerId(), "email" => $client->getEmail(), "code" => $code]));
            Redis::set($this->_getKeyCode($code), $email);
            Redis::expire($key,  $this->ttl);
            Redis::expire($this->_getKeyCode($code),  $this->ttl);
        }

        $data = json_decode(Redis::get($key));
        return $data->code;
    }

    public function removeForgetClient(RegisterUser $client)
    {
        $email = $client->getEmail();

        if($value = Redis::get("user:forget:email:{$email}"))
        {
            $data = json_decode($value);
            $key  = "user:forget:email:{$email}";
            Redis::del($key);
            Redis::del($this->_getKeyCode($data->code));
        }
    }

    public function removeTempClient(RegisterUser $client)
    {
        $email = $client->getEmail();

        if($value = Redis::get("user:register:email:{$email}"))
        {
            $data = json_decode($value);
            $key  = "user:register:email:{$email}";
            Redis::del($key);
            Redis::del($this->_getRegisteredKeyCode($data->code));
        }
    }

    public function getClientByCode($code)
    {
        $email = $this->getEmailByCode($code);
        if($email)
        {
            if($value = Redis::get("user:forget:email:{$email}"))
            {
                return new RegisterUser((array) json_decode($value));
            }
        }
    }

    public function getRegisteredClientByCode($code)
    {
        $email = $this->_getRegisterEmailByCode($code);
        if($email)
        {
            if($value = Redis::get("user:register:email:{$email}"))
            {
                $data = (array) json_decode($value);
                $data["password"] = Crypto::decrypt($data["password"], $this->_getKey());
                return new RegisterUser($data);
            }
        }
    }


    public function getEmailByCode($code)
    {
        $key = $this->_getKeyCode($code);
        return  Redis::get($key);
    }

    private function _getRegisterEmailByCode($code)
    {
        $key = $this->_getRegisteredKeyCode($code);
        return  Redis::get($key);
    }

    private function _getRegisteredKeyCode($code)
    {
        return    "user:register:code:{$code}";
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
<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 14.06.2018
 * Time: 13:32
 */

namespace App\Services\Bs\Http\Decorators;
use App\Contracts\CorporateClientInterface;
use App\CorporateClient;
use App\Contact;

use Cache;

class CacheDecorator
{
    private $ttl = 5;// minutes
    private $service;

    public function getKey($login)
    {
        return "authuser:{$login}";
    }

    public function __construct(CorporateClientInterface $service)
    {
        $this->service = $service;
    }

    public function getByLogin($login)
    {
        $key = $this->getKey($login);
        if (Cache::has($key))  return Cache::get($key);

        $result = $this->service->getByLogin($login);
        if($result)
        {
            Cache::put($key, $result, $this->ttl);
            return $result;
        }
    }


    public function __call($methodName, $args)
    {
        return call_user_func_array(array($this->service, $methodName), $args);
    }
}
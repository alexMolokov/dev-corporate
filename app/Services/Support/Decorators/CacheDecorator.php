<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 14.06.2018
 * Time: 13:32
 */

namespace App\Services\Support\Decorators;
use App\Contracts\SupportInterface;

use Cache;

class CacheDecorator
{
    private $ttl = 24*60;// minutes
    private $service;
    private $os;
    private $edition;

    private function _getPrefix()
    {
        return "{$this->edition}:{$this->os}";
    }



    public function __construct(SupportInterface $service)
    {
        $this->service = $service;
    }


    public function getBody($id)
    {
        $key = $this->_getPrefix() . ":body:{$id}";
        if (Cache::has($key))  return Cache::get($key);

        $result = $this->service->getBody($id);
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
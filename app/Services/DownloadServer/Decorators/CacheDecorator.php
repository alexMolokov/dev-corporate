<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 14.06.2018
 * Time: 13:32
 */

namespace App\Services\DownloadServer\Decorators;
use App\Contracts\DownloadServerInterface;

use Cache;

class CacheDecorator implements DownloadServerInterface
{
    private $ttl = 24*60;// minutes
    private $service;
    private $prefix = "download:server";


    public function __construct(DownloadServerInterface $service)
    {
        $this->service = $service;
    }

    public function download($edition, $os)
    {
        $key = "{$this->prefix}:{$edition}:{$os}";
        if (Cache::has($key))
        {
            $result = Cache::get($key);
            if(strlen($result["body"]) > 0) return $result;
        }

        $result = $this->service->download($edition, $os);
        if($result && strlen($result["body"]) > 0)
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
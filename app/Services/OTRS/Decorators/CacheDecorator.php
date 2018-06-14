<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 14.06.2018
 * Time: 13:32
 */

namespace App\OTRS\Decorators;
use Illuminate\Support\Facades\Redis;
use App\Contracts\TicketsInterface;

class CacheDecorator
{
    private $ttl = 20*60;
    private $service;

    public function __construct(TicketsInterface $service)
    {
        $this->service = $service;
    }

    public function getList(array $data, $customerId)
    {
        $tickets = Redis::hget('user:tickets:'.$customerId, "list");
        if(!is_null($tickets)) return unserialize($tickets);


        $result = $this->service->search($data);
        if($result)
        {
            Redis::hset('user:tickets:'. $customerId, "list", serialize($result));
            Redis::expire('user:tickets:'. $customerId, $this->ttl);
            return $result;
        }
    }

    public function get($data, $customerId)
    {
        $ticket = Redis::hget('user:tickets:'.$customerId, "ticket:" . $data["ticketNumber"]);
        if(!is_null($ticket)) return unserialize($ticket);

        $result = $this->service->get($data);
        if($result)
        {
            Redis::hset('user:tickets:'. $customerId, "ticket:" . $data["ticketNumber"], serialize($result));
            Redis::expire('user:tickets:'. $customerId, $this->ttl);
            return $result;
        }
    }

    public function __call($methodName, $args)
    {
        return call_user_func_array(array($this->service, $methodName), $args);
    }
}
<?php

namespace App\Listeners;

use App\Events\UserDataChanged;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Services\Bs\Http\Decorators\CacheDecorator;
use Cache;

class CacheCleanListener
{
    private $cache;
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(CacheDecorator $cache)
    {
        $this->cache = $cache;
    }

    /**
     * Handle the event.
     *
     * @param  UserDataChanged  $event
     * @return void
     */
    public function handle(UserDataChanged $event)
    {
            Cache::forget($this->cache->getKey($event->getLogin()));
    }
}

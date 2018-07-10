<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\UserDataChanged' => [
            'App\Listeners\CacheCleanListener'
        ],
        'App\Events\ServerRequestUploaded' => [
            'App\Listeners\ServerRequestUploadedListener'
        ],
        'App\Events\CertificateRequestUploaded' => [
            'App\Listeners\CertificateRequestUploadedListener'
        ],
        'App\Events\ForgetRequestUploaded' => [
            'App\Listeners\ForgetRequestUploadedListener'
        ],
        'App\Events\RegisterRequest' => [
            'App\Listeners\RegisterRequestListener'
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}

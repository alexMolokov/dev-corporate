<?php

namespace App\Providers;

use App\Services\DownloadServer\DownloadServerService;
use App\Services\Support\SupportService;
use App\OTRS\OtrsClientService;
use App\OTRS\Decorators\CacheDecorator;
use App\Services\DownloadServer\Decorators\CacheDecorator as DownloadServerCacheDecorator;
use Illuminate\Support\ServiceProvider;
use Response;
use Request;
use Auth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Response::macro('success', function ($data = []) {
            return Response::json([
                'status' => true,
                'data' => $data,
            ]);
        });

        Response::macro('error', function ($message, $data = []) {
            return Response::json([
                'status' => false,
                'message' => $message,
                'data' => $data
            ]);
        });



    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton("App\Contracts\TicketsInterface", function($app)
        {
            return new CacheDecorator(new OtrsClientService(config("otrs")));
        });

        $this->app->singleton("App\Contracts\DownloadServerInterface", function($app)
        {
            return new DownloadServerCacheDecorator(new DownloadServerService(config("downloadServer")));

        });

        $this->app->singleton("App\Contracts\SupportInterface", function($app)
        {
            return new SupportService();
        });


    }
}

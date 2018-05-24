<?php

namespace App\Providers;

use App\OTRS\OtrsClientService;
use Illuminate\Support\ServiceProvider;
use Response;

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
        $this->app->singleton("App\Contracts\TicketsInterface", function($app){
            $config = [
                'url' =>  config('otrs.url'),
                "httpUser" => config('otrs.httpUser'),
                "httpPassword" => config('otrs.httpPassword'),
                "serviceUser" => config("otrs.serviceUser"),
                "servicePassword" => config("otrs.servicePassword",null),
                "queueTech" => config("otrs.queueTech"),
                "queueCommon" => config("otrs.queueCommon")
            ];

            return new OtrsClientService($config);
        });


    }
}

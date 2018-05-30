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
                return new OtrsClientService(config("otrs"));
        });


    }
}

<?php

namespace App\Providers;

use App\Helpers\BsHttpClient;
use App\Services\BsHttpCorporateClientService;
use Illuminate\Support\ServiceProvider;
use Response;

class BsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

       $this->app->singleton("App\Contracts\CorporateClientInterface", function($app){

           $config = [
             'url' =>  config('bsystem.url'),
             "login" => config("BSYSTEM_USER"),
             "password" => config("BSYSTEM_PASSWORD"),
             "credentials_expire" => config("BSYSTEM_CREDETIANALS_EXPIRE"),
             "port" => config("BSYSTEM_PORT",null),
             "cookie" => config("BSYSTEM_COOKIE")
           ];

           new BsHttpCorporateClientService(new BsHttpClient($config));
       });
    }
}

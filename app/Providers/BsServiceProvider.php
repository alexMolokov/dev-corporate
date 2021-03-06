<?php

namespace App\Providers;

use App\Helpers\BsHttpClient;
use App\Services\Bs\Http\CorporateClientService;
use App\Services\Bs\Http\CorporateServerService;
use App\Services\Registration\RegistrationService;
use App\Services\Shop\ShopService;
use Illuminate\Support\ServiceProvider;
use App\Services\Bs\Http\Decorators\CacheDecorator;
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

       $this->app->singleton("BsHttpClient", function($app){

           $config = [
             'url' =>  config('bsystem.url'),
             "login" => config('bsystem.login'),
             "password" => config('bsystem.password'),
             "credentials_expire" => config("bsystem.credentials_expire"),
             "port" => config("bsystem.port",null),
             "cookie" => config("bsystem.cookie")
           ];

           return new BsHttpClient($config);
       });

        $this->app->singleton("BsHttpClientShop", function($app){

            $config = [
                'url' =>  config('bsystem.url'),
                "login" => config('bsystem.login'),
                "password" => config('bsystem.password'),
                "credentials_expire" => config("bsystem.credentials_expire"),
                "port" => config("bsystem.port",null),
                "cookie" => config("bsystem.cookie")
            ];

            return new BsHttpClient($config);
        });

        $this->app->bind("App\Contracts\CorporateClientInterface", function($app){
               return  new CorporateClientService($app->make("BsHttpClient"));
        });

        $this->app->bind("App\Contracts\ShopInterface", function($app)
        {
            return new ShopService($app->make("BsHttpClientShop"));
        });

        $this->app->bind("App\Contracts\CorporateServerInterface", function($app){
            return new CorporateServerService($app->make("BsHttpClient"));
        });

        $this->app->bind("App\Contracts\RegistrationInterface", function($app)
        {
            return new RegistrationService($app->make("BsHttpClient"));
        });

    }
}

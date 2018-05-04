<?php

namespace App\Providers;

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
                'errors' => false,
                'data' => $data,
            ]);
        });

        Response::macro('error', function ($message, $data = []) {
            return Response::json([
                'errors' => true,
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
        //
    }
}

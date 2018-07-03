<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use App\Services\Bs\Http\UserProvider as BsUserProvider;
use App\Services\Bs\Http\Decorators\CacheDecorator;
use Illuminate\Support\Facades\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();


        Auth::provider('bsystem', function ($app) {
            return new  BsUserProvider(
                new CacheDecorator(
                $app->make("App\Contracts\CorporateClientInterface")
                )
            );
        });
    }
}

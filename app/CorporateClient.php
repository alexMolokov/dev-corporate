<?php

namespace App;


use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;


class CorporateClient implements AuthenticatableContract
{
    use Authenticatable;

    protected $rememberTokenName = "";

    protected $fillable = [
        'customer_id',
        'login',
        'password',
        'name',
        'title',
        'email',
        'country',
        'city',
        'lang',
        'details',
        'date',
        'phones',
        'url',
        'affiliate',
        'stats_client',
        'ticket'
    ];

    public function getKeyName()
    {
        return 'customer_id';
    }
}





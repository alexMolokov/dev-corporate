<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 10.05.2018
 * Time: 21:27
 */

namespace App\Services\Bs\Http;

use Illuminate\Contracts\Auth;
use Illuminate\Contracts\Auth\Authenticatable;
use App\Contracts\CorporateClientInterface;


class UserProvider implements Auth\UserProvider
{
    private $service;

    public function __construct(CorporateClientInterface $service)
    {
        $this->service = $service;
    }

    public function retrieveById($identifier)
    {
        return $this->service->getByLogin($identifier);
    }

    public function retrieveByToken($identifier, $token){}
    public function updateRememberToken(Authenticatable $user, $token){}

    public function retrieveByCredentials(array $credentials)
    {
        return $this->service->getByLogin($credentials['login']);
    }

    /**
     * Validate a user against the given credentials.
     *
     * @param  \Illuminate\Contracts\Auth\Authenticatable  $user
     * @param  array  $credentials
     * @return bool
     */
    public function validateCredentials(Authenticatable $user, array $credentials){
        return ($credentials['login'] == $user->getAuthIdentifier() &&
            $credentials['password'] == $user->getAuthPassword());
    }
}
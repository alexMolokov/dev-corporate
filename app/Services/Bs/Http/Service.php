<?php
namespace App\Services\Bs\Http;

use App\Helpers\BsHttpClient;


class Service {

    protected $client;
    /**
     * @brief BsHttpService constructor.
     * @param BsHttpClient $client
     *
     */
    public function __construct(BsHttpClient $client)
    {
        $this->client = $client;
    }
}
<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 03.05.2018
 * Time: 17:35
 */

namespace  App\Contracts;

use App\CorporateClient;

interface  CorporateClientInterface
{
    public function add(CorporateClient $corporateClient);
    public function get($id);
}
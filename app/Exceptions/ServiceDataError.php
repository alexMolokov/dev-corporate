<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 31.07.2018
 * Time: 15:23
 */

namespace App\Exceptions;


class ServiceDataError extends SiteError
{
    public function __construct($message, \Exception $cause)
    {
        parent::__construct($message, $cause);
    }
}
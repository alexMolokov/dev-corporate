<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 31.07.2018
 * Time: 15:16
 */

namespace App\Exceptions;


abstract class SiteError extends \Exception
{
    protected $cause;

    public function __construct($message, \Exception $cause)
    {
        $this->cause = $cause;
        $this->message = $message;
        $this->code = $cause->code;
        $this->file = $cause->file;
        $this->line = $cause->line;
    }
}
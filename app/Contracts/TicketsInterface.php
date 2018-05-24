<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 24.05.2018
 * Time: 16:15
 */

namespace App\Contracts;


interface TicketsInterface
{
    /**
     * Create ticket at Ticket System
     * @param array $data
     * @return mixed
     */
    public function create(array $data);


}
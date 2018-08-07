<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 07.08.2018
 * Time: 12:02
 */

namespace App\Services\Support;


class SupportSearchMapper
{

    private $langs = [
        "en" => 0,
        "ru" => 0,
    ];

    private $editions = [
        "standalone" => 0,
        "cluster" => 1
    ];

    private $os = [
        "linux" => 0,
        "windows" => 1
    ];

    public function getLang($lang)
    {
        return $this->langs[$lang];
    }

    public function getEdition($edition)
    {
        return $this->editions[$edition];
    }

    public function getOs($os)
    {
        return $this->os[$os];
    }




}
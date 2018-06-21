<?php
namespace App\Contracts;


interface DownloadServerInterface
{
    /**
     * @param $edition
     * @param $os
     * @return mixed
     */
    public function download($edition, $os);


}
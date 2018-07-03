<?php
namespace App\Contracts;


interface SupportInterface
{
    /**
     * @param string $edition (standalone|cluster)
     * @return mixed
     */
    public function setEdition($edition);

    /**
     * @param string $os (windows|linux)
     * @return mixed
     */
    public function setOs($os);

    /**
     * @param $lang (en|ru)
     * @return mixed
     */
    public function setLang($lang);


    /**
     * @return array
     */
    public function getCatalog();

    /**
     * @param int $docId
     * @return string (html)
     */
    public function getBody($docId);
}
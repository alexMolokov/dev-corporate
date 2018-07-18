<?php
namespace App\Contracts;


interface ShopInterface
{
    /**
     * @param array $data
     * @return array
     */
    public function buyServer(array $data);

    /**
     * @param array $data
     * @return array
     */
    public function renewLicense(array $data);

    /**
     * @param array $data
     * @return array
     */
    public function upgradeLicense(array $data);

    /**
     * @param array $data
     * @return array
     */
    public function newLicense(array $data);
}
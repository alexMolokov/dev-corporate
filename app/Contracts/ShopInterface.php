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

    /**
     * @param array $data
     * @return array
     */
    public function corporatePayments(array $data);

    /**
     * @param int $id
     * @param int $customerId
     * @return mixed
     */
    public function getInvoice($id, $customerId);

    /**
     * @param int $customerId
     * @return mixed
     */
    public function getUnpaidInvoices($customerId);

    /**
     * @param int $id
     * @param int $customerId
     * @return boolean
     */
    public function cancelInvoice($id, $customerId);

    /**
     * @param int $id
     * @param int $customerId
     * @return boolean
     */
    public function confirmInvoice($id, $customerId);

    /**
     * @param array $data
     * @return array
     */
    public function buyServerInvoice(array $data);

    /**
     * @param array $data
     * @return array
     */
    public function renewLicenseInvoice(array $data);

    /**
     * @param array $data
     * @return array
     */
    public function upgradeLicenseInvoice(array $data);

    /**
     * @param array $data
     * @return array
     */
    public function newLicenseInvoice(array $data);


}
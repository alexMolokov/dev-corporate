<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 03.05.2018
 * Time: 17:35
 */

namespace  App\Contracts;



interface  CorporateServerInterface
{
   /**
     * @param $customerId
     * @return CorporateServer
     */
    public function getServers($customerId);

    /**
     * @brief Upload license request
     *
     * @param array $data
     * @return boolean
     *
     */
    public function licenseRequest(array $data);

    /**
     * @param string $licenseId
     * @return boolean
     */
    public function licenseSign($licenseId);

    /**
     * @param $customerId
     * @param $licenseId
     * @return mixed
     */
    public function getLicenseSign($customerId, $licenseId);

    public function addServer($customerId, array $data);
    public function addLicense($serverId, array $data);
    public function downloadCertificate($serverId);
    public function downloadLicense($licenseId);
}
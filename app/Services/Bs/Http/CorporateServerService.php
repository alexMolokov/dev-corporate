<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 04.05.2018
 * Time: 10:11
 */

namespace App\Services\Bs\Http;

use App\Contracts\CorporateServerInterface;
use App\CorporateClient;
use App\Contact;
use App\Helpers\Mappers\ServerMapper;

class CorporateServerService extends Service implements CorporateServerInterface
{
    const PATH = "/admin/corporates/servers";
    const PATH_LICENSE = "/admin/corporates/licenses";

    const OPS = [
        "getServers" => "get_servers",
        "getServersLicenses" => "get_servers_licenses",
        "licenseRequest" => "upload_license_request",
        "certificateRequest" => "upload_certificate_request",
        "signLicense" => "sign_license",
        "getSignLicense" => "get_sign_license",
        "addServer" => "add_server",
        "addLicense" => "add_license",
        "downloadCertificate" => "download_certificate",
        "downloadLicense" => "download_license"
    ];

    /**
     * @brief Upload license request
     *
     * @param array $data
     * @return boolean
     *
     */
    public function licenseRequest(array $data)
    {
        $result = $this->client->sendCommand(self::OPS["licenseRequest"], self::PATH,$data);
        return $result->status;
    }

    public function downloadCertificate($serverId)
    {
        $this->client->sendCommand(self::OPS["downloadCertificate"], self::PATH,["id" => $serverId]);

        return [
                "headers" => $this->client->getResponseHeaders(),
                "body" => $this->client->result()
            ];

    }

    public function downloadLicense($licenseId)
    {
       $this->client->sendCommand(self::OPS["downloadLicense"], self::PATH_LICENSE,["id" => $licenseId]);

        return [
            "headers" => $this->client->getResponseHeaders(),
            "body" => $this->client->result()
        ];

    }


    /**
     * @brief Upload certificate request
     *
     * @param array $data
     * @return boolean
     *
     */
    public function certificateRequest(array $data)
    {

        $result = $this->client->sendCommand(self::OPS["certificateRequest"], self::PATH,$data);
        return $result->status;
    }

    /**
     * @brief Get Client Servers  by customerID
     *
     * @param int $id
     * @return array CorporateServer | null
     *
     */
    public function getServers($customerId)
    {
        $ar  = [];
        $result = $this->client->sendCommand(self::OPS["getServers"], self::PATH,["customer_id" => $customerId]);



        if($result->status)
        {
            foreach($result->response as $object)
            {
                $server =  ServerMapper::toServer($object);
                $ar[$server->getId()] = $server;
            }

            $licenses = $this->_getLicenses(array_keys($ar));
            foreach($licenses as $license)
            {
                $server = $ar[$license->getServerId()];
                $server->addLicense($license);
            }
        }
        return $ar;
    }

    /**
     * @param string $licenseId
     * @return mixed
     */
    public function licenseSign($licenseId)
    {
        $result = $this->client->sendCommand(self::OPS["signLicense"], self::PATH_LICENSE,["id" => $licenseId]);
        return $result;
    }

    /**
     * @param $customerId
     * @param $licenseId
     * @return mixed|object
     */
    public function getLicenseSign($customerId, $licenseId)
    {
        $result = $this->client->sendCommand(self::OPS["getSignLicense"], self::PATH_LICENSE,["id" => $licenseId, "customer_id" => $customerId]);
        return $result;
    }

    /**
     * @param array $serverIds
     * return array Licenses
     */
    private function _getLicenses(array $serverIds)
    {
        $ar = [];
        if(count($serverIds) > 0 )
        {
            $result = $this->client->sendCommand(self::OPS["getServersLicenses"], self::PATH,["servers" => $serverIds]);
            if($result->status)
            {
                foreach($result->response as $object)
                {
                    $license =  ServerMapper::toLicense($object);
                    $ar[$license ->getId()] = $license;
                }
            }
        }
        return $ar;
    }

    public function addServer($customerId, array $data)
    {
        $data["customer_id"] = $customerId;
        $result = $this->client->sendCommand(self::OPS["addServer"], self::PATH,$data);
        if($result->status) return $result->response;
    }

    public function addLicense($serverId, array $data)
    {
        $data["server_id"] = $serverId;
        $result = $this->client->sendCommand(self::OPS["addLicense"], self::PATH_LICENSE,$data);
        if($result->status) return $result->response;
    }
}
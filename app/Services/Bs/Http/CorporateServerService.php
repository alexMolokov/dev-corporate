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
    const OPS = [
        "getServers" => "get_servers",
        "getServersLicenses" => "get_servers_licenses",
        "licenseRequest" => "upload_license_request",
        "certificateRequest" => "upload_certificate_request"
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

    public function getByLogin($login)
    {
        $result = $this->client->sendCommand(self::OPS["getByLogin"], self::PATH,["login" => $login]);
        if($result->status)
        {
           return $this->__getCorporateClient($result->response);
        }
    }


    /**
     * @brief Add Corporate Client
     *
     * @param CorporateClient $corporateClient
     * @return integer | null
     */
    public function add(CorporateClient $corporateClient)
    {
        $data = $corporateClient->toArray();
        $result = $this->client->sendCommand(self::OPS["add"], self::PATH, $corporateClient->toArray());


    }

    /**
     * @brief Save contact info (firstName,lastName,email,jobTitle)
     * @param $customerId
     * @param array $info
     * @return boolean
     */
    public function saveContact($customerId, array $info)
    {
        $data = [
            "contact_id" => (is_null($info["id"]))? "": $info["id"],
            "contact_name" => trim($info["firstName"]) . " " . trim($info["lastName"]),
            "contact_job_position" => trim($info["jobTitle"]),
            "contact_email" => $info["email"],
            "contact_type" =>  trim($info["type"])
        ];

        $result = $this->client->sendCommand(self::OPS["saveContact"], self::PATH, array_merge(["customer_id" => $customerId], $data));
        return $result->status;
    }

    /**
     * @brief Change company details (address, email, phone)
     *
     * @param $customerId
     * @param array $info
     * @return boolean
     */
    public function changeCompanyDetails($customerId, array $info)
    {
        $result = $this->client->sendCommand(self::OPS["changeCompanyDetails"], self::PATH, array_merge(["customer_id" => $customerId], $info));
        return $result->status;
    }

    private function __getCorporateClient($response)
    {
        $client =  new CorporateClient([
            "customerId" => $response->customer_id,
            "name" => $response->name,
            "title" => $response->title,
            "login" => $response->login,
            "password" => $response->password,
            "phone" => $response->phone,
            "email" => $response->email,
            "address" => $response->address
        ]);

        foreach($response->contacts as $contact)
        {
            $arNames = explode(" ", $contact->name);
            $firstName = (isset($arNames[0]))? $arNames[0] : '';
            $lastName = (isset($arNames[1]))? $arNames[1] : '';

            $client->addContact(new Contact([
                'id' => $contact->id,
                'email' => $contact->email,
                'jobTitle' => $contact->job_position,
                'firstName' => $firstName,
                'lastName' => $lastName,
                'type' => $contact->type

            ]));
        }

        return $client;
    }
}
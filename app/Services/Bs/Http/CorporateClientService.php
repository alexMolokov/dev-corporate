<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 04.05.2018
 * Time: 10:11
 */

namespace App\Services\Bs\Http;

use App\Contracts\CorporateClientInterface;
use App\CorporateClient;
use App\Contact;

class CorporateClientService extends Service implements CorporateClientInterface
{
    const PATH = "/admin/corporates/client";
    const OPS =[
        "get" => "get_client",
        "getByLogin" =>  "get_client_by_login",
        "add" => "add_client",
        "changeCompanyName" => "change_name",
        "changePassword" =>  "change_password",
        "changeCompanyDetails" =>  "change_short_details"
    ];

    /**
     * @param int $customerId
     * @param  string $password
     * @return boolean;
     */
    public function changePassword($customerId, $password)
    {
        $result = $this->client->sendCommand(self::OPS["changePassword"], self::PATH,["customer_id" => $customerId, "password" => $password]);
        return $result->status;
    }


    /**
     * @brief Change company name
     *
     * @param  string $name
     * @return boolean;
     */
    public function changeCompanyName($customerId, $name)
    {
        $result = $this->client->sendCommand(self::OPS["changeCompanyName"], self::PATH,["customer_id" => $customerId, "name" => $name, "title" => $name]);
        return $result->status;
    }

    /**
     * @brief Get Corporate Client by ID
     *
     * @param int $id
     * @return CorporateClient | null
     *
     */
    public function get($customerId)
    {
        $result = $this->client->sendCommand(self::OPS["get"], self::PATH,["customer_id" => $customerId]);
        if($result->status)
        {
            return $this->__getCorporateClient($result->response);
        }

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
<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 09.07.2018
 * Time: 11:03
 */

namespace App\Services\Shop;
use App\Contracts\ShopInterface;
use App\Helpers\BsHttpClient;
use App\Services\Bs\Http\Service;

use App;


class ShopService  extends Service implements ShopInterface
{
    const PATH = "/payment";
    const OPS =[
        "getConfig" => "get_shop_config",
        "buyServer" => "buy_corporate_server",
        "renewLicense" =>  "renew_corporate_license",
        "upgradeLicense" => "upgrade_corporate_license",
        "newLicense" => "new_corporate_license",
        "corporatePayments" => "get_corporate_payment_transactions",
        "getInvoice" => "get_invoice",
        "getUnpaidInvoices" => "get_unpaid_invoices",
        "cancelInvoice" => "cancel_invoice",
        "confirmInvoice" => "confirm_invoice",
        "buyServerInvoice" => "buy_corporate_server_invoice",
        "renewLicenseInvoice" =>  "renew_corporate_license_invoice",
        "upgradeLicenseInvoice" => "upgrade_corporate_license_invoice",
        "newLicenseInvoice" => "new_corporate_license_invoice",
    ];


    public function getConfig()
    {
        if($result = $this->client->sendCommand(self::OPS["getConfig"], self::PATH, []))
        {
            if($result->status) return $result->response;
        }
    }

    public function buyServer(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["buyServer"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }
    public function buyServerInvoice (array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["buyServerInvoice"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }

    public function renewLicense(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["renewLicense"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }
    public function renewLicenseInvoice(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["renewLicenseInvoice"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }

    public function upgradeLicense(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["upgradeLicense"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }
    public function upgradeLicenseInvoice(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["upgradeLicenseInvoice"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }

    public function newLicense(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["newLicense"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }

    public function newLicenseInvoice(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["newLicenseInvoice"], self::PATH, $data))
        {
            if($result->status) return $result->response;
        }
    }

    public function corporatePayments(array $data)
    {
        if($result = $this->client->sendCommand(self::OPS["corporatePayments"], self::PATH, $data))
        {
            $return = [];
            if($result->status)
            {
                $ar = $result->response;
                foreach($ar as $row)
                {
                    $return[] = [
                        "id" => $row->id,
                        "date" => $row->date,
                        "amount" => $row->amount,
                        "currency" => $row->currency,
                        "currency_rate" =>  $row->currency_rate,
                        "invoice_id"  => $row->invoice_id
                    ];
                }
            }




            return $return;
        }
    }

    public function getInvoice($id, $customerId)
    {
        if($result = $this->client->sendCommand(self::OPS["getInvoice"], self::PATH, ["id" => $id, "customer_id" => $customerId]))
        {
            if($result->status) return $result->response;
        }
    }

    public function cancelInvoice($id, $customerId)
    {
        if($result = $this->client->sendCommand(self::OPS["cancelInvoice"], self::PATH, ["id" => $id, "customer_id" => $customerId]))
        {
            return $result->status;
        }
        return false;
    }

    public function confirmInvoice($id, $customerId)
    {
        if($result = $this->client->sendCommand(self::OPS["confirmInvoice"], self::PATH, ["id" => $id, "customer_id" => $customerId]))
        {
            return $result->status;
        }
        return false;
    }

    public function getUnpaidInvoices($customerId)
    {
        if($result = $this->client->sendCommand(self::OPS["getUnpaidInvoices"], self::PATH, ["customer_id" => $customerId]))
        {
            if($result->status) return $result->response;
        }
    }
}
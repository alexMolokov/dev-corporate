<?php

namespace App\Http\Controllers\Client;

use App\Http\Requests\Shop\BuyServerRequest;
use App\Http\Requests\Shop\NewLicenseRequest;
use App\Http\Requests\Shop\RenewLicenseRequest;
use App\Http\Requests\Shop\UpgradeLicenseRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ShopController extends Controller
{
    public function getProductList()
    {
        return response()->success(config("shop"));
    }

    public function buyServer(BuyServerRequest $request)
    {
        echo "1";
        die();
    }

    public function renewLicense(RenewLicenseRequest $request)
    {

    }

    public function upgradeLicense(UpgradeLicenseRequest $request)
    {

    }


    public function newLicense(NewLicenseRequest $request)
    {

    }
}

<?php

namespace App\Http\Controllers\Client;

use App\Contracts\ShopInterface;
use App\Http\Requests\Shop\BuyServerRequest;
use App\Http\Requests\Shop\NewLicenseRequest;
use App\Http\Requests\Shop\RenewLicenseRequest;
use App\Http\Requests\Shop\UpgradeLicenseRequest;
use App\Http\Controllers\Controller;
use Auth;

class ShopController extends Controller
{
    private $service;

    public function __construct(ShopInterface $service)
    {
        $this->service = $service;
    }

    public function getProductList()
    {
        return response()->success(config("shop"));
    }

    public function buyServer(BuyServerRequest $request)
    {
        if($response = $this->service->buyServer([
            "os" => $request->get("os"),
            "payment_method" => $request->get("payment_method"),
            "period" =>$request->get("period"),
            "users" =>$request->get("users"),
            "basket" => $request->get("basket"),
            "lang" => $request->get("lang"),
            "customer_id" => Auth::user()->getCustomerId()
        ]))
        {
            return response()->success($response);
        }
        return response()->error(__("Error"), []);
    }

    public function renewLicense(RenewLicenseRequest $request)
    {
        if($response = $this->service->renewLicense([
            "license_id" => $request->get("license_id"),
            "server_id" => $request->get("server_id"),
            "payment_method" => $request->get("payment_method"),
            "period" =>$request->get("period"),
            "users" =>$request->get("users"),
            "basket" => $request->get("basket"),
            "lang" => $request->get("lang"),
            "customer_id" => Auth::user()->getCustomerId()
        ]))
        {
            return response()->success($response);
        }
        return response()->error(__("Error"), []);
    }

    public function upgradeLicense(UpgradeLicenseRequest $request)
    {
        if($response = $this->service->upgradeLicense([
            "license_id" => $request->get("license_id"),
            "server_id" => $request->get("server_id"),
            "payment_method" => $request->get("payment_method"),
            "users" => $request->get("users"),
            "basket" => $request->get("basket"),
            "lang" => $request->get("lang"),
            "customer_id" => Auth::user()->getCustomerId()
        ]))
        {
            return response()->success($response);
        }
        return response()->error(__("Error"), []);
    }


    public function newLicense(NewLicenseRequest $request)
    {
        if($response = $this->service->newLicense([
            "server_id" => $request->get("server_id"),
            "payment_method" => $request->get("payment_method"),
            "period" =>$request->get("period"),
            "users" =>$request->get("users"),
            "basket" => $request->get("basket"),
            "lang" => $request->get("lang"),
            "customer_id" => Auth::user()->getCustomerId()
        ]))
        {
            return response()->success($response);
        }
        return response()->error(__("Error"), []);
    }
}

<?php

namespace App\Http\Controllers\Client;

use App\Contracts\ShopInterface;
use App\Http\Requests\Shop\BuyServerRequest;
use App\Http\Requests\Shop\NewLicenseRequest;
use App\Http\Requests\Shop\RenewLicenseRequest;
use App\Http\Requests\Shop\UpgradeLicenseRequest;
use App\Http\Controllers\Controller;
use Dompdf\Dompdf;
use Auth;
use View;

class ShopController extends Controller
{
    private $service;

    public function __construct(ShopInterface $service)
    {
        $this->service = $service;
    }

    public function getProductList()
    {
        if($response = $this->service->getConfig())
        {
            return response()->success([
                "products" => $response->products,
                "os" => $response->os,
                "periods" => $response->periods,
                "currency" => $response->currency,
                "renewDiscount" => $response->renewDiscount,
                "exchangeRate" =>  $response->exchangeRate,
            ]);
        }
        return response()->error(__("Service temporary unavailable"));
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
            $url = $response->url."?" .http_build_query((array)$response->parameters);
            return response()->success($url);
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
            $url = $response->url."?" .http_build_query((array)$response->parameters);
            return response()->success($url);
        }
        return response()->error(__("Error"), []);
    }

    public function upgradeLicense(UpgradeLicenseRequest $request)
    {
        if($response = $this->service->upgradeLicense([
            "license_id" => $request->get("license_id"),
            "server_id" => $request->get("server_id"),
            "payment_method" => $request->get("payment_method"),
            "period" => $request->get("period"),
            "users" => $request->get("users"),
            "basket" => $request->get("basket"),
            "lang" => $request->get("lang"),
            "customer_id" => Auth::user()->getCustomerId()
        ]))
        {
            $url = $response->url."?" .http_build_query((array)$response->parameters);
            return response()->success($url);
        }
        return response()->error(__("Error"), []);
    }

    public function newLicense(NewLicenseRequest $request)
    {
        if($response = $this->service->newLicense([
            "server_id" => $request->get("server_id"),
            "payment_method" => $request->get("payment_method"),
            "period" => $request->get("period"),
            "users" => $request->get("users"),
            "basket" => $request->get("basket"),
            "lang" => $request->get("lang"),
            "customer_id" => Auth::user()->getCustomerId()
        ]))
        {
            $url = $response->url."?" .http_build_query((array)$response->parameters);
            return response()->success($url);
        }
        return response()->error(__("Error"), []);
    }

    public function getInvoice()
    {
        if($response = $this->service->getConfig())
        {
            $pdf = new Dompdf();
            $pdf->loadHtml(View::make('shop.invoice')->with(
                [
                    "number" => "V072618/01",
                    "currency" => "EUR",
                    "exchangeRate" => 1.1,
                    "date" => "07-26-2018",
                    "company" => [
                        "name" => "G&C Alliance S.A.",
                        "number" => "CHE-115.975.750",
                        "address" => "Rue des Piletes 3, c/o Fiduconsult S.A., 1700",
                        "city" => "Fribourg",
                        "country" => "Swiss Confederation"
                    ],
                    "payment" => [
                        "method" => "Banka transfer",
                        "type" => "Prepaid",
                        "terms" => "15",
                    ],
                    "companyFrom" => (array) $response->company,
                    "basket" => [
                        [
                            "count" => 1,
                            "price" => 250,
                            "name" => "VIPole Corporate Server, Standalone Edition"
                        ],
                        [
                            "count" => 25,
                            "price" => 70,
                            "name" => "VIPole Corporate Server, Standalone Edition user lifetime licenses"
                        ]
                    ],
                    "sum" => 2000

                ]
            )->render());
            $pdf->render();




            $headers = [
                'Content-Type' => 'application/pdf',
                // 'Content-Disposition' => 'attachment; filename="invoice.pdf"'
            ];
            return response($pdf->output())->withHeaders($headers);
        }



            // return view("shop.invoice");
    }
}

<?php

namespace App\Http\Controllers\Client;

use App\Contracts\ShopInterface;
use App\Events\ConfirmInvoice;
use App\Http\Requests\Shop\BuyServerRequest;
use App\Http\Requests\Shop\NewLicenseRequest;
use App\Http\Requests\Shop\RenewLicenseRequest;
use App\Http\Requests\Shop\UpgradeLicenseRequest;
use App\Http\Requests\Shop\ConfirmInvoiceRequest;
use App\Http\Controllers\Controller;
use Dompdf\Dompdf;
use Auth;
use View;
use File;

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

    public function getPayments()
    {
        if($result = $this->service->corporatePayments([
            "customer_id" => Auth::user()->getCustomerId()
        ])) {

            foreach($result as $recordKey => $record)
            {
                $record["date_int"] = date("YmdHi",$record["date"]);
                $record["date"] = date("Y-m-d H:i:s",$record["date"]);
                $result[$recordKey] = $record;
            }

            return response()->success($result);
        }

        return response()->error(__("Error"), []);
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

    public function getUnpaidInvoices()
    {
        if($result = $this->service->getUnpaidInvoices(
             Auth::user()->getCustomerId()
        )) {


            foreach($result as $recordKey => $record)
            {
                $record = (array) $record;
                //$record["date_int"] = date("YmdHi",$record["date"]);
                //$record["date"] = date("Y-m-d H:i:s",$record["date"]);
                $result[$recordKey] = $record;
            }

            return response()->success($result);
        }

        return response()->success([]);
    }

    public function confirmInvoice( ConfirmInvoiceRequest $request)
    {
        $files = $request->files->get("files");

        if(!is_array($files)) return response()->error(__("Error") . " " . __("Please choose File!"), []);

        $file = [
            "ContentType" => $files[0]->getClientMimeType(),
            "Filename"    => $files[0]->getRealPath(),
            "OriginalName" => $files[0]->getClientOriginalName()
        ];

        event(new ConfirmInvoice($request->get("id"),$file));

       if($this->service->confirmInvoice($request->get("id"), Auth::user()->getCustomerId()))
       {
            return response()->success();
       }

        return response()->error(__("Error") . " " . __("Please try later!"), []);
    }

    public function cancelInvoice($id)
    {
        if($this->service->cancelInvoice($id, Auth::user()->getCustomerId()))
        {
            return response()->success();
        }

        return response()->error(__("Error") . " " . __("Please try later!"), []);
    }

    public function getInvoice($id)
    {
        $config = $this->service->getConfig();
        if(!$config) return view("shop.invoice_not_found");

        $invoice = $this->service->getInvoice($id, Auth::user()->getCustomerId());
        if(!$invoice) return view("shop.invoice_not_found");

        $sum = 0;
        $basket = [];

        for($i=0; $i<count($invoice->invoiceList); $i++)
        {
            $product = $invoice->invoiceList[$i];
            $basket[] = (array) $product;
            $sum += $product->price*$product->count;
        }


        $pdf = new Dompdf();
        $pdf->loadHtml(View::make('shop.invoice')->with(
                [
                    "number" => $invoice->id,
                    "currency" =>  $invoice->currency,
                    "exchangeRate" =>  $invoice->exchange_rate,
                    "date" => date("m-d-Y",$invoice->creation_time),
                    "company" => Auth::user()->toArray(),
                    "payment" => (array) $config->company->invoice,
                    "companyFrom" => (array) $config->company,
                    "basket" => $basket,
                    "sum" => $sum

                ]
            )->render());
            $pdf->render();


            $headers = [
                'Content-Type' => 'application/pdf',
                // 'Content-Disposition' => 'attachment; filename="invoice.pdf"'
            ];
            return response($pdf->output())->withHeaders($headers);





    }
}

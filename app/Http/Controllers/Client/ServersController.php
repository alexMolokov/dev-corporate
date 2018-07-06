<?php

namespace App\Http\Controllers\Client;

use App\Events\CertificateRequestUploaded;
use App\Events\ServerRequestUploaded;
use App\Http\Requests\GetTrialRequest;
use App\Mail\LicenceRequestUploaded;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Contracts\CorporateServerInterface;
use Auth;
use File;

class ServersController extends Controller
{
    private $service;

    public function __construct(CorporateServerInterface $service)
    {
        $this->service = $service;
    }

    private function _isTestLicense($license)
    {


        $daysInYear = 364;
        if(is_null($license->getValidTill())) return false;


        $datetime1 = new \DateTime(date("Y-m-d",$license->getValidTill()));
        $datetime2 = new \DateTime($license->getDateFrom());

        $interval = $datetime1->diff($datetime2);
        if($interval->format('%a') < $daysInYear) return true;

        return false;
    }

    private function _hasTestLicence(){
        $ar = $this->_getServersArray();
        foreach($ar as $server) {
            foreach($server['licenses'] as $license)
            {
                if($license['test']) return true;
            }
        }
        return false;
    }

    private function _getServersArray()
    {
        $ar = [];
        $result = $this->service->getServers(Auth::user()->getCustomerId());
        if($result)
        {
            foreach($result as $id => $server)
            {
                $ar[$id] = [
                    "id" => $server->getId(),
                    "release" => $server->getRelease(),
                    "added" => date("Y-m-d",$server->getAdded()),
                    "os" => $server->getOs(),
                    "name" => $server->getName(),
                    "edition" => $server->getEdition(),
                    "serverModules" => $server->getServerModules(),
                    "hasCertificate" => $server->isHasCertificate(),
                    "hasCertificateRequest" => $server->isHasCertificateRequest(),
                    "hasLicenseRequest" => $server->isHasLicenseRequest(),
                    "licenses" => []
                ];
                $licenses = $server->getLicenses();
                foreach($licenses as $license)
                {
                    $ar[$id]["licenses"][$license->getId()] = [
                        "id" => $license->getId(),
                        "users" => $license->getUsers(),
                        "validTill" => (!is_null($license->getValidTill()))? date("Y-m-d",$license->getValidTill()) : "",
                        "validFrom" => $license->getDateFrom(),
                        "added" =>  date("Y-m-d",$license->getAdded()),
                        "processModules" => $license->getProcessModules(),
                        "serverModules" => $license->getServerModules(),
                        "valid" =>  $license->isValid(),
                        "signed" => $license->getSigned(),
                        "test" => $this->_isTestLicense($license)
                    ];
                }
            }
        }
        return $ar;
    }

    public function getServers()
    {
        $ar = $this->_getServersArray();
        return response()->success($ar);
        //return response()->error(__("Error"), []);
    }

    /**
     * @brief Load license request to Server
     *
     */
    public function licenseRequest(Request $request)
    {
        $files = $request->files->get("files");

        if(is_array($files))
        {
            foreach($files as $file)
            {
                $data = [
                    "content"     => File::get($file->getRealPath()),
                    "contentType" => $file->getClientMimeType(),
                    "filename"    => $file->getClientOriginalName(),
                    "_id" => $request->input("server")
                ];
            }
            if($this->service->licenseRequest($data))
            {
                event(new ServerRequestUploaded($data["_id"]));
                return response()->success([]);
            }
        }

        return response()->error(__("Error"), []);

    }


    public function certificateRequest(Request $request)
    {
        $files = $request->files->get("files");

        if(is_array($files))
        {

            foreach($files as $file)
            {
                $data = [
                    "content"     => File::get($file->getRealPath()),
                    "contentType" => $file->getClientMimeType(),
                    "filename"    => $file->getClientOriginalName(),
                    "_id" => $request->input("server")
                ];
            }
            if($this->service->certificateRequest($data))
            {
                event(new CertificateRequestUploaded($data["_id"]));
                return response()->success([]);
            }
        }

        return response()->error(__("Error"), []);
    }

    private function _isOwnerLicense($licenseId){
        $servers = $this->_getServersArray();
        foreach($servers as $server)
        {
            foreach($server['licenses'] as $id => $license)
                if($id == $licenseId) return true;
        }
        return false;
    }
    public function licenseDownload($licenseId)
    {

        if($this->_isOwnerLicense($licenseId)) {
            $response = $this->service->downloadLicense($licenseId);
            $result = response($response["body"],200)->header("Content-Type", "application/octet-stream")->
            header("Content-Disposition", $response["headers"]["Content-Disposition"][0])->
            header("Content-Description", $response["headers"]["Content-Description"][0])->
            header("Content-Length", $response["headers"]["Content-Length"][0]);
            return $result;
        }
        die(__('License not found'));
    }

    public function certificateDownload($serverId)
    {
        $servers = $this->_getServersArray();
        if(isset($servers[$serverId]))
        {
            $response = $this->service->downloadCertificate($serverId);
            $result = response($response["body"],200)->header("Content-Type", "application/octet-stream")->
            header("Content-Disposition", $response["headers"]["Content-Disposition"][0])->
            header("Content-Description", $response["headers"]["Content-Description"][0])->
            header("Content-Length", $response["headers"]["Content-Length"][0]);
            return $result;
        }
        die(__('Certificate not found'));
    }

    public function getTrial(GetTrialRequest $request)
    {
        if($this->_hasTestLicence()) return response()->error(__("Sorry you have test license"), []);
        $productId = $request->get("server");
        $products = config("shop.products");

        $bsOs = config("shop.bsOs");

        $data = [
            "os" => $bsOs[$request->get("os")],
            "lang" => $request->get("lang"),
            "comments" => "trial corporate site",
            "date" => date("Y-m-d"),
            "edition" => $products[$productId]["edition"],
            "release" => $products[$productId]["release"]
        ];

        $serverId = $this->service->addServer(Auth::user()->getCustomerId(), $data);
        if(is_null($serverId)) return response()->error(__("Can't add Server.") . __("Try it later!"), []);

        $licenseData = [
            "date_from" => date("Y-m-d"),
            "date_to" => date("Y-m-d", time()  + config("shop.periods.trial.period")*24*60*60),
            "date" => date("Y-m-d"),
            "evaluation" => false,
            "users" => $products[$productId]["startUsers"],
            "obsolete_licenses" => [],
            "server_modules" => [],
            "process_modules" =>(object) [],
            "price" => 0,
            "payment" => ""
        ];
        $basket =  $request->get("basket");
        $trialAllowedProducts = $products[$productId]["trialAllowedProducts"];
        foreach($basket as $module)
        {
            if(in_array($module, $trialAllowedProducts))
            {
                if(isset( $products[$module]["bsname"]))
                    $licenseData["server_modules"][] = $products[$module]["bsname"];
            }
        }
        $licenseId = $this->service->addLicense($serverId, $licenseData);
        if(is_null($licenseId)) return response()->error(__("Can't add License.") . __("Try it later!"), []);

        return $this->getServers();
    }

}

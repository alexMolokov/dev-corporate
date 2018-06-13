<?php

namespace App\Http\Controllers\Client;

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

    public function getServers()
    {
        $result = $this->service->getServers(Auth::user()->getCustomerId());
        if($result)
        {
            $ar = [];
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
                      "valid" =>  $license->isValid()
                    ];
                }
            }

            return response()->success($ar);
        }

        return response()->error(__("Error"), []);
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
                return response()->success([]);
            }
        }

        return response()->error(__("Error"), []);
    }

    public function licenseDownload(Request $request){

    }

    public function certificateDownload(Request $request)
    {

    }

}

<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Contracts\CorporateServerInterface;
use Auth;

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
                    "licenses" => []
                ];
                $licenses = $server->getLicenses();
                foreach($licenses as $license)
                {
                    $ar[$id]["licenses"][$license->getId()] = [
                      "id" => $license->getId(),
                      "users" => $license->getUsers(),
                      "validTill" => (!is_null($license->getValidTill()))? date("Y-m-d",$license->getValidTill()) : "",
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
}

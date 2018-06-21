<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Contracts\CorporateServerInterface;
use Auth;

class DownloadServerController extends Controller
{
    private $service;
    private $serverService;

    public function __construct(Request $request)
    {
        $this->service = resolve("App\Contracts\DownloadServerInterface");
        $this->serverService = resolve("App\Contracts\CorporateServerInterface");
    }

    public function download($os, $edition)
    {
      if(!$this->_hasServerEdition($edition)) return view("download_warning");

      $response = $this->service->download($edition, $os);

      $result = response($response["body"],200)->header("Content-Type", "application/octet-stream")->
      header("Content-Disposition", $response["headers"]["Content-Disposition"][0])->
      header("Content-Description", $response["headers"]["Content-Description"][0])->
      header("Content-Length", $response["headers"]["Content-Length"][0]);


       return $result;
    }

    private function _hasServerEdition($edition)
    {
        $servers = $this->serverService->getServers(Auth::user()->getCustomerId());
        if(!$servers) return false;

        $hasEdition = false;
        foreach($servers as $server)
        {
            if($server->getEdition() == $edition)
            {
                $hasEdition = true;
                break;
            }
        }
        return $hasEdition;
    }
}

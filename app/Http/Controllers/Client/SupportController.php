<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SupportController extends Controller
{
    private $service;
    private $config;

    const TYPE_FILE = "file";

    public  function __construct()
    {
        $this->service =  resolve("App\Contracts\SupportInterface");
        $this->config =  config("support");
    }

    private function _init($lang,$edition, $os)
    {
        $this->service->setEdition($edition);
        $this->service->setOs($os);
        $this->service->setLang($lang);
    }


    public function getConfig()
    {
        return response()->success($this->config["servers"]);
    }


    public function getFile($lang,$edition, $os)
    {
        $server = $this->config["servers"][$edition][$os][$lang];
        if($server["type"] == self::TYPE_FILE)
        {
            $reference = $server["reference"];
            $file = $this->config["files"][$reference];
            $fileName = $this->config["filesPath"] . "/" . $file["name"];

            $body = file_get_contents($fileName);
            $result = response($body,200)->header("Content-Type", $file["content-type"])->
            header("Content-Disposition",'attachment; filename="' .$file["name"]. '"')->
            header("Content-Transfer-Encoding",'binary')->
            header("Content-Length",strlen($body));
            return $result;
        }
        return response()->error(__("Document not found"));
    }


    private function _getFirstIdDocument($catalog)
    {
        return $catalog['children'][0]['id'];
    }

    public function getCatalog($lang,$edition, $os)
    {
        $this->_init($lang, $edition, $os);
        $catalog = $this->service->getCatalog();
        $id = $this->_getFirstIdDocument($catalog);
        $body = $this->service->getBody($id);
        return response()->success(["catalog" => $catalog, "id" => $id, "body" => $body]);
    }

    public function getDocument($lang,$edition, $os, $id)
    {
        $this->_init($lang, $edition, $os);

        $body = $this->service->getBody($id);
        if(!is_null($body)) return response()->success($body);
        return response()->error(__("Document not found"));
    }
}

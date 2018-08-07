<?php

namespace App\Http\Controllers\Client;

use App\Services\Search\SearchQuery;
use App\Services\Support\SupportSearchMapper;
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


    public function search($lang,$edition, $os, Request $request) {
        $this->_init($lang, $edition, $os);

        $engine =  resolve("App\Contracts\SearchInterface");
        $supportMapper = new SupportSearchMapper();
        $searchQuery = new SearchQuery();
        $searchQuery->setQuery($request->get("query"));
        $searchQuery->addAttribute("langint", $supportMapper->getLang($lang));
        $searchQuery->addAttribute("osint", $supportMapper->getOs($os));
        $searchQuery->addAttribute("editionint", $supportMapper->getEdition($edition));

        $result = $engine->search($searchQuery);
        $response = ["count" => 0,  "query" => $request->get("query"), "list" => []];
        if($result->getCountRecords() == 0) return response()->success($response);

        $response["count"] = $result->getCountRecords();
        $docs = $result->getDocs();
        foreach($docs as $doc)
        {
            $response["list"][] = [
                "id" => $doc->doc_id,
                "title" => $doc->title,
                "snippet" => $doc->snippet
            ];

        }
        return response()->success($response);
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

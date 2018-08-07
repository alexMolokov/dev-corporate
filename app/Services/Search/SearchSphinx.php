<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 07.08.2018
 * Time: 14:01
 */

namespace App\Services\Search;

use App\Contracts\SearchInterface;
use App\Exceptions\ServiceDataError;
use Mockery\Exception;

class SearchSphinx implements SearchInterface
{
        private $host;
        private $port;
        private $charset = "utf8";
        private $index;
        private $count = 30;
        private $db;

        private $weights = ['title=3', "content=1"];


    public function __construct(array $conf)
    {
       $this->host = $conf['host'];
       $this->port = $conf['port'];
       $this->index = $conf['index'];

       try
       {
          $this->db = new \PDO('mysql:host=' . $this->host . ';port=' . $this->port . ';charset=' . $this->charset, '', '', array(\PDO::ATTR_PERSISTENT => true));
       }
       catch (PDOException $e)
       {
          throw new ServiceDataError("Search service not available", $e);
       }
    }

    private function getAttributesForSearch(SearchQuery $searchQuery)
    {
        $ar = [""];
        $attributes =  $searchQuery->getAttributes();
        foreach($attributes as $key => $value)
        {
            $ar[] = " {$key} = {$value}";
        }
        return implode(" AND ", $ar);


    }

        public function search(SearchQuery $searchQuery)
        {
            $page = $searchQuery->getPage();
            $searchResult = new SearchResult();

            $sth = $this->db->prepare(
                "SELECT * FROM " .
                $this->index .
               " WHERE MATCH(:query)" .
                $this->getAttributesForSearch($searchQuery) .
                " LIMIT " . ($page - 1) . "," . $this->count .
                " OPTION field_weights=(" . implode(',',$this->weights) . ")"
            );

            $sth->execute(array(':query' => $searchQuery->getQuery()));
            if($docs = $sth->fetchAll(\PDO::FETCH_ASSOC))
            {
                foreach($docs as $doc)
                {
                    $sthSnippet = $this->db->prepare("CALL SNIPPETS('" . str_replace("'","\'",$doc['content']) . "', '" . $this->index . "', '" . $searchQuery->getQuery() . "', 30 AS around, 300 AS limit)");
                    $sthSnippet->execute();
                    if($snippet = $sthSnippet->fetchAll(\PDO::FETCH_ASSOC))
                    {
                        $doc['snippet'] = $snippet[0]['snippet'];
                    }
                    $searchResult->addDoc(new SearchDoc($doc));
                }
            }

            $sth = $this->db->prepare("SHOW META");
            $sth->execute();
            if($info = $sth->fetchAll(\PDO::FETCH_ASSOC))
            {
                foreach($info as $meta)
                {
                    if($meta['Variable_name'] == "total")
                    {
                        $searchResult->setCountRecords((int)$meta['Value']);
                        $searchResult->setCountPages(ceil(((int)$meta['Value'])/$this->count));
                        break;
                    }
                }
            }

            return $searchResult;
        }
}
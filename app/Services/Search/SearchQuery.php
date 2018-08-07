<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 07.08.2018
 * Time: 13:51
 */

namespace App\Services\Search;


class SearchQuery
{
    private $query = '';
    private $page = 1;
    private $attributes = [];
    private $doc_id;
    private $importance = false;

    public function setQuery($query)
    {
        $this->query = trim(strip_tags($query));
        return $this;
    }

    public function getQuery()
    {
        return $this->query;
    }

    public function setPage($page)
    {
        if(!is_numeric($page) || $page < 1) $page = 1;
        $this->page = $page;
        return $this;
    }

    public function getPage()
    {
        return $this->page;
    }

    public function addAttribute($name, $value)
    {
        $this->attributes[$name] = $value;
        return $this;
    }

    public function getAttributes()
    {
        return $this->attributes;
    }


    public function setDocId($doc_id)
    {
        $this->doc_id = $doc_id;
        return $this;
    }


    public function getDocId()
    {
        return  $this->doc_id;
    }

    public function getImportance()
    {
        return  $this->importance;
    }

    public function setImportance($importance)
    {
        return  $this->importance = $importance;
    }
}
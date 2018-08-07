<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 07.08.2018
 * Time: 13:57
 */

namespace App\Services\Search;


class SearchResult
{
    private $page = 1;
    private $countPages = 1;
    private $countRecords = 0;
    private $docs = [];


    public function addDoc(SearchDoc $doc) {
        $this->docs[] = $doc;
    }

    public function getDocs()
    {
        return $this->docs;
    }

    public function getPage()
    {
        return $this->page;
    }

    public function getCountPages()
    {
        return $this->countPages;
    }

    public function setPage($page)
    {
        $this->page = $page;
        return $this;
    }

    public function setCountPages($count)
    {
        $this->countPages = $count;
        return $this;
    }

    public function setCountRecords($count)
    {
        $this->countRecords = $count;
        return $this;
    }

    public function getCountRecords()
    {
        return $this->countRecords;
    }
}
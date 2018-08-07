<?php

namespace App\Contracts;

use App\Services\Search\SearchQuery;

interface SearchInterface
{
    public function search(SearchQuery $searchQuery);

}
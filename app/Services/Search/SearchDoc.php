<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 07.08.2018
 * Time: 13:55
 */

namespace App\Services\Search;


class SearchDoc
{
    protected $title = '';
    protected $content = '';
    protected $doc_id = '';
    protected $snippet = '';
    protected $partition = '';

    public function __construct($ar = [])
    {
        foreach($ar as $key => $value)
        {
            if(property_exists(get_class($this), $key))
            {
                $this->{$key} = $value;
            }
        }
    }

    public function __set($name, $value)
    {
        if(property_exists(get_class($this), $name))
        {
            $this->{$name} = $value;
        }
        return $this;
    }

    public function __get($name)
    {
        if(property_exists(get_class($this), $name))
        {
            return $this->{$name};
        }
    }

}
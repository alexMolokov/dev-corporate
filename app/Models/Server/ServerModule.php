<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 06.06.2018
 * Time: 17:25
 */

namespace App\Models\Server;


class ServerModule
{
    protected $id;
    protected $name;
    protected $fillable = ['id', 'name'];

    public function __construct(array $data)
    {
        foreach($data as $property => $value)
        {
            if (property_exists($this, $property))
            {
                $method =  ucfirst($property);
                if(method_exists($this, "set" . ucfirst($property)))
                {
                    $this->{$property} = $this->$method($value);
                }
                else
                {
                    $this->{$property} = $value;
                }

            }
        }
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }


}
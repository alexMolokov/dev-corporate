<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 06.06.2018
 * Time: 17:21
 */

namespace App\Models\User;


class RegisterUser
{
    protected $email;
    protected $login;

    protected $fillable = ['email','login'];


    public function __construct(array $data)
    {
        foreach($data as $property => $value)
        {
            if (property_exists($this, $property) && in_array($property, $this->fillable))
            {
                $method =  "set" . ucfirst($property);
                if(method_exists($this,  $method))
                {
                    $this->$method($value);
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
    public function getEmail()
    {
        return $this->email;
    }




}
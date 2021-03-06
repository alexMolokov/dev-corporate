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
    protected $customer_id;
    protected $password;
    protected $name;

    protected $fillable = ['email','login', 'customer_id', 'password', 'name'];


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

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * @return mixed
     */
    public function getCustomerId()
    {
        return $this->customer_id;
    }

    /**
     * @param mixed $customer_id
     */
    public function setCustomerId($customer_id)
    {
        $this->customer_id = $customer_id;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }




}
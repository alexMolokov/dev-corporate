<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 24.05.2018
 * Time: 12:19
 */

namespace App;


class Contact
{
    const TYPE_TECH = 'tech';
    const TYPE_MAIN = 'main';

    protected $id;
    protected $firstName;
    protected $lastName;
    protected $jobTitle;
    protected $email;
    protected $type = self::TYPE_MAIN;

    protected $fillable = ['id','firstName','lastName', 'jobTitle','email', 'type'];

    public function toArray(){
        $result = [];
        foreach($this->fillable as $property){
            $result[$property] = $this->{$property};
        }
        return $result;
    }

    public function __construct(array $data)
    {
       foreach($data as $property => $value)
        {
            if (property_exists($this, $property))
            {
                if($property == "type")
                {
                    if(!in_array($value,[self::TYPE_TECH , self::TYPE_MAIN])) $value = self::TYPE_MAIN;
                }
                $this->{$property} = $value;
            }
        }
    }


}
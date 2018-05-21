<?php
namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;


class CorporateClient implements AuthenticatableContract
{
    use Authenticatable;

    protected  $customerId;
    protected  $login;
    protected  $password;
    protected  $name;
    protected  $title;

    protected $contacts = [];

    protected $fillable = ['customerId','login', 'name','title'];

    public function __construct(array $data)
    {
        $this->rememberTokenName = "";
        foreach($data as $property => $value)
        {
            if (property_exists($this, $property)) {
                $this->{$property} = $value;
            }
        }
    }

    public function toArray(){
        $result = [];
        foreach($this->fillable as $property){
            $result[$property] = $this->{$property};
        }
        foreach($this->contacts as $contact)
        {

        }
        return $result;
    }



    /*public function addContact(Contact $contact) {
        $this->contacts[]= $contact;
    }*/

    public function getKeyName()
    {
        return 'login';
    }
}





<?php
namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;


class CorporateClient implements AuthenticatableContract
{
    use Authenticatable;
    protected  $customerId;
    // auth info
    protected  $login;
    protected  $password;

    // billing info
    protected  $name;
    protected  $title;
    protected  $phone;
    protected  $email;
    protected  $address;

    protected $contacts = [];

    protected $fillable = ['customerId','login', 'name','title', 'phone', 'email', 'address'];

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
            $result["contacts"][] = $contact->toArray();
        }
        return $result;
    }


    public function addContact(Contact $contact) {
        $this->contacts[]= $contact;
    }

    public function getKeyName()
    {
        return 'login';
    }

    /**
     * @return mixed
     */
    public function getCustomerId()
    {
        return $this->customerId;
    }



}





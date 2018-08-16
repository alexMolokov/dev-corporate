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
    protected  $service_domain;

    // billing info
    protected  $name;
    protected  $title;
    protected  $phone;
    protected  $email;
    protected  $address;
    protected  $zip;
    protected  $city;
    protected  $country;
    protected  $state;


    protected $contacts = [];

    protected $fillable = ['customerId','login', 'name','title', 'phone', 'email', 'address', 'zip', 'city', 'country', 'state'];

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

    public function getName()
    {
        return $this->name;
    }

    public function getLogin()
    {
        return $this->login;
    }

    public function checkPassword($password)
    {
        $s1=sha1($this->service_domain.$this->login,true);
        $s2=sha1($s1.$password,true);
        $result=base64_encode($s2);

        return $result == $this->password;
    }
}





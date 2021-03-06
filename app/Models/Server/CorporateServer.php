<?php

namespace App\Models\Server;


class CorporateServer
{
    protected $id;
    protected $name;
    protected $os;
    protected $release;
    protected $added;
    protected $edition;
    protected $licenses = [];

    protected $hasLicenseRequest = false;
    protected $hasCertificateRequest = false;
    protected $hasCertificate = false;

    protected $fillable = ['id','release', 'name','added', "os", "edition", "hasLicenseRequest", "hasCertificateRequest", "hasCertificate" ];

    public function __construct(array $data)
    {
        foreach($data as $property => $value)
        {
            if (property_exists($this, $property))
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

    public function addLicense(CorporateLicense  $license)
    {
        $this->licenses[$license->getId()] = $license;
    }

    /**
     * @param string $time
     */
    public function setAdded($time)
    {
        $this->added = strtotime($time);
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

    /**
     * @return mixed
     */
    public function getRelease()
    {
        return $this->release;
    }

    /**
     * @return array
     */
    public function getProcessModules()
    {
        $ar = [];
        foreach($this->licenses as $license) {
            if($license->isValid())
            {
                $ar = array_merge($ar,$license->getProcessModules());
            }
        }
        return $ar;
    }

    /**
     * @return array
     */
    public function getServerModules()
    {
        $ar = [];
        foreach($this->licenses as $license) {
            if($license->isValid())
            {
                $modules = $license->getServerModules();
                foreach($modules as $module)
                {
                    if(!in_array($module, $ar)) $ar[] = $module;
                }
                //$ar = array_merge($ar,$license->getServerModules());
            }
        }
        return array_unique($ar);
    }

    /**
     * @return mixed
     */
    public function getAdded()
    {
        return $this->added;
    }

    /**
     * @return array
     */
    public function getLicenses()
    {
        return $this->licenses;
    }

    public function getOs()
    {
        return $this->os;
    }

    public function getEdition()
    {
        return $this->edition;
    }

    /**
     * @return bool
     */
    public function isHasLicenseRequest()
    {
        return $this->hasLicenseRequest;
    }

    /**
     * @return bool
     */
    public function isHasCertificateRequest()
    {
        return $this->hasCertificateRequest;
    }

    /**
     * @return bool
     */
    public function isHasCertificate()
    {
        return $this->hasCertificate;
    }

}

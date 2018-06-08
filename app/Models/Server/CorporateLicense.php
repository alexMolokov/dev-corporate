<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 06.06.2018
 * Time: 17:21
 */

namespace App\Models\Server;


class CorporateLicense
{
    protected $id;
    protected $serverId;
    protected $status;
    protected $users;
    protected $validTill;
    protected $added;


    protected $processModules = [];
    protected $serverModules = [];


    protected $fillable = ['id','status', 'users','added', "validTill", "serverId"];

    public function isValid()
    {
        return is_null($this->validTill)
                ||
               ($this->validTill - strtotime(date("Y-m-d"))) >= 0;
    }

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
     * @param string $time
     */
    public function setAdded($time)
    {
        $this->added = strtotime($time);
    }

    /**
     * @param string $time
     */
    public function setValidTill($time)
    {
        if($time != "")
        {
           $this->validTill = strtotime($time);
        }
    }

    /**
     * @return mixed
     */
    public function getServerId()
    {
        return $this->serverId;
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
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @return array
     */
    public function getProcessModules()
    {
        return $this->processModules;
    }

    /**
     * @return array
     */
    public function getServerModules()
    {
        return $this->serverModules;
    }

    public function addServerModule($serverModule)
    {
        $this->serverModules[] = $serverModule;
    }

    public function addProcessModule($processModule, $count)
    {
        $this->processModules[$processModule] = $count;
    }

    /**
     * @return mixed
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * @return mixed
     */
    public function getValidTill()
    {
        return $this->validTill;
    }

    /**
     * @return mixed
     */
    public function getAdded()
    {
        return $this->added;
    }


}
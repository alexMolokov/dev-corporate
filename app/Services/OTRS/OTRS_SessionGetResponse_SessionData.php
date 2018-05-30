<?php

namespace App\OTRS;

class OTRS_SessionGetResponse_SessionData
{

    /**
     * @var string $Name
     */
    protected $Name = null;

    /**
     * @var string $Value
     */
    protected $Value = null;

    /**
     * @var int $Serialized
     */
    protected $Serialized = null;

    /**
     * @param string $Name
     * @param string $Value
     */
    public function __construct($Name, $Value)
    {
      $this->Name = $Name;
      $this->Value = $Value;
    }

    /**
     * @return string
     */
    public function getName()
    {
      return $this->Name;
    }

    /**
     * @param string $Name
     * @return \App\OTRS\OTRS_SessionGetResponse_SessionData
     */
    public function setName($Name)
    {
      $this->Name = $Name;
      return $this;
    }

    /**
     * @return string
     */
    public function getValue()
    {
      return $this->Value;
    }

    /**
     * @param string $Value
     * @return \App\OTRS\OTRS_SessionGetResponse_SessionData
     */
    public function setValue($Value)
    {
      $this->Value = $Value;
      return $this;
    }

    /**
     * @return int
     */
    public function getSerialized()
    {
      return $this->Serialized;
    }

    /**
     * @param int $Serialized
     * @return \App\OTRS\OTRS_SessionGetResponse_SessionData
     */
    public function setSerialized($Serialized)
    {
      $this->Serialized = $Serialized;
      return $this;
    }

}

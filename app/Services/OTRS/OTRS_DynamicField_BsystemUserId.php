<?php

namespace App\OTRS;

class OTRS_DynamicField_BsystemUserId
{

    /**
     * @var string $Equals
     */
    protected $Equals = null;

    public function __construct($Equals)
    {
      $this->Equals = $Equals;
    }

    /**
     * @return string
     */
    public function getEquals()
    {
      return $this->Equals;
    }

    /**
     * @param string $Name
     * @return \App\OTRS\OTRS_DynamicField
     */
    public function setEquals($Equals)
    {
      $this->Equals = $Equals;
      return $this;
    }
}

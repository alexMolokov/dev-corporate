<?php

namespace App\OTRS;

class OTRS_DynamicField
{

    /**
     * @var string $Name
     */
    protected $Name = null;

    /**
     * @var string[] $Value
     */
    protected $Value = null;

    /**
     * @param string $Name
     * @param string[] $Value
     */
    public function __construct($Name, array $Value)
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
     * @return \App\OTRS\OTRS_DynamicField
     */
    public function setName($Name)
    {
      $this->Name = $Name;
      return $this;
    }

    /**
     * @return string[]
     */
    public function getValue()
    {
      return $this->Value;
    }

    /**
     * @param string[] $Value
     * @return \App\OTRS\OTRS_DynamicField
     */
    public function setValue(array $Value)
    {
      $this->Value = $Value;
      return $this;
    }

}

<?php

namespace App\OTRS;

class OTRS_TicketSearch_DynamicField
{

    /**
     * @var string $Name
     */
    protected $Name = null;

    /**
     * @var string $Empty
     */
    protected $Empty = null;

    /**
     * @var string $Equals
     */
    protected $Equals = null;

    /**
     * @var string $Like
     */
    protected $Like = null;

    /**
     * @var string $GreaterThan
     */
    protected $GreaterThan = null;

    /**
     * @var string $GreaterThanEquals
     */
    protected $GreaterThanEquals = null;

    /**
     * @var string $SmallerThan
     */
    protected $SmallerThan = null;

    /**
     * @var string $SmallerThanEquals
     */
    protected $SmallerThanEquals = null;

    /**
     * @param string $Name
     */
    public function __construct($Name)
    {
      $this->Name = $Name;
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
     * @return \App\OTRS\OTRS_TicketSearch_DynamicField
     */
    public function setName($Name)
    {
      $this->Name = $Name;
      return $this;
    }

    /**
     * @return string
     */
    public function getEmpty()
    {
      return $this->Empty;
    }

    /**
     * @param string $Empty
     * @return \App\OTRS\OTRS_TicketSearch_DynamicField
     */
    public function setEmpty($Empty)
    {
      $this->Empty = $Empty;
      return $this;
    }

    /**
     * @return string
     */
    public function getEquals()
    {
      return $this->Equals;
    }

    /**
     * @param string $Equals
     * @return \App\OTRS\OTRS_TicketSearch_DynamicField
     */
    public function setEquals($Equals)
    {
      $this->Equals = $Equals;
      return $this;
    }

    /**
     * @return string
     */
    public function getLike()
    {
      return $this->Like;
    }

    /**
     * @param string $Like
     * @return \App\OTRS\OTRS_TicketSearch_DynamicField
     */
    public function setLike($Like)
    {
      $this->Like = $Like;
      return $this;
    }

    /**
     * @return string
     */
    public function getGreaterThan()
    {
      return $this->GreaterThan;
    }

    /**
     * @param string $GreaterThan
     * @return \App\OTRS\OTRS_TicketSearch_DynamicField
     */
    public function setGreaterThan($GreaterThan)
    {
      $this->GreaterThan = $GreaterThan;
      return $this;
    }

    /**
     * @return string
     */
    public function getGreaterThanEquals()
    {
      return $this->GreaterThanEquals;
    }

    /**
     * @param string $GreaterThanEquals
     * @return \App\OTRS\OTRS_TicketSearch_DynamicField
     */
    public function setGreaterThanEquals($GreaterThanEquals)
    {
      $this->GreaterThanEquals = $GreaterThanEquals;
      return $this;
    }

    /**
     * @return string
     */
    public function getSmallerThan()
    {
      return $this->SmallerThan;
    }

    /**
     * @param string $SmallerThan
     * @return \App\OTRS\OTRS_TicketSearch_DynamicField
     */
    public function setSmallerThan($SmallerThan)
    {
      $this->SmallerThan = $SmallerThan;
      return $this;
    }

    /**
     * @return string
     */
    public function getSmallerThanEquals()
    {
      return $this->SmallerThanEquals;
    }

    /**
     * @param string $SmallerThanEquals
     * @return \App\OTRS\OTRS_TicketSearch_DynamicField
     */
    public function setSmallerThanEquals($SmallerThanEquals)
    {
      $this->SmallerThanEquals = $SmallerThanEquals;
      return $this;
    }

}

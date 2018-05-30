<?php

namespace App\OTRS;

class OTRS_PendingTime
{

    /**
     * @var int $Year
     */
    protected $Year = null;

    /**
     * @var int $Month
     */
    protected $Month = null;

    /**
     * @var int $Day
     */
    protected $Day = null;

    /**
     * @var int $Hour
     */
    protected $Hour = null;

    /**
     * @var int $Minute
     */
    protected $Minute = null;

    /**
     * @var int $Diff
     */
    protected $Diff = null;

    /**
     * @param int $Year
     * @param int $Month
     * @param int $Day
     * @param int $Hour
     * @param int $Minute
     * @param int $Diff
     */
    public function __construct($Year, $Month, $Day, $Hour, $Minute, $Diff)
    {
      $this->Year = $Year;
      $this->Month = $Month;
      $this->Day = $Day;
      $this->Hour = $Hour;
      $this->Minute = $Minute;
      $this->Diff = $Diff;
    }

    /**
     * @return int
     */
    public function getYear()
    {
      return $this->Year;
    }

    /**
     * @param int $Year
     * @return \App\OTRS\OTRS_PendingTime
     */
    public function setYear($Year)
    {
      $this->Year = $Year;
      return $this;
    }

    /**
     * @return int
     */
    public function getMonth()
    {
      return $this->Month;
    }

    /**
     * @param int $Month
     * @return \App\OTRS\OTRS_PendingTime
     */
    public function setMonth($Month)
    {
      $this->Month = $Month;
      return $this;
    }

    /**
     * @return int
     */
    public function getDay()
    {
      return $this->Day;
    }

    /**
     * @param int $Day
     * @return \App\OTRS\OTRS_PendingTime
     */
    public function setDay($Day)
    {
      $this->Day = $Day;
      return $this;
    }

    /**
     * @return int
     */
    public function getHour()
    {
      return $this->Hour;
    }

    /**
     * @param int $Hour
     * @return \App\OTRS\OTRS_PendingTime
     */
    public function setHour($Hour)
    {
      $this->Hour = $Hour;
      return $this;
    }

    /**
     * @return int
     */
    public function getMinute()
    {
      return $this->Minute;
    }

    /**
     * @param int $Minute
     * @return \App\OTRS\OTRS_PendingTime
     */
    public function setMinute($Minute)
    {
      $this->Minute = $Minute;
      return $this;
    }

    /**
     * @return int
     */
    public function getDiff()
    {
      return $this->Diff;
    }

    /**
     * @param int $Diff
     * @return \App\OTRS\OTRS_PendingTime
     */
    public function setDiff($Diff)
    {
      $this->Diff = $Diff;
      return $this;
    }

}

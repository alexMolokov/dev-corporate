<?php

namespace App\OTRS;

class SessionCreateResponse
{

    /**
     * @var string $SessionID
     */
    protected $SessionID = null;

    /**
     * @var OTRS_Error $Error
     */
    protected $Error = null;

    /**
     * @param string $SessionID
     * @param OTRS_Error $Error
     */
    public function __construct($SessionID, $Error)
    {
      $this->SessionID = $SessionID;
      $this->Error = $Error;
    }

    /**
     * @return string
     */
    public function getSessionID()
    {
      return $this->SessionID;
    }

    /**
     * @param string $SessionID
     * @return \App\OTRS\SessionCreateResponse
     */
    public function setSessionID($SessionID)
    {
      $this->SessionID = $SessionID;
      return $this;
    }

    /**
     * @return OTRS_Error
     */
    public function getError()
    {
      return $this->Error;
    }

    /**
     * @param OTRS_Error $Error
     * @return \App\OTRS\SessionCreateResponse
     */
    public function setError($Error)
    {
      $this->Error = $Error;
      return $this;
    }

}

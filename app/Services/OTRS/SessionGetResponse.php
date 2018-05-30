<?php

namespace App\OTRS;

class SessionGetResponse
{

    /**
     * @var OTRS_SessionGetResponse_SessionData $SessionData
     */
    protected $SessionData = null;

    /**
     * @param OTRS_SessionGetResponse_SessionData $SessionData
     */
    public function __construct($SessionData)
    {
      $this->SessionData = $SessionData;
    }

    /**
     * @return OTRS_SessionGetResponse_SessionData
     */
    public function getSessionData()
    {
      return $this->SessionData;
    }

    /**
     * @param OTRS_SessionGetResponse_SessionData $SessionData
     * @return \App\OTRS\SessionGetResponse
     */
    public function setSessionData($SessionData)
    {
      $this->SessionData = $SessionData;
      return $this;
    }

}

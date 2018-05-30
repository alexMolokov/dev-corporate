<?php

namespace App\OTRS;

class SessionGet
{

    /**
     * @var string $SessionID
     */
    protected $SessionID = null;

    /**
     * @param string $SessionID
     */
    public function __construct($SessionID)
    {
      $this->SessionID = $SessionID;
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
     * @return \App\OTRS\SessionGet
     */
    public function setSessionID($SessionID)
    {
      $this->SessionID = $SessionID;
      return $this;
    }

}

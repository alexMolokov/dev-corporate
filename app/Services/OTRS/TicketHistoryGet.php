<?php

namespace App\OTRS;

class TicketHistoryGet
{

    /**
     * @var string $UserLogin
     */
    protected $UserLogin = null;

    /**
     * @var string $SessionID
     */
    protected $SessionID = null;

    /**
     * @var string $Password
     */
    protected $Password = null;

    /**
     * @var int $TicketID
     */
    protected $TicketID = null;

    /**
     * @param string $UserLogin
     * @param string $SessionID
     * @param string $Password
     * @param int $TicketID
     */
    public function __construct($UserLogin, $SessionID, $Password, $TicketID)
    {
      $this->UserLogin = $UserLogin;
      $this->SessionID = $SessionID;
      $this->Password = $Password;
      $this->TicketID = $TicketID;
    }

    /**
     * @return string
     */
    public function getUserLogin()
    {
      return $this->UserLogin;
    }

    /**
     * @param string $UserLogin
     * @return \App\OTRS\TicketHistoryGet
     */
    public function setUserLogin($UserLogin)
    {
      $this->UserLogin = $UserLogin;
      return $this;
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
     * @return \App\OTRS\TicketHistoryGet
     */
    public function setSessionID($SessionID)
    {
      $this->SessionID = $SessionID;
      return $this;
    }

    /**
     * @return string
     */
    public function getPassword()
    {
      return $this->Password;
    }

    /**
     * @param string $Password
     * @return \App\OTRS\TicketHistoryGet
     */
    public function setPassword($Password)
    {
      $this->Password = $Password;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketID()
    {
      return $this->TicketID;
    }

    /**
     * @param int $TicketID
     * @return \App\OTRS\TicketHistoryGet
     */
    public function setTicketID($TicketID)
    {
      $this->TicketID = $TicketID;
      return $this;
    }

}

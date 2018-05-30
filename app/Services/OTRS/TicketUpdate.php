<?php

namespace App\OTRS;

class TicketUpdate
{

    /**
     * @var string $UserLogin
     */
    protected $UserLogin = null;

    /**
     * @var string $CustomerUserLogin
     */
    protected $CustomerUserLogin = null;

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
     * @var string $TicketNumber
     */
    protected $TicketNumber = null;

    /**
     * @var OTRS_TicketUpdate_Ticket $Ticket
     */
    protected $Ticket = null;

    /**
     * @var OTRS_Article $Article
     */
    protected $Article = null;

    /**
     * @var OTRS_DynamicField $DynamicField
     */
    protected $DynamicField = null;

    /**
     * @var OTRS_Attachment $Attachment
     */
    protected $Attachment = null;

    /**
     * @param string $UserLogin
     * @param string $CustomerUserLogin
     * @param string $SessionID
     * @param string $Password
     * @param int $TicketID
     * @param string $TicketNumber
     * @param OTRS_TicketUpdate_Ticket $Ticket
     * @param OTRS_Article $Article
     * @param OTRS_DynamicField $DynamicField
     * @param OTRS_Attachment $Attachment
     */
    public function __construct($UserLogin, $CustomerUserLogin, $SessionID, $Password, $TicketID, $TicketNumber, $Ticket, $Article, $DynamicField, $Attachment)
    {
      $this->UserLogin = $UserLogin;
      $this->CustomerUserLogin = $CustomerUserLogin;
      $this->SessionID = $SessionID;
      $this->Password = $Password;
      $this->TicketID = $TicketID;
      $this->TicketNumber = $TicketNumber;
      $this->Ticket = $Ticket;
      $this->Article = $Article;
      $this->DynamicField = $DynamicField;
      $this->Attachment = $Attachment;
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
     * @return \App\OTRS\TicketUpdate
     */
    public function setUserLogin($UserLogin)
    {
      $this->UserLogin = $UserLogin;
      return $this;
    }

    /**
     * @return string
     */
    public function getCustomerUserLogin()
    {
      return $this->CustomerUserLogin;
    }

    /**
     * @param string $CustomerUserLogin
     * @return \App\OTRS\TicketUpdate
     */
    public function setCustomerUserLogin($CustomerUserLogin)
    {
      $this->CustomerUserLogin = $CustomerUserLogin;
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
     * @return \App\OTRS\TicketUpdate
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
     * @return \App\OTRS\TicketUpdate
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
     * @return \App\OTRS\TicketUpdate
     */
    public function setTicketID($TicketID)
    {
      $this->TicketID = $TicketID;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketNumber()
    {
      return $this->TicketNumber;
    }

    /**
     * @param string $TicketNumber
     * @return \App\OTRS\TicketUpdate
     */
    public function setTicketNumber($TicketNumber)
    {
      $this->TicketNumber = $TicketNumber;
      return $this;
    }

    /**
     * @return OTRS_TicketUpdate_Ticket
     */
    public function getTicket()
    {
      return $this->Ticket;
    }

    /**
     * @param OTRS_TicketUpdate_Ticket $Ticket
     * @return \App\OTRS\TicketUpdate
     */
    public function setTicket($Ticket)
    {
      $this->Ticket = $Ticket;
      return $this;
    }

    /**
     * @return OTRS_Article
     */
    public function getArticle()
    {
      return $this->Article;
    }

    /**
     * @param OTRS_Article $Article
     * @return \App\OTRS\TicketUpdate
     */
    public function setArticle($Article)
    {
      $this->Article = $Article;
      return $this;
    }

    /**
     * @return OTRS_DynamicField
     */
    public function getDynamicField()
    {
      return $this->DynamicField;
    }

    /**
     * @param OTRS_DynamicField $DynamicField
     * @return \App\OTRS\TicketUpdate
     */
    public function setDynamicField($DynamicField)
    {
      $this->DynamicField = $DynamicField;
      return $this;
    }

    /**
     * @return OTRS_Attachment
     */
    public function getAttachment()
    {
      return $this->Attachment;
    }

    /**
     * @param OTRS_Attachment $Attachment
     * @return \App\OTRS\TicketUpdate
     */
    public function setAttachment($Attachment)
    {
      $this->Attachment = $Attachment;
      return $this;
    }

}

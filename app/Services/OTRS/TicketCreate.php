<?php

namespace App\OTRS;

class TicketCreate
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
     * @var OTRS_TicketCreate_Ticket $Ticket
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
     * @param OTRS_TicketCreate_Ticket $Ticket
     * @param OTRS_Article $Article
     * @param OTRS_DynamicField $DynamicField
     * @param OTRS_Attachment $Attachment
     */
    public function __construct($UserLogin, $CustomerUserLogin, $SessionID, $Password, $Ticket, $Article, $DynamicField, $Attachment)
    {
      $this->UserLogin = $UserLogin;
      $this->CustomerUserLogin = $CustomerUserLogin;
      $this->SessionID = $SessionID;
      $this->Password = $Password;
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
     * @return \App\OTRS\TicketCreate
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
     * @return \App\OTRS\TicketCreate
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
     * @return \App\OTRS\TicketCreate
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
     * @return \App\OTRS\TicketCreate
     */
    public function setPassword($Password)
    {
      $this->Password = $Password;
      return $this;
    }

    /**
     * @return OTRS_TicketCreate_Ticket
     */
    public function getTicket()
    {
      return $this->Ticket;
    }

    /**
     * @param OTRS_TicketCreate_Ticket $Ticket
     * @return \App\OTRS\TicketCreate
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
     * @return \App\OTRS\TicketCreate
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
     * @return \App\OTRS\TicketCreate
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
     * @return \App\OTRS\TicketCreate
     */
    public function setAttachment($Attachment)
    {
      $this->Attachment = $Attachment;
      return $this;
    }

}

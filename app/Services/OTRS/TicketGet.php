<?php

namespace App\OTRS;

class TicketGet
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
     * @var int $DynamicFields
     */
    protected $DynamicFields = null;

    /**
     * @var int $Extended
     */
    protected $Extended = null;

    /**
     * @var int $AllArticles
     */
    protected $AllArticles = null;

    /**
     * @var string $ArticleSenderType
     */
    protected $ArticleSenderType = null;

    /**
     * @var string $ArticleOrder
     */
    protected $ArticleOrder = null;

    /**
     * @var int $ArticleLimit
     */
    protected $ArticleLimit = null;

    /**
     * @var int $Attachments
     */
    protected $Attachments = null;

    /**
     * @var int $GetAttachmentContents
     */
    protected $GetAttachmentContents = null;

    /**
     * @var int $HTMLBodyAsAttachment
     */
    protected $HTMLBodyAsAttachment = null;

    /**
     * @param string $UserLogin
     * @param string $CustomerUserLogin
     * @param string $SessionID
     * @param string $Password
     * @param int $TicketID
     * @param int $DynamicFields
     * @param int $Extended
     * @param int $AllArticles
     * @param string $ArticleSenderType
     * @param string $ArticleOrder
     * @param int $ArticleLimit
     * @param int $Attachments
     * @param int $GetAttachmentContents
     * @param int $HTMLBodyAsAttachment
     */
    public function __construct($UserLogin, $CustomerUserLogin, $SessionID, $Password, $TicketID, $DynamicFields, $Extended, $AllArticles, $ArticleSenderType, $ArticleOrder, $ArticleLimit, $Attachments, $GetAttachmentContents, $HTMLBodyAsAttachment)
    {
      $this->UserLogin = $UserLogin;
      $this->CustomerUserLogin = $CustomerUserLogin;
      $this->SessionID = $SessionID;
      $this->Password = $Password;
      $this->TicketID = $TicketID;
      $this->DynamicFields = $DynamicFields;
      $this->Extended = $Extended;
      $this->AllArticles = $AllArticles;
      $this->ArticleSenderType = $ArticleSenderType;
      $this->ArticleOrder = $ArticleOrder;
      $this->ArticleLimit = $ArticleLimit;
      $this->Attachments = $Attachments;
      $this->GetAttachmentContents = $GetAttachmentContents;
      $this->HTMLBodyAsAttachment = $HTMLBodyAsAttachment;
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
     * @return \App\OTRS\TicketGet
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
     * @return \App\OTRS\TicketGet
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
     * @return \App\OTRS\TicketGet
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
     * @return \App\OTRS\TicketGet
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
     * @return \App\OTRS\TicketGet
     */
    public function setTicketID($TicketID)
    {
      $this->TicketID = $TicketID;
      return $this;
    }

    /**
     * @return int
     */
    public function getDynamicFields()
    {
      return $this->DynamicFields;
    }

    /**
     * @param int $DynamicFields
     * @return \App\OTRS\TicketGet
     */
    public function setDynamicFields($DynamicFields)
    {
      $this->DynamicFields = $DynamicFields;
      return $this;
    }

    /**
     * @return int
     */
    public function getExtended()
    {
      return $this->Extended;
    }

    /**
     * @param int $Extended
     * @return \App\OTRS\TicketGet
     */
    public function setExtended($Extended)
    {
      $this->Extended = $Extended;
      return $this;
    }

    /**
     * @return int
     */
    public function getAllArticles()
    {
      return $this->AllArticles;
    }

    /**
     * @param int $AllArticles
     * @return \App\OTRS\TicketGet
     */
    public function setAllArticles($AllArticles)
    {
      $this->AllArticles = $AllArticles;
      return $this;
    }

    /**
     * @return string
     */
    public function getArticleSenderType()
    {
      return $this->ArticleSenderType;
    }

    /**
     * @param string $ArticleSenderType
     * @return \App\OTRS\TicketGet
     */
    public function setArticleSenderType($ArticleSenderType)
    {
      $this->ArticleSenderType = $ArticleSenderType;
      return $this;
    }

    /**
     * @return string
     */
    public function getArticleOrder()
    {
      return $this->ArticleOrder;
    }

    /**
     * @param string $ArticleOrder
     * @return \App\OTRS\TicketGet
     */
    public function setArticleOrder($ArticleOrder)
    {
      $this->ArticleOrder = $ArticleOrder;
      return $this;
    }

    /**
     * @return int
     */
    public function getArticleLimit()
    {
      return $this->ArticleLimit;
    }

    /**
     * @param int $ArticleLimit
     * @return \App\OTRS\TicketGet
     */
    public function setArticleLimit($ArticleLimit)
    {
      $this->ArticleLimit = $ArticleLimit;
      return $this;
    }

    /**
     * @return int
     */
    public function getAttachments()
    {
      return $this->Attachments;
    }

    /**
     * @param int $Attachments
     * @return \App\OTRS\TicketGet
     */
    public function setAttachments($Attachments)
    {
      $this->Attachments = $Attachments;
      return $this;
    }

    /**
     * @return int
     */
    public function getGetAttachmentContents()
    {
      return $this->GetAttachmentContents;
    }

    /**
     * @param int $GetAttachmentContents
     * @return \App\OTRS\TicketGet
     */
    public function setGetAttachmentContents($GetAttachmentContents)
    {
      $this->GetAttachmentContents = $GetAttachmentContents;
      return $this;
    }

    /**
     * @return int
     */
    public function getHTMLBodyAsAttachment()
    {
      return $this->HTMLBodyAsAttachment;
    }

    /**
     * @param int $HTMLBodyAsAttachment
     * @return \App\OTRS\TicketGet
     */
    public function setHTMLBodyAsAttachment($HTMLBodyAsAttachment)
    {
      $this->HTMLBodyAsAttachment = $HTMLBodyAsAttachment;
      return $this;
    }

}

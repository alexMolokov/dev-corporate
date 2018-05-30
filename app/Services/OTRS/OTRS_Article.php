<?php

namespace App\OTRS;

class OTRS_Article
{

    /**
     * @var int $CommunicationChannelID
     */
    protected $CommunicationChannelID = null;

    /**
     * @var OTRS_MIME_Communication_Channel $CommunicationChannel
     */
    protected $CommunicationChannel = null;

    /**
     * @var string $IsVisibleForCustomer
     */
    protected $IsVisibleForCustomer = null;

    /**
     * @var int $SenderTypeID
     */
    protected $SenderTypeID = null;

    /**
     * @var string $SenderType
     */
    protected $SenderType = null;

    /**
     * @var string $From
     */
    protected $From = null;

    /**
     * @var string $Subject
     */
    protected $Subject = null;

    /**
     * @var string $Body
     */
    protected $Body = null;

    /**
     * @var string $ContentType
     */
    protected $ContentType = null;

    /**
     * @var string $Charset
     */
    protected $Charset = null;

    /**
     * @var string $MimeType
     */
    protected $MimeType = null;

    /**
     * @var string $HistoryType
     */
    protected $HistoryType = null;

    /**
     * @var string $HistoryComment
     */
    protected $HistoryComment = null;

    /**
     * @var string $AutoResponseType
     */
    protected $AutoResponseType = null;

    /**
     * @var float $TimeUnit
     */
    protected $TimeUnit = null;

    /**
     * @var int $NoAgentNotify
     */
    protected $NoAgentNotify = null;

    /**
     * @var positiveInteger[] $ForceNotificationToUserID
     */
    protected $ForceNotificationToUserID = null;

    /**
     * @var positiveInteger[] $ExcludeNotificationToUserID
     */
    protected $ExcludeNotificationToUserID = null;

    /**
     * @var positiveInteger[] $ExcludeMuteNotificationToUserID
     */
    protected $ExcludeMuteNotificationToUserID = null;

    /**
     * @param string $IsVisibleForCustomer
     * @param string $Subject
     * @param string $Body
     * @param string $Charset
     * @param string $MimeType
     */
    public function __construct($IsVisibleForCustomer, $Subject, $Body, $Charset, $MimeType)
    {
      $this->IsVisibleForCustomer = $IsVisibleForCustomer;
      $this->Subject = $Subject;
      $this->Body = $Body;
      $this->Charset = $Charset;
      $this->MimeType = $MimeType;
    }

    /**
     * @return int
     */
    public function getCommunicationChannelID()
    {
      return $this->CommunicationChannelID;
    }

    /**
     * @param int $CommunicationChannelID
     * @return \App\OTRS\OTRS_Article
     */
    public function setCommunicationChannelID($CommunicationChannelID)
    {
      $this->CommunicationChannelID = $CommunicationChannelID;
      return $this;
    }

    /**
     * @return OTRS_MIME_Communication_Channel
     */
    public function getCommunicationChannel()
    {
      return $this->CommunicationChannel;
    }

    /**
     * @param OTRS_MIME_Communication_Channel $CommunicationChannel
     * @return \App\OTRS\OTRS_Article
     */
    public function setCommunicationChannel($CommunicationChannel)
    {
      $this->CommunicationChannel = $CommunicationChannel;
      return $this;
    }

    /**
     * @return string
     */
    public function getIsVisibleForCustomer()
    {
      return $this->IsVisibleForCustomer;
    }

    /**
     * @param string $IsVisibleForCustomer
     * @return \App\OTRS\OTRS_Article
     */
    public function setIsVisibleForCustomer($IsVisibleForCustomer)
    {
      $this->IsVisibleForCustomer = $IsVisibleForCustomer;
      return $this;
    }

    /**
     * @return int
     */
    public function getSenderTypeID()
    {
      return $this->SenderTypeID;
    }

    /**
     * @param int $SenderTypeID
     * @return \App\OTRS\OTRS_Article
     */
    public function setSenderTypeID($SenderTypeID)
    {
      $this->SenderTypeID = $SenderTypeID;
      return $this;
    }

    /**
     * @return string
     */
    public function getSenderType()
    {
      return $this->SenderType;
    }

    /**
     * @param string $SenderType
     * @return \App\OTRS\OTRS_Article
     */
    public function setSenderType($SenderType)
    {
      $this->SenderType = $SenderType;
      return $this;
    }

    /**
     * @return string
     */
    public function getFrom()
    {
      return $this->From;
    }

    /**
     * @param string $From
     * @return \App\OTRS\OTRS_Article
     */
    public function setFrom($From)
    {
      $this->From = $From;
      return $this;
    }

    /**
     * @return string
     */
    public function getSubject()
    {
      return $this->Subject;
    }

    /**
     * @param string $Subject
     * @return \App\OTRS\OTRS_Article
     */
    public function setSubject($Subject)
    {
      $this->Subject = $Subject;
      return $this;
    }

    /**
     * @return string
     */
    public function getBody()
    {
      return $this->Body;
    }

    /**
     * @param string $Body
     * @return \App\OTRS\OTRS_Article
     */
    public function setBody($Body)
    {
      $this->Body = $Body;
      return $this;
    }

    /**
     * @return string
     */
    public function getContentType()
    {
      return $this->ContentType;
    }

    /**
     * @param string $ContentType
     * @return \App\OTRS\OTRS_Article
     */
    public function setContentType($ContentType)
    {
      $this->ContentType = $ContentType;
      return $this;
    }

    /**
     * @return string
     */
    public function getCharset()
    {
      return $this->Charset;
    }

    /**
     * @param string $Charset
     * @return \App\OTRS\OTRS_Article
     */
    public function setCharset($Charset)
    {
      $this->Charset = $Charset;
      return $this;
    }

    /**
     * @return string
     */
    public function getMimeType()
    {
      return $this->MimeType;
    }

    /**
     * @param string $MimeType
     * @return \App\OTRS\OTRS_Article
     */
    public function setMimeType($MimeType)
    {
      $this->MimeType = $MimeType;
      return $this;
    }

    /**
     * @return string
     */
    public function getHistoryType()
    {
      return $this->HistoryType;
    }

    /**
     * @param string $HistoryType
     * @return \App\OTRS\OTRS_Article
     */
    public function setHistoryType($HistoryType)
    {
      $this->HistoryType = $HistoryType;
      return $this;
    }

    /**
     * @return string
     */
    public function getHistoryComment()
    {
      return $this->HistoryComment;
    }

    /**
     * @param string $HistoryComment
     * @return \App\OTRS\OTRS_Article
     */
    public function setHistoryComment($HistoryComment)
    {
      $this->HistoryComment = $HistoryComment;
      return $this;
    }

    /**
     * @return string
     */
    public function getAutoResponseType()
    {
      return $this->AutoResponseType;
    }

    /**
     * @param string $AutoResponseType
     * @return \App\OTRS\OTRS_Article
     */
    public function setAutoResponseType($AutoResponseType)
    {
      $this->AutoResponseType = $AutoResponseType;
      return $this;
    }

    /**
     * @return float
     */
    public function getTimeUnit()
    {
      return $this->TimeUnit;
    }

    /**
     * @param float $TimeUnit
     * @return \App\OTRS\OTRS_Article
     */
    public function setTimeUnit($TimeUnit)
    {
      $this->TimeUnit = $TimeUnit;
      return $this;
    }

    /**
     * @return int
     */
    public function getNoAgentNotify()
    {
      return $this->NoAgentNotify;
    }

    /**
     * @param int $NoAgentNotify
     * @return \App\OTRS\OTRS_Article
     */
    public function setNoAgentNotify($NoAgentNotify)
    {
      $this->NoAgentNotify = $NoAgentNotify;
      return $this;
    }

    /**
     * @return positiveInteger[]
     */
    public function getForceNotificationToUserID()
    {
      return $this->ForceNotificationToUserID;
    }

    /**
     * @param positiveInteger[] $ForceNotificationToUserID
     * @return \App\OTRS\OTRS_Article
     */
    public function setForceNotificationToUserID(array $ForceNotificationToUserID = null)
    {
      $this->ForceNotificationToUserID = $ForceNotificationToUserID;
      return $this;
    }

    /**
     * @return positiveInteger[]
     */
    public function getExcludeNotificationToUserID()
    {
      return $this->ExcludeNotificationToUserID;
    }

    /**
     * @param positiveInteger[] $ExcludeNotificationToUserID
     * @return \App\OTRS\OTRS_Article
     */
    public function setExcludeNotificationToUserID(array $ExcludeNotificationToUserID = null)
    {
      $this->ExcludeNotificationToUserID = $ExcludeNotificationToUserID;
      return $this;
    }

    /**
     * @return positiveInteger[]
     */
    public function getExcludeMuteNotificationToUserID()
    {
      return $this->ExcludeMuteNotificationToUserID;
    }

    /**
     * @param positiveInteger[] $ExcludeMuteNotificationToUserID
     * @return \App\OTRS\OTRS_Article
     */
    public function setExcludeMuteNotificationToUserID(array $ExcludeMuteNotificationToUserID = null)
    {
      $this->ExcludeMuteNotificationToUserID = $ExcludeMuteNotificationToUserID;
      return $this;
    }

}

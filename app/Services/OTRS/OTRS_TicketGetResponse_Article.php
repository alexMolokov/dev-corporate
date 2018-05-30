<?php

namespace App\OTRS;

class OTRS_TicketGetResponse_Article
{

    /**
     * @var int $Age
     */
    protected $Age = null;

    /**
     * @var int $AgeTimeUnix
     */
    protected $AgeTimeUnix = null;

    /**
     * @var int $ArticleID
     */
    protected $ArticleID = null;

    /**
     * @var string $ArticleType
     */
    protected $ArticleType = null;

    /**
     * @var int $ArticleTypeID
     */
    protected $ArticleTypeID = null;

    /**
     * @var OTRS_TicketGetResponse_Attachment[] $Attachment
     */
    protected $Attachment = null;

    /**
     * @var string $Body
     */
    protected $Body = null;

    /**
     * @var string $Cc
     */
    protected $Cc = null;

    /**
     * @var string $CcRealname
     */
    protected $CcRealname = null;

    /**
     * @var string $Changed
     */
    protected $Changed = null;

    /**
     * @var string $Charset
     */
    protected $Charset = null;

    /**
     * @var string $Closed
     */
    protected $Closed = null;

    /**
     * @var string $ContentCharset
     */
    protected $ContentCharset = null;

    /**
     * @var string $ContentType
     */
    protected $ContentType = null;

    /**
     * @var string $Created
     */
    protected $Created = null;

    /**
     * @var int $CreatedBy
     */
    protected $CreatedBy = null;

    /**
     * @var string $CustomerID
     */
    protected $CustomerID = null;

    /**
     * @var string $CustomerUserID
     */
    protected $CustomerUserID = null;

    /**
     * @var string[] $DynamicField
     */
    protected $DynamicField = null;

    /**
     * @var string $EscalationDestinationDate
     */
    protected $EscalationDestinationDate = null;

    /**
     * @var string $EscalationDestinationIn
     */
    protected $EscalationDestinationIn = null;

    /**
     * @var string $EscalationDestinationTime
     */
    protected $EscalationDestinationTime = null;

    /**
     * @var string $EscalationResponseTime
     */
    protected $EscalationResponseTime = null;

    /**
     * @var string $EscalationSolutionTime
     */
    protected $EscalationSolutionTime = null;

    /**
     * @var string $EscalationTime
     */
    protected $EscalationTime = null;

    /**
     * @var string $EscalationTimeWorkingTime
     */
    protected $EscalationTimeWorkingTime = null;

    /**
     * @var string $EscalationUpdateTime
     */
    protected $EscalationUpdateTime = null;

    /**
     * @var string $FirstLock
     */
    protected $FirstLock = null;

    /**
     * @var string $From
     */
    protected $From = null;

    /**
     * @var string $FromRealname
     */
    protected $FromRealname = null;

    /**
     * @var string $InReplyTo
     */
    protected $InReplyTo = null;

    /**
     * @var string $IncomingTime
     */
    protected $IncomingTime = null;

    /**
     * @var string $Lock
     */
    protected $Lock = null;

    /**
     * @var int $LockID
     */
    protected $LockID = null;

    /**
     * @var int $MessageID
     */
    protected $MessageID = null;

    /**
     * @var string $MimeType
     */
    protected $MimeType = null;

    /**
     * @var string $Owner
     */
    protected $Owner = null;

    /**
     * @var int $OwnerID
     */
    protected $OwnerID = null;

    /**
     * @var string $Priority
     */
    protected $Priority = null;

    /**
     * @var int $PriorityID
     */
    protected $PriorityID = null;

    /**
     * @var string $Queue
     */
    protected $Queue = null;

    /**
     * @var int $QueueID
     */
    protected $QueueID = null;

    /**
     * @var string $RealTillTimeNotUsed
     */
    protected $RealTillTimeNotUsed = null;

    /**
     * @var string $References
     */
    protected $References = null;

    /**
     * @var string $ReplyTo
     */
    protected $ReplyTo = null;

    /**
     * @var string $Responsible
     */
    protected $Responsible = null;

    /**
     * @var int $ResponsibleID
     */
    protected $ResponsibleID = null;

    /**
     * @var string $SLA
     */
    protected $SLA = null;

    /**
     * @var int $SLAID
     */
    protected $SLAID = null;

    /**
     * @var string $SenderType
     */
    protected $SenderType = null;

    /**
     * @var int $SenderTypeID
     */
    protected $SenderTypeID = null;

    /**
     * @var string $Service
     */
    protected $Service = null;

    /**
     * @var int $ServiceID
     */
    protected $ServiceID = null;

    /**
     * @var string $SolutionTime
     */
    protected $SolutionTime = null;

    /**
     * @var string $SolutionTimeDestinationDate
     */
    protected $SolutionTimeDestinationDate = null;

    /**
     * @var string $SolutionTimeDestinationTime
     */
    protected $SolutionTimeDestinationTime = null;

    /**
     * @var string $SolutionTimeWorkingTime
     */
    protected $SolutionTimeWorkingTime = null;

    /**
     * @var string $State
     */
    protected $State = null;

    /**
     * @var int $StateID
     */
    protected $StateID = null;

    /**
     * @var string $StateType
     */
    protected $StateType = null;

    /**
     * @var string $Subject
     */
    protected $Subject = null;

    /**
     * @var string $TicketFreeKeyX
     */
    protected $TicketFreeKeyX = null;

    /**
     * @var string $TicketFreeTextX
     */
    protected $TicketFreeTextX = null;

    /**
     * @var string $TicketFreeTimeX
     */
    protected $TicketFreeTimeX = null;

    /**
     * @var int $TicketID
     */
    protected $TicketID = null;

    /**
     * @var string $TicketNumber
     */
    protected $TicketNumber = null;

    /**
     * @var string $Title
     */
    protected $Title = null;

    /**
     * @var float $TimeUnit
     */
    protected $TimeUnit = null;

    /**
     * @var string $To
     */
    protected $To = null;

    /**
     * @var string $ToRealname
     */
    protected $ToRealname = null;

    /**
     * @var string $Type
     */
    protected $Type = null;

    /**
     * @var int $TypeID
     */
    protected $TypeID = null;

    /**
     * @var int $UntilTime
     */
    protected $UntilTime = null;

    /**
     * @param int $Age
     * @param int $AgeTimeUnix
     * @param int $ArticleID
     * @param string $ArticleType
     * @param int $ArticleTypeID
     * @param string $Body
     * @param string $Cc
     * @param string $Changed
     * @param string $Charset
     * @param string $ContentCharset
     * @param string $ContentType
     * @param string $Created
     * @param int $CreatedBy
     * @param string $CustomerUserID
     * @param string $EscalationTime
     * @param int $LockID
     * @param int $MessageID
     * @param string $Owner
     * @param int $OwnerID
     * @param string $Priority
     * @param int $PriorityID
     * @param string $Queue
     * @param int $QueueID
     * @param string $References
     * @param string $ReplyTo
     * @param string $Responsible
     * @param int $ResponsibleID
     * @param string $SenderType
     * @param int $SenderTypeID
     * @param string $State
     * @param int $StateID
     * @param string $StateType
     * @param string $Subject
     * @param int $TicketID
     * @param string $TicketNumber
     * @param string $Title
     * @param string $To
     * @param string $ToRealname
     * @param string $Type
     * @param int $TypeID
     * @param int $UntilTime
     */
    public function __construct($Age, $AgeTimeUnix, $ArticleID, $ArticleType, $ArticleTypeID, $Body, $Cc, $Changed, $Charset, $ContentCharset, $ContentType, $Created, $CreatedBy, $CustomerUserID, $EscalationTime, $LockID, $MessageID, $Owner, $OwnerID, $Priority, $PriorityID, $Queue, $QueueID, $References, $ReplyTo, $Responsible, $ResponsibleID, $SenderType, $SenderTypeID, $State, $StateID, $StateType, $Subject, $TicketID, $TicketNumber, $Title, $To, $ToRealname, $Type, $TypeID, $UntilTime)
    {
      $this->Age = $Age;
      $this->AgeTimeUnix = $AgeTimeUnix;
      $this->ArticleID = $ArticleID;
      $this->ArticleType = $ArticleType;
      $this->ArticleTypeID = $ArticleTypeID;
      $this->Body = $Body;
      $this->Cc = $Cc;
      $this->Changed = $Changed;
      $this->Charset = $Charset;
      $this->ContentCharset = $ContentCharset;
      $this->ContentType = $ContentType;
      $this->Created = $Created;
      $this->CreatedBy = $CreatedBy;
      $this->CustomerUserID = $CustomerUserID;
      $this->EscalationTime = $EscalationTime;
      $this->LockID = $LockID;
      $this->MessageID = $MessageID;
      $this->Owner = $Owner;
      $this->OwnerID = $OwnerID;
      $this->Priority = $Priority;
      $this->PriorityID = $PriorityID;
      $this->Queue = $Queue;
      $this->QueueID = $QueueID;
      $this->References = $References;
      $this->ReplyTo = $ReplyTo;
      $this->Responsible = $Responsible;
      $this->ResponsibleID = $ResponsibleID;
      $this->SenderType = $SenderType;
      $this->SenderTypeID = $SenderTypeID;
      $this->State = $State;
      $this->StateID = $StateID;
      $this->StateType = $StateType;
      $this->Subject = $Subject;
      $this->TicketID = $TicketID;
      $this->TicketNumber = $TicketNumber;
      $this->Title = $Title;
      $this->To = $To;
      $this->ToRealname = $ToRealname;
      $this->Type = $Type;
      $this->TypeID = $TypeID;
      $this->UntilTime = $UntilTime;
    }

    /**
     * @return int
     */
    public function getAge()
    {
      return $this->Age;
    }

    /**
     * @param int $Age
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setAge($Age)
    {
      $this->Age = $Age;
      return $this;
    }

    /**
     * @return int
     */
    public function getAgeTimeUnix()
    {
      return $this->AgeTimeUnix;
    }

    /**
     * @param int $AgeTimeUnix
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setAgeTimeUnix($AgeTimeUnix)
    {
      $this->AgeTimeUnix = $AgeTimeUnix;
      return $this;
    }

    /**
     * @return int
     */
    public function getArticleID()
    {
      return $this->ArticleID;
    }

    /**
     * @param int $ArticleID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setArticleID($ArticleID)
    {
      $this->ArticleID = $ArticleID;
      return $this;
    }

    /**
     * @return string
     */
    public function getArticleType()
    {
      return $this->ArticleType;
    }

    /**
     * @param string $ArticleType
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setArticleType($ArticleType)
    {
      $this->ArticleType = $ArticleType;
      return $this;
    }

    /**
     * @return int
     */
    public function getArticleTypeID()
    {
      return $this->ArticleTypeID;
    }

    /**
     * @param int $ArticleTypeID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setArticleTypeID($ArticleTypeID)
    {
      $this->ArticleTypeID = $ArticleTypeID;
      return $this;
    }

    /**
     * @return OTRS_TicketGetResponse_Attachment[]
     */
    public function getAttachment()
    {
      return $this->Attachment;
    }

    /**
     * @param OTRS_TicketGetResponse_Attachment[] $Attachment
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setAttachment(array $Attachment = null)
    {
      $this->Attachment = $Attachment;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setBody($Body)
    {
      $this->Body = $Body;
      return $this;
    }

    /**
     * @return string
     */
    public function getCc()
    {
      return $this->Cc;
    }

    /**
     * @param string $Cc
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setCc($Cc)
    {
      $this->Cc = $Cc;
      return $this;
    }

    /**
     * @return string
     */
    public function getCcRealname()
    {
      return $this->CcRealname;
    }

    /**
     * @param string $CcRealname
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setCcRealname($CcRealname)
    {
      $this->CcRealname = $CcRealname;
      return $this;
    }

    /**
     * @return string
     */
    public function getChanged()
    {
      return $this->Changed;
    }

    /**
     * @param string $Changed
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setChanged($Changed)
    {
      $this->Changed = $Changed;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setCharset($Charset)
    {
      $this->Charset = $Charset;
      return $this;
    }

    /**
     * @return string
     */
    public function getClosed()
    {
      return $this->Closed;
    }

    /**
     * @param string $Closed
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setClosed($Closed)
    {
      $this->Closed = $Closed;
      return $this;
    }

    /**
     * @return string
     */
    public function getContentCharset()
    {
      return $this->ContentCharset;
    }

    /**
     * @param string $ContentCharset
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setContentCharset($ContentCharset)
    {
      $this->ContentCharset = $ContentCharset;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setContentType($ContentType)
    {
      $this->ContentType = $ContentType;
      return $this;
    }

    /**
     * @return string
     */
    public function getCreated()
    {
      return $this->Created;
    }

    /**
     * @param string $Created
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setCreated($Created)
    {
      $this->Created = $Created;
      return $this;
    }

    /**
     * @return int
     */
    public function getCreatedBy()
    {
      return $this->CreatedBy;
    }

    /**
     * @param int $CreatedBy
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setCreatedBy($CreatedBy)
    {
      $this->CreatedBy = $CreatedBy;
      return $this;
    }

    /**
     * @return string
     */
    public function getCustomerID()
    {
      return $this->CustomerID;
    }

    /**
     * @param string $CustomerID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setCustomerID($CustomerID)
    {
      $this->CustomerID = $CustomerID;
      return $this;
    }

    /**
     * @return string
     */
    public function getCustomerUserID()
    {
      return $this->CustomerUserID;
    }

    /**
     * @param string $CustomerUserID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setCustomerUserID($CustomerUserID)
    {
      $this->CustomerUserID = $CustomerUserID;
      return $this;
    }

    /**
     * @return string[]
     */
    public function getDynamicField()
    {
      return $this->DynamicField;
    }

    /**
     * @param string[] $DynamicField
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setDynamicField(array $DynamicField = null)
    {
      $this->DynamicField = $DynamicField;
      return $this;
    }

    /**
     * @return string
     */
    public function getEscalationDestinationDate()
    {
      return $this->EscalationDestinationDate;
    }

    /**
     * @param string $EscalationDestinationDate
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setEscalationDestinationDate($EscalationDestinationDate)
    {
      $this->EscalationDestinationDate = $EscalationDestinationDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getEscalationDestinationIn()
    {
      return $this->EscalationDestinationIn;
    }

    /**
     * @param string $EscalationDestinationIn
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setEscalationDestinationIn($EscalationDestinationIn)
    {
      $this->EscalationDestinationIn = $EscalationDestinationIn;
      return $this;
    }

    /**
     * @return string
     */
    public function getEscalationDestinationTime()
    {
      return $this->EscalationDestinationTime;
    }

    /**
     * @param string $EscalationDestinationTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setEscalationDestinationTime($EscalationDestinationTime)
    {
      $this->EscalationDestinationTime = $EscalationDestinationTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getEscalationResponseTime()
    {
      return $this->EscalationResponseTime;
    }

    /**
     * @param string $EscalationResponseTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setEscalationResponseTime($EscalationResponseTime)
    {
      $this->EscalationResponseTime = $EscalationResponseTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getEscalationSolutionTime()
    {
      return $this->EscalationSolutionTime;
    }

    /**
     * @param string $EscalationSolutionTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setEscalationSolutionTime($EscalationSolutionTime)
    {
      $this->EscalationSolutionTime = $EscalationSolutionTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getEscalationTime()
    {
      return $this->EscalationTime;
    }

    /**
     * @param string $EscalationTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setEscalationTime($EscalationTime)
    {
      $this->EscalationTime = $EscalationTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getEscalationTimeWorkingTime()
    {
      return $this->EscalationTimeWorkingTime;
    }

    /**
     * @param string $EscalationTimeWorkingTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setEscalationTimeWorkingTime($EscalationTimeWorkingTime)
    {
      $this->EscalationTimeWorkingTime = $EscalationTimeWorkingTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getEscalationUpdateTime()
    {
      return $this->EscalationUpdateTime;
    }

    /**
     * @param string $EscalationUpdateTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setEscalationUpdateTime($EscalationUpdateTime)
    {
      $this->EscalationUpdateTime = $EscalationUpdateTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getFirstLock()
    {
      return $this->FirstLock;
    }

    /**
     * @param string $FirstLock
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setFirstLock($FirstLock)
    {
      $this->FirstLock = $FirstLock;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setFrom($From)
    {
      $this->From = $From;
      return $this;
    }

    /**
     * @return string
     */
    public function getFromRealname()
    {
      return $this->FromRealname;
    }

    /**
     * @param string $FromRealname
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setFromRealname($FromRealname)
    {
      $this->FromRealname = $FromRealname;
      return $this;
    }

    /**
     * @return string
     */
    public function getInReplyTo()
    {
      return $this->InReplyTo;
    }

    /**
     * @param string $InReplyTo
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setInReplyTo($InReplyTo)
    {
      $this->InReplyTo = $InReplyTo;
      return $this;
    }

    /**
     * @return string
     */
    public function getIncomingTime()
    {
      return $this->IncomingTime;
    }

    /**
     * @param string $IncomingTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setIncomingTime($IncomingTime)
    {
      $this->IncomingTime = $IncomingTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getLock()
    {
      return $this->Lock;
    }

    /**
     * @param string $Lock
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setLock($Lock)
    {
      $this->Lock = $Lock;
      return $this;
    }

    /**
     * @return int
     */
    public function getLockID()
    {
      return $this->LockID;
    }

    /**
     * @param int $LockID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setLockID($LockID)
    {
      $this->LockID = $LockID;
      return $this;
    }

    /**
     * @return int
     */
    public function getMessageID()
    {
      return $this->MessageID;
    }

    /**
     * @param int $MessageID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setMessageID($MessageID)
    {
      $this->MessageID = $MessageID;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setMimeType($MimeType)
    {
      $this->MimeType = $MimeType;
      return $this;
    }

    /**
     * @return string
     */
    public function getOwner()
    {
      return $this->Owner;
    }

    /**
     * @param string $Owner
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setOwner($Owner)
    {
      $this->Owner = $Owner;
      return $this;
    }

    /**
     * @return int
     */
    public function getOwnerID()
    {
      return $this->OwnerID;
    }

    /**
     * @param int $OwnerID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setOwnerID($OwnerID)
    {
      $this->OwnerID = $OwnerID;
      return $this;
    }

    /**
     * @return string
     */
    public function getPriority()
    {
      return $this->Priority;
    }

    /**
     * @param string $Priority
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setPriority($Priority)
    {
      $this->Priority = $Priority;
      return $this;
    }

    /**
     * @return int
     */
    public function getPriorityID()
    {
      return $this->PriorityID;
    }

    /**
     * @param int $PriorityID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setPriorityID($PriorityID)
    {
      $this->PriorityID = $PriorityID;
      return $this;
    }

    /**
     * @return string
     */
    public function getQueue()
    {
      return $this->Queue;
    }

    /**
     * @param string $Queue
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setQueue($Queue)
    {
      $this->Queue = $Queue;
      return $this;
    }

    /**
     * @return int
     */
    public function getQueueID()
    {
      return $this->QueueID;
    }

    /**
     * @param int $QueueID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setQueueID($QueueID)
    {
      $this->QueueID = $QueueID;
      return $this;
    }

    /**
     * @return string
     */
    public function getRealTillTimeNotUsed()
    {
      return $this->RealTillTimeNotUsed;
    }

    /**
     * @param string $RealTillTimeNotUsed
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setRealTillTimeNotUsed($RealTillTimeNotUsed)
    {
      $this->RealTillTimeNotUsed = $RealTillTimeNotUsed;
      return $this;
    }

    /**
     * @return string
     */
    public function getReferences()
    {
      return $this->References;
    }

    /**
     * @param string $References
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setReferences($References)
    {
      $this->References = $References;
      return $this;
    }

    /**
     * @return string
     */
    public function getReplyTo()
    {
      return $this->ReplyTo;
    }

    /**
     * @param string $ReplyTo
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setReplyTo($ReplyTo)
    {
      $this->ReplyTo = $ReplyTo;
      return $this;
    }

    /**
     * @return string
     */
    public function getResponsible()
    {
      return $this->Responsible;
    }

    /**
     * @param string $Responsible
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setResponsible($Responsible)
    {
      $this->Responsible = $Responsible;
      return $this;
    }

    /**
     * @return int
     */
    public function getResponsibleID()
    {
      return $this->ResponsibleID;
    }

    /**
     * @param int $ResponsibleID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setResponsibleID($ResponsibleID)
    {
      $this->ResponsibleID = $ResponsibleID;
      return $this;
    }

    /**
     * @return string
     */
    public function getSLA()
    {
      return $this->SLA;
    }

    /**
     * @param string $SLA
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setSLA($SLA)
    {
      $this->SLA = $SLA;
      return $this;
    }

    /**
     * @return int
     */
    public function getSLAID()
    {
      return $this->SLAID;
    }

    /**
     * @param int $SLAID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setSLAID($SLAID)
    {
      $this->SLAID = $SLAID;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setSenderType($SenderType)
    {
      $this->SenderType = $SenderType;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setSenderTypeID($SenderTypeID)
    {
      $this->SenderTypeID = $SenderTypeID;
      return $this;
    }

    /**
     * @return string
     */
    public function getService()
    {
      return $this->Service;
    }

    /**
     * @param string $Service
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setService($Service)
    {
      $this->Service = $Service;
      return $this;
    }

    /**
     * @return int
     */
    public function getServiceID()
    {
      return $this->ServiceID;
    }

    /**
     * @param int $ServiceID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setServiceID($ServiceID)
    {
      $this->ServiceID = $ServiceID;
      return $this;
    }

    /**
     * @return string
     */
    public function getSolutionTime()
    {
      return $this->SolutionTime;
    }

    /**
     * @param string $SolutionTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setSolutionTime($SolutionTime)
    {
      $this->SolutionTime = $SolutionTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getSolutionTimeDestinationDate()
    {
      return $this->SolutionTimeDestinationDate;
    }

    /**
     * @param string $SolutionTimeDestinationDate
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setSolutionTimeDestinationDate($SolutionTimeDestinationDate)
    {
      $this->SolutionTimeDestinationDate = $SolutionTimeDestinationDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getSolutionTimeDestinationTime()
    {
      return $this->SolutionTimeDestinationTime;
    }

    /**
     * @param string $SolutionTimeDestinationTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setSolutionTimeDestinationTime($SolutionTimeDestinationTime)
    {
      $this->SolutionTimeDestinationTime = $SolutionTimeDestinationTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getSolutionTimeWorkingTime()
    {
      return $this->SolutionTimeWorkingTime;
    }

    /**
     * @param string $SolutionTimeWorkingTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setSolutionTimeWorkingTime($SolutionTimeWorkingTime)
    {
      $this->SolutionTimeWorkingTime = $SolutionTimeWorkingTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getState()
    {
      return $this->State;
    }

    /**
     * @param string $State
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setState($State)
    {
      $this->State = $State;
      return $this;
    }

    /**
     * @return int
     */
    public function getStateID()
    {
      return $this->StateID;
    }

    /**
     * @param int $StateID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setStateID($StateID)
    {
      $this->StateID = $StateID;
      return $this;
    }

    /**
     * @return string
     */
    public function getStateType()
    {
      return $this->StateType;
    }

    /**
     * @param string $StateType
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setStateType($StateType)
    {
      $this->StateType = $StateType;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setSubject($Subject)
    {
      $this->Subject = $Subject;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketFreeKeyX()
    {
      return $this->TicketFreeKeyX;
    }

    /**
     * @param string $TicketFreeKeyX
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setTicketFreeKeyX($TicketFreeKeyX)
    {
      $this->TicketFreeKeyX = $TicketFreeKeyX;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketFreeTextX()
    {
      return $this->TicketFreeTextX;
    }

    /**
     * @param string $TicketFreeTextX
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setTicketFreeTextX($TicketFreeTextX)
    {
      $this->TicketFreeTextX = $TicketFreeTextX;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketFreeTimeX()
    {
      return $this->TicketFreeTimeX;
    }

    /**
     * @param string $TicketFreeTimeX
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setTicketFreeTimeX($TicketFreeTimeX)
    {
      $this->TicketFreeTimeX = $TicketFreeTimeX;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setTicketNumber($TicketNumber)
    {
      $this->TicketNumber = $TicketNumber;
      return $this;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
      return $this->Title;
    }

    /**
     * @param string $Title
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setTitle($Title)
    {
      $this->Title = $Title;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setTimeUnit($TimeUnit)
    {
      $this->TimeUnit = $TimeUnit;
      return $this;
    }

    /**
     * @return string
     */
    public function getTo()
    {
      return $this->To;
    }

    /**
     * @param string $To
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setTo($To)
    {
      $this->To = $To;
      return $this;
    }

    /**
     * @return string
     */
    public function getToRealname()
    {
      return $this->ToRealname;
    }

    /**
     * @param string $ToRealname
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setToRealname($ToRealname)
    {
      $this->ToRealname = $ToRealname;
      return $this;
    }

    /**
     * @return string
     */
    public function getType()
    {
      return $this->Type;
    }

    /**
     * @param string $Type
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setType($Type)
    {
      $this->Type = $Type;
      return $this;
    }

    /**
     * @return int
     */
    public function getTypeID()
    {
      return $this->TypeID;
    }

    /**
     * @param int $TypeID
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setTypeID($TypeID)
    {
      $this->TypeID = $TypeID;
      return $this;
    }

    /**
     * @return int
     */
    public function getUntilTime()
    {
      return $this->UntilTime;
    }

    /**
     * @param int $UntilTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Article
     */
    public function setUntilTime($UntilTime)
    {
      $this->UntilTime = $UntilTime;
      return $this;
    }

}

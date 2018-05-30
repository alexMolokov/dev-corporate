<?php

namespace App\OTRS;

class OTRS_TicketGetResponse_Ticket
{

    /**
     * @var int $Age
     */
    protected $Age = null;

    /**
     * @var string $ArchiveFlag
     */
    protected $ArchiveFlag = null;

    /**
     * @var OTRS_TicketGetResponse_Article[] $Article
     */
    protected $Article = null;

    /**
     * @var int $ChangeBy
     */
    protected $ChangeBy = null;

    /**
     * @var string $Changed
     */
    protected $Changed = null;

    /**
     * @var string $Closed
     */
    protected $Closed = null;

    /**
     * @var int $CreateBy
     */
    protected $CreateBy = null;

    /**
     * @var string $Created
     */
    protected $Created = null;

    /**
     * @var string $CustomerID
     */
    protected $CustomerID = null;

    /**
     * @var string $CustomerUserID
     */
    protected $CustomerUserID = null;

    /**
     * @var OTRS_DynamicField[] $DynamicField
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
     * @var string $FirstResponseTimeEscalation
     */
    protected $FirstResponseTimeEscalation = null;

    /**
     * @var string $FirstResponseTimeNotification
     */
    protected $FirstResponseTimeNotification = null;

    /**
     * @var string $FirstResponseTimeDestinationTime
     */
    protected $FirstResponseTimeDestinationTime = null;

    /**
     * @var string $FirstResponseTimeDestinationDate
     */
    protected $FirstResponseTimeDestinationDate = null;

    /**
     * @var string $FirstResponseTimeWorkingTime
     */
    protected $FirstResponseTimeWorkingTime = null;

    /**
     * @var string $FirstResponseTime
     */
    protected $FirstResponseTime = null;

    /**
     * @var string $UpdateTimeEscalation
     */
    protected $UpdateTimeEscalation = null;

    /**
     * @var string $UpdateTimeNotification
     */
    protected $UpdateTimeNotification = null;

    /**
     * @var string $UpdateTimeDestinationTime
     */
    protected $UpdateTimeDestinationTime = null;

    /**
     * @var string $UpdateTimeDestinationDate
     */
    protected $UpdateTimeDestinationDate = null;

    /**
     * @var string $UpdateTimeWorkingTime
     */
    protected $UpdateTimeWorkingTime = null;

    /**
     * @var string $UpdateTime
     */
    protected $UpdateTime = null;

    /**
     * @var string $FirstResponse
     */
    protected $FirstResponse = null;

    /**
     * @var string $FirstResponseInMin
     */
    protected $FirstResponseInMin = null;

    /**
     * @var string $FirstResponseDiffInMin
     */
    protected $FirstResponseDiffInMin = null;

    /**
     * @var string $SolutionInMin
     */
    protected $SolutionInMin = null;

    /**
     * @var string $SolutionDiffInMin
     */
    protected $SolutionDiffInMin = null;

    /**
     * @var string $FirstLock
     */
    protected $FirstLock = null;

    /**
     * @var int $GroupID
     */
    protected $GroupID = null;

    /**
     * @var string $Lock
     */
    protected $Lock = null;

    /**
     * @var int $LockID
     */
    protected $LockID = null;

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
     * @var string $SolutionTimeEscalation
     */
    protected $SolutionTimeEscalation = null;

    /**
     * @var string $SolutionTimeNotification
     */
    protected $SolutionTimeNotification = null;

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
     * @var string $Type
     */
    protected $Type = null;

    /**
     * @var float $TimeUnit
     */
    protected $TimeUnit = null;

    /**
     * @var int $TypeID
     */
    protected $TypeID = null;

    /**
     * @var int $UnlockTimeout
     */
    protected $UnlockTimeout = null;

    /**
     * @var int $UntilTime
     */
    protected $UntilTime = null;

    /**
     * @param int $Age
     * @param string $ArchiveFlag
     * @param int $ChangeBy
     * @param string $Changed
     * @param int $CreateBy
     * @param string $Created
     * @param string $CustomerUserID
     * @param string $EscalationTime
     * @param int $GroupID
     * @param int $LockID
     * @param string $Owner
     * @param int $OwnerID
     * @param string $Priority
     * @param int $PriorityID
     * @param string $Queue
     * @param int $QueueID
     * @param string $Responsible
     * @param int $ResponsibleID
     * @param string $State
     * @param int $StateID
     * @param string $StateType
     * @param int $TicketID
     * @param string $TicketNumber
     * @param string $Title
     * @param string $Type
     * @param int $TypeID
     * @param int $UnlockTimeout
     * @param int $UntilTime
     */
    public function __construct($Age, $ArchiveFlag, $ChangeBy, $Changed, $CreateBy, $Created, $CustomerUserID, $EscalationTime, $GroupID, $LockID, $Owner, $OwnerID, $Priority, $PriorityID, $Queue, $QueueID, $Responsible, $ResponsibleID, $State, $StateID, $StateType, $TicketID, $TicketNumber, $Title, $Type, $TypeID, $UnlockTimeout, $UntilTime)
    {
      $this->Age = $Age;
      $this->ArchiveFlag = $ArchiveFlag;
      $this->ChangeBy = $ChangeBy;
      $this->Changed = $Changed;
      $this->CreateBy = $CreateBy;
      $this->Created = $Created;
      $this->CustomerUserID = $CustomerUserID;
      $this->EscalationTime = $EscalationTime;
      $this->GroupID = $GroupID;
      $this->LockID = $LockID;
      $this->Owner = $Owner;
      $this->OwnerID = $OwnerID;
      $this->Priority = $Priority;
      $this->PriorityID = $PriorityID;
      $this->Queue = $Queue;
      $this->QueueID = $QueueID;
      $this->Responsible = $Responsible;
      $this->ResponsibleID = $ResponsibleID;
      $this->State = $State;
      $this->StateID = $StateID;
      $this->StateType = $StateType;
      $this->TicketID = $TicketID;
      $this->TicketNumber = $TicketNumber;
      $this->Title = $Title;
      $this->Type = $Type;
      $this->TypeID = $TypeID;
      $this->UnlockTimeout = $UnlockTimeout;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setAge($Age)
    {
      $this->Age = $Age;
      return $this;
    }

    /**
     * @return string
     */
    public function getArchiveFlag()
    {
      return $this->ArchiveFlag;
    }

    /**
     * @param string $ArchiveFlag
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setArchiveFlag($ArchiveFlag)
    {
      $this->ArchiveFlag = $ArchiveFlag;
      return $this;
    }

    /**
     * @return OTRS_TicketGetResponse_Article[]
     */
    public function getArticle()
    {
      return $this->Article;
    }

    /**
     * @param OTRS_TicketGetResponse_Article[] $Article
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setArticle(array $Article = null)
    {
      $this->Article = $Article;
      return $this;
    }

    /**
     * @return int
     */
    public function getChangeBy()
    {
      return $this->ChangeBy;
    }

    /**
     * @param int $ChangeBy
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setChangeBy($ChangeBy)
    {
      $this->ChangeBy = $ChangeBy;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setChanged($Changed)
    {
      $this->Changed = $Changed;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setClosed($Closed)
    {
      $this->Closed = $Closed;
      return $this;
    }

    /**
     * @return int
     */
    public function getCreateBy()
    {
      return $this->CreateBy;
    }

    /**
     * @param int $CreateBy
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setCreateBy($CreateBy)
    {
      $this->CreateBy = $CreateBy;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setCreated($Created)
    {
      $this->Created = $Created;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setCustomerUserID($CustomerUserID)
    {
      $this->CustomerUserID = $CustomerUserID;
      return $this;
    }

    /**
     * @return OTRS_DynamicField[]
     */
    public function getDynamicField()
    {
      return $this->DynamicField;
    }

    /**
     * @param OTRS_DynamicField[] $DynamicField
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setEscalationUpdateTime($EscalationUpdateTime)
    {
      $this->EscalationUpdateTime = $EscalationUpdateTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getFirstResponseTimeEscalation()
    {
      return $this->FirstResponseTimeEscalation;
    }

    /**
     * @param string $FirstResponseTimeEscalation
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setFirstResponseTimeEscalation($FirstResponseTimeEscalation)
    {
      $this->FirstResponseTimeEscalation = $FirstResponseTimeEscalation;
      return $this;
    }

    /**
     * @return string
     */
    public function getFirstResponseTimeNotification()
    {
      return $this->FirstResponseTimeNotification;
    }

    /**
     * @param string $FirstResponseTimeNotification
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setFirstResponseTimeNotification($FirstResponseTimeNotification)
    {
      $this->FirstResponseTimeNotification = $FirstResponseTimeNotification;
      return $this;
    }

    /**
     * @return string
     */
    public function getFirstResponseTimeDestinationTime()
    {
      return $this->FirstResponseTimeDestinationTime;
    }

    /**
     * @param string $FirstResponseTimeDestinationTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setFirstResponseTimeDestinationTime($FirstResponseTimeDestinationTime)
    {
      $this->FirstResponseTimeDestinationTime = $FirstResponseTimeDestinationTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getFirstResponseTimeDestinationDate()
    {
      return $this->FirstResponseTimeDestinationDate;
    }

    /**
     * @param string $FirstResponseTimeDestinationDate
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setFirstResponseTimeDestinationDate($FirstResponseTimeDestinationDate)
    {
      $this->FirstResponseTimeDestinationDate = $FirstResponseTimeDestinationDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getFirstResponseTimeWorkingTime()
    {
      return $this->FirstResponseTimeWorkingTime;
    }

    /**
     * @param string $FirstResponseTimeWorkingTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setFirstResponseTimeWorkingTime($FirstResponseTimeWorkingTime)
    {
      $this->FirstResponseTimeWorkingTime = $FirstResponseTimeWorkingTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getFirstResponseTime()
    {
      return $this->FirstResponseTime;
    }

    /**
     * @param string $FirstResponseTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setFirstResponseTime($FirstResponseTime)
    {
      $this->FirstResponseTime = $FirstResponseTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getUpdateTimeEscalation()
    {
      return $this->UpdateTimeEscalation;
    }

    /**
     * @param string $UpdateTimeEscalation
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setUpdateTimeEscalation($UpdateTimeEscalation)
    {
      $this->UpdateTimeEscalation = $UpdateTimeEscalation;
      return $this;
    }

    /**
     * @return string
     */
    public function getUpdateTimeNotification()
    {
      return $this->UpdateTimeNotification;
    }

    /**
     * @param string $UpdateTimeNotification
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setUpdateTimeNotification($UpdateTimeNotification)
    {
      $this->UpdateTimeNotification = $UpdateTimeNotification;
      return $this;
    }

    /**
     * @return string
     */
    public function getUpdateTimeDestinationTime()
    {
      return $this->UpdateTimeDestinationTime;
    }

    /**
     * @param string $UpdateTimeDestinationTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setUpdateTimeDestinationTime($UpdateTimeDestinationTime)
    {
      $this->UpdateTimeDestinationTime = $UpdateTimeDestinationTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getUpdateTimeDestinationDate()
    {
      return $this->UpdateTimeDestinationDate;
    }

    /**
     * @param string $UpdateTimeDestinationDate
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setUpdateTimeDestinationDate($UpdateTimeDestinationDate)
    {
      $this->UpdateTimeDestinationDate = $UpdateTimeDestinationDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getUpdateTimeWorkingTime()
    {
      return $this->UpdateTimeWorkingTime;
    }

    /**
     * @param string $UpdateTimeWorkingTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setUpdateTimeWorkingTime($UpdateTimeWorkingTime)
    {
      $this->UpdateTimeWorkingTime = $UpdateTimeWorkingTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getUpdateTime()
    {
      return $this->UpdateTime;
    }

    /**
     * @param string $UpdateTime
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setUpdateTime($UpdateTime)
    {
      $this->UpdateTime = $UpdateTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getFirstResponse()
    {
      return $this->FirstResponse;
    }

    /**
     * @param string $FirstResponse
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setFirstResponse($FirstResponse)
    {
      $this->FirstResponse = $FirstResponse;
      return $this;
    }

    /**
     * @return string
     */
    public function getFirstResponseInMin()
    {
      return $this->FirstResponseInMin;
    }

    /**
     * @param string $FirstResponseInMin
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setFirstResponseInMin($FirstResponseInMin)
    {
      $this->FirstResponseInMin = $FirstResponseInMin;
      return $this;
    }

    /**
     * @return string
     */
    public function getFirstResponseDiffInMin()
    {
      return $this->FirstResponseDiffInMin;
    }

    /**
     * @param string $FirstResponseDiffInMin
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setFirstResponseDiffInMin($FirstResponseDiffInMin)
    {
      $this->FirstResponseDiffInMin = $FirstResponseDiffInMin;
      return $this;
    }

    /**
     * @return string
     */
    public function getSolutionInMin()
    {
      return $this->SolutionInMin;
    }

    /**
     * @param string $SolutionInMin
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setSolutionInMin($SolutionInMin)
    {
      $this->SolutionInMin = $SolutionInMin;
      return $this;
    }

    /**
     * @return string
     */
    public function getSolutionDiffInMin()
    {
      return $this->SolutionDiffInMin;
    }

    /**
     * @param string $SolutionDiffInMin
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setSolutionDiffInMin($SolutionDiffInMin)
    {
      $this->SolutionDiffInMin = $SolutionDiffInMin;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setFirstLock($FirstLock)
    {
      $this->FirstLock = $FirstLock;
      return $this;
    }

    /**
     * @return int
     */
    public function getGroupID()
    {
      return $this->GroupID;
    }

    /**
     * @param int $GroupID
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setGroupID($GroupID)
    {
      $this->GroupID = $GroupID;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setLockID($LockID)
    {
      $this->LockID = $LockID;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setRealTillTimeNotUsed($RealTillTimeNotUsed)
    {
      $this->RealTillTimeNotUsed = $RealTillTimeNotUsed;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setSLAID($SLAID)
    {
      $this->SLAID = $SLAID;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setSolutionTime($SolutionTime)
    {
      $this->SolutionTime = $SolutionTime;
      return $this;
    }

    /**
     * @return string
     */
    public function getSolutionTimeEscalation()
    {
      return $this->SolutionTimeEscalation;
    }

    /**
     * @param string $SolutionTimeEscalation
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setSolutionTimeEscalation($SolutionTimeEscalation)
    {
      $this->SolutionTimeEscalation = $SolutionTimeEscalation;
      return $this;
    }

    /**
     * @return string
     */
    public function getSolutionTimeNotification()
    {
      return $this->SolutionTimeNotification;
    }

    /**
     * @param string $SolutionTimeNotification
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setSolutionTimeNotification($SolutionTimeNotification)
    {
      $this->SolutionTimeNotification = $SolutionTimeNotification;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setStateType($StateType)
    {
      $this->StateType = $StateType;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setTitle($Title)
    {
      $this->Title = $Title;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setType($Type)
    {
      $this->Type = $Type;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setTimeUnit($TimeUnit)
    {
      $this->TimeUnit = $TimeUnit;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setTypeID($TypeID)
    {
      $this->TypeID = $TypeID;
      return $this;
    }

    /**
     * @return int
     */
    public function getUnlockTimeout()
    {
      return $this->UnlockTimeout;
    }

    /**
     * @param int $UnlockTimeout
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setUnlockTimeout($UnlockTimeout)
    {
      $this->UnlockTimeout = $UnlockTimeout;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Ticket
     */
    public function setUntilTime($UntilTime)
    {
      $this->UntilTime = $UntilTime;
      return $this;
    }

}

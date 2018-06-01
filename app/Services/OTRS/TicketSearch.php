<?php

namespace App\OTRS;

class TicketSearch
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
     * @var int $Limit
     */
    protected $Limit = null;

    /**
     * @var string $TicketNumber
     */
    protected $TicketNumber = null;

    /**
     * @var string $Title
     */
    protected $Title = null;

    /**
     * @var string $Queues
     */
    protected $Queues = null;

    /**
     * @var int $QueueIDs
     */
    protected $QueueIDs = null;

    /**
     * @var int $UseSubQueues
     */
    protected $UseSubQueues = null;

    /**
     * @var string $Types
     */
    protected $Types = null;

    /**
     * @var int $TypeIDs
     */
    protected $TypeIDs = null;

    /**
     * @var string $States
     */
    protected $States = null;

    /**
     * @var int $StateIDs
     */
    protected $StateIDs = null;

    /**
     * @var string $StateType
     */
    protected $StateType = null;

    /**
     * @var int $StateTypeIDs
     */
    protected $StateTypeIDs = null;

    /**
     * @var string $Priorities
     */
    protected $Priorities = null;

    /**
     * @var int $PriorityIDs
     */
    protected $PriorityIDs = null;

    /**
     * @var string $Services
     */
    protected $Services = null;

    /**
     * @var int $ServiceIDs
     */
    protected $ServiceIDs = null;

    /**
     * @var string $SLAs
     */
    protected $SLAs = null;

    /**
     * @var int $SLAIDs
     */
    protected $SLAIDs = null;

    /**
     * @var string $Locks
     */
    protected $Locks = null;

    /**
     * @var int $LockIDs
     */
    protected $LockIDs = null;

    /**
     * @var int $OwnerIDs
     */
    protected $OwnerIDs = null;

    /**
     * @var int $ResponsibleIDs
     */
    protected $ResponsibleIDs = null;

    /**
     * @var int $WatchUserIDs
     */
    protected $WatchUserIDs = null;

    /**
     * @var string $CustomerID
     */
    protected $CustomerID = null;

    /**
     * @var int $CreatedUserIDs
     */
    protected $CreatedUserIDs = null;

    /**
     * @var string $CreatedTypes
     */
    protected $CreatedTypes = null;

    /**
     * @var int $CreatedTypeIDs
     */
    protected $CreatedTypeIDs = null;

    /**
     * @var string $CreatedPriorities
     */
    protected $CreatedPriorities = null;

    /**
     * @var int $CreatedPriorityIDs
     */
    protected $CreatedPriorityIDs = null;

    /**
     * @var string $CreatedStates
     */
    protected $CreatedStates = null;

    /**
     * @var int $CreatedStateIDs
     */
    protected $CreatedStateIDs = null;

    /**
     * @var int $CreatedQueues
     */
    protected $CreatedQueues = null;

    /**
     * @var int $CreatedQueueIDs
     */
    protected $CreatedQueueIDs = null;

    /**
     * @var OTRS_TicketSearch_DynamicField $DynamicField
     */
    protected $DynamicField = null;

    /**
     * @var OTRS_TicketSearch_DynamicField_BsystemUserId DynamicFieldBsystemUserId
     */
    protected $DynamicField_BsystemUserId = null;


    /**
     * @var OTRS_TicketSearch_TicketFlag $Ticketflag
     */
    protected $Ticketflag = null;

    /**
     * @var string $MIMEBase_From
     */
    protected $MIMEBase_From = null;

    /**
     * @var string $MIMEBase_To
     */
    protected $MIMEBase_To = null;

    /**
     * @var string $MIMEBase_Cc
     */
    protected $MIMEBase_Cc = null;

    /**
     * @var string $MIMEBase_Subject
     */
    protected $MIMEBase_Subject = null;

    /**
     * @var string $MIMEBase_Body
     */
    protected $MIMEBase_Body = null;

    /**
     * @var int $FullTextIndex
     */
    protected $FullTextIndex = null;

    /**
     * @var string $ContentSearch
     */
    protected $ContentSearch = null;

    /**
     * @var int $ConditionInline
     */
    protected $ConditionInline = null;

    /**
     * @var int $ArticleCreateTimeOlderMinutes
     */
    protected $ArticleCreateTimeOlderMinutes = null;

    /**
     * @var int $ArticleCreateTimeNewerMinutes
     */
    protected $ArticleCreateTimeNewerMinutes = null;

    /**
     * @var string $ArticleCreateTimeNewerDate
     */
    protected $ArticleCreateTimeNewerDate = null;

    /**
     * @var string $ArticleCreateTimeOlderDate
     */
    protected $ArticleCreateTimeOlderDate = null;

    /**
     * @var int $TicketCreateTimeOlderMinutes
     */
    protected $TicketCreateTimeOlderMinutes = null;

    /**
     * @var int $TicketCreateTimeNewerMinutes
     */
    protected $TicketCreateTimeNewerMinutes = null;

    /**
     * @var string $TicketCreateTimeNewerDate
     */
    protected $TicketCreateTimeNewerDate = null;

    /**
     * @var string $TicketCreateTimeOlderDate
     */
    protected $TicketCreateTimeOlderDate = null;

    /**
     * @var int $TicketChangeTimeOlderMinutes
     */
    protected $TicketChangeTimeOlderMinutes = null;

    /**
     * @var int $TicketChangeTimeNewerMinutes
     */
    protected $TicketChangeTimeNewerMinutes = null;

    /**
     * @var string $TicketChangeTimeNewerDate
     */
    protected $TicketChangeTimeNewerDate = null;

    /**
     * @var string $TicketChangeTimeOlderDate
     */
    protected $TicketChangeTimeOlderDate = null;

    /**
     * @var int $TicketLastChangeTimeOlderMinutes
     */
    protected $TicketLastChangeTimeOlderMinutes = null;

    /**
     * @var int $TicketLastChangeTimeNewerMinutes
     */
    protected $TicketLastChangeTimeNewerMinutes = null;

    /**
     * @var string $TicketLastChangeTimeNewerDate
     */
    protected $TicketLastChangeTimeNewerDate = null;

    /**
     * @var string $TicketLastChangeTimeOlderDate
     */
    protected $TicketLastChangeTimeOlderDate = null;

    /**
     * @var int $TicketCloseTimeOlderMinutes
     */
    protected $TicketCloseTimeOlderMinutes = null;

    /**
     * @var int $TicketCloseTimeNewerMinutes
     */
    protected $TicketCloseTimeNewerMinutes = null;

    /**
     * @var string $TicketCloseTimeNewerDate
     */
    protected $TicketCloseTimeNewerDate = null;

    /**
     * @var string $TicketCloseTimeOlderDate
     */
    protected $TicketCloseTimeOlderDate = null;

    /**
     * @var int $TicketPendingTimeOlderMinutes
     */
    protected $TicketPendingTimeOlderMinutes = null;

    /**
     * @var int $TicketPendingTimeNewerMinutes
     */
    protected $TicketPendingTimeNewerMinutes = null;

    /**
     * @var string $TicketPendingTimeNewerDate
     */
    protected $TicketPendingTimeNewerDate = null;

    /**
     * @var string $TicketPendingTimeOlderDate
     */
    protected $TicketPendingTimeOlderDate = null;

    /**
     * @var int $TicketEscalationTimeOlderMinutes
     */
    protected $TicketEscalationTimeOlderMinutes = null;

    /**
     * @var int $TicketEscalationTimeNewerMinutes
     */
    protected $TicketEscalationTimeNewerMinutes = null;

    /**
     * @var string $TicketEscalationTimeNewerDate
     */
    protected $TicketEscalationTimeNewerDate = null;

    /**
     * @var string $TicketEscalationTimeOlderDate
     */
    protected $TicketEscalationTimeOlderDate = null;

    /**
     * @var string $ArchiveFlags
     */
    protected $ArchiveFlags = null;

    /**
     * @var string $OrderBy
     */
    protected $OrderBy = null;

    /**
     * @var int $SortBy
     */
    protected $SortBy = null;

    /**
     * @var string $CustomerUserID
     */
    protected $CustomerUserID = null;


    public function __construct(array $data)
    {
       foreach($data as $key => $value)
       {
           if(property_exists($this, $key)) $this->{$key} = $data[$key];
       }
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
     * @return \App\OTRS\TicketSearch
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
     * @return \App\OTRS\TicketSearch
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
     * @return \App\OTRS\TicketSearch
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
     * @return \App\OTRS\TicketSearch
     */
    public function setPassword($Password)
    {
      $this->Password = $Password;
      return $this;
    }

    /**
     * @return int
     */
    public function getLimit()
    {
      return $this->Limit;
    }

    /**
     * @param int $Limit
     * @return \App\OTRS\TicketSearch
     */
    public function setLimit($Limit)
    {
      $this->Limit = $Limit;
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
     * @return \App\OTRS\TicketSearch
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
     * @return \App\OTRS\TicketSearch
     */
    public function setTitle($Title)
    {
      $this->Title = $Title;
      return $this;
    }

    /**
     * @return string
     */
    public function getQueues()
    {
      return $this->Queues;
    }

    /**
     * @param string $Queues
     * @return \App\OTRS\TicketSearch
     */
    public function setQueues($Queues)
    {
      $this->Queues = $Queues;
      return $this;
    }

    /**
     * @return int
     */
    public function getQueueIDs()
    {
      return $this->QueueIDs;
    }

    /**
     * @param int $QueueIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setQueueIDs($QueueIDs)
    {
      $this->QueueIDs = $QueueIDs;
      return $this;
    }

    /**
     * @return int
     */
    public function getUseSubQueues()
    {
      return $this->UseSubQueues;
    }

    /**
     * @param int $UseSubQueues
     * @return \App\OTRS\TicketSearch
     */
    public function setUseSubQueues($UseSubQueues)
    {
      $this->UseSubQueues = $UseSubQueues;
      return $this;
    }

    /**
     * @return string
     */
    public function getTypes()
    {
      return $this->Types;
    }

    /**
     * @param string $Types
     * @return \App\OTRS\TicketSearch
     */
    public function setTypes($Types)
    {
      $this->Types = $Types;
      return $this;
    }

    /**
     * @return int
     */
    public function getTypeIDs()
    {
      return $this->TypeIDs;
    }

    /**
     * @param int $TypeIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setTypeIDs($TypeIDs)
    {
      $this->TypeIDs = $TypeIDs;
      return $this;
    }

    /**
     * @return string
     */
    public function getStates()
    {
      return $this->States;
    }

    /**
     * @param string $States
     * @return \App\OTRS\TicketSearch
     */
    public function setStates($States)
    {
      $this->States = $States;
      return $this;
    }

    /**
     * @return int
     */
    public function getStateIDs()
    {
      return $this->StateIDs;
    }

    /**
     * @param int $StateIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setStateIDs($StateIDs)
    {
      $this->StateIDs = $StateIDs;
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
     * @return \App\OTRS\TicketSearch
     */
    public function setStateType($StateType)
    {
      $this->StateType = $StateType;
      return $this;
    }

    /**
     * @return int
     */
    public function getStateTypeIDs()
    {
      return $this->StateTypeIDs;
    }

    /**
     * @param int $StateTypeIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setStateTypeIDs($StateTypeIDs)
    {
      $this->StateTypeIDs = $StateTypeIDs;
      return $this;
    }

    /**
     * @return string
     */
    public function getPriorities()
    {
      return $this->Priorities;
    }

    /**
     * @param string $Priorities
     * @return \App\OTRS\TicketSearch
     */
    public function setPriorities($Priorities)
    {
      $this->Priorities = $Priorities;
      return $this;
    }

    /**
     * @return int
     */
    public function getPriorityIDs()
    {
      return $this->PriorityIDs;
    }

    /**
     * @param int $PriorityIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setPriorityIDs($PriorityIDs)
    {
      $this->PriorityIDs = $PriorityIDs;
      return $this;
    }

    /**
     * @return string
     */
    public function getServices()
    {
      return $this->Services;
    }

    /**
     * @param string $Services
     * @return \App\OTRS\TicketSearch
     */
    public function setServices($Services)
    {
      $this->Services = $Services;
      return $this;
    }

    /**
     * @return int
     */
    public function getServiceIDs()
    {
      return $this->ServiceIDs;
    }

    /**
     * @param int $ServiceIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setServiceIDs($ServiceIDs)
    {
      $this->ServiceIDs = $ServiceIDs;
      return $this;
    }

    /**
     * @return string
     */
    public function getSLAs()
    {
      return $this->SLAs;
    }

    /**
     * @param string $SLAs
     * @return \App\OTRS\TicketSearch
     */
    public function setSLAs($SLAs)
    {
      $this->SLAs = $SLAs;
      return $this;
    }

    /**
     * @return int
     */
    public function getSLAIDs()
    {
      return $this->SLAIDs;
    }

    /**
     * @param int $SLAIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setSLAIDs($SLAIDs)
    {
      $this->SLAIDs = $SLAIDs;
      return $this;
    }

    /**
     * @return string
     */
    public function getLocks()
    {
      return $this->Locks;
    }

    /**
     * @param string $Locks
     * @return \App\OTRS\TicketSearch
     */
    public function setLocks($Locks)
    {
      $this->Locks = $Locks;
      return $this;
    }

    /**
     * @return int
     */
    public function getLockIDs()
    {
      return $this->LockIDs;
    }

    /**
     * @param int $LockIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setLockIDs($LockIDs)
    {
      $this->LockIDs = $LockIDs;
      return $this;
    }

    /**
     * @return int
     */
    public function getOwnerIDs()
    {
      return $this->OwnerIDs;
    }

    /**
     * @param int $OwnerIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setOwnerIDs($OwnerIDs)
    {
      $this->OwnerIDs = $OwnerIDs;
      return $this;
    }

    /**
     * @return int
     */
    public function getResponsibleIDs()
    {
      return $this->ResponsibleIDs;
    }

    /**
     * @param int $ResponsibleIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setResponsibleIDs($ResponsibleIDs)
    {
      $this->ResponsibleIDs = $ResponsibleIDs;
      return $this;
    }

    /**
     * @return int
     */
    public function getWatchUserIDs()
    {
      return $this->WatchUserIDs;
    }

    /**
     * @param int $WatchUserIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setWatchUserIDs($WatchUserIDs)
    {
      $this->WatchUserIDs = $WatchUserIDs;
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
     * @return \App\OTRS\TicketSearch
     */
    public function setCustomerID($CustomerID)
    {
      $this->CustomerID = $CustomerID;
      return $this;
    }

    /**
     * @return int
     */
    public function getCreatedUserIDs()
    {
      return $this->CreatedUserIDs;
    }

    /**
     * @param int $CreatedUserIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setCreatedUserIDs($CreatedUserIDs)
    {
      $this->CreatedUserIDs = $CreatedUserIDs;
      return $this;
    }

    /**
     * @return string
     */
    public function getCreatedTypes()
    {
      return $this->CreatedTypes;
    }

    /**
     * @param string $CreatedTypes
     * @return \App\OTRS\TicketSearch
     */
    public function setCreatedTypes($CreatedTypes)
    {
      $this->CreatedTypes = $CreatedTypes;
      return $this;
    }

    /**
     * @return int
     */
    public function getCreatedTypeIDs()
    {
      return $this->CreatedTypeIDs;
    }

    /**
     * @param int $CreatedTypeIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setCreatedTypeIDs($CreatedTypeIDs)
    {
      $this->CreatedTypeIDs = $CreatedTypeIDs;
      return $this;
    }

    /**
     * @return string
     */
    public function getCreatedPriorities()
    {
      return $this->CreatedPriorities;
    }

    /**
     * @param string $CreatedPriorities
     * @return \App\OTRS\TicketSearch
     */
    public function setCreatedPriorities($CreatedPriorities)
    {
      $this->CreatedPriorities = $CreatedPriorities;
      return $this;
    }

    /**
     * @return int
     */
    public function getCreatedPriorityIDs()
    {
      return $this->CreatedPriorityIDs;
    }

    /**
     * @param int $CreatedPriorityIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setCreatedPriorityIDs($CreatedPriorityIDs)
    {
      $this->CreatedPriorityIDs = $CreatedPriorityIDs;
      return $this;
    }

    /**
     * @return string
     */
    public function getCreatedStates()
    {
      return $this->CreatedStates;
    }

    /**
     * @param string $CreatedStates
     * @return \App\OTRS\TicketSearch
     */
    public function setCreatedStates($CreatedStates)
    {
      $this->CreatedStates = $CreatedStates;
      return $this;
    }

    /**
     * @return int
     */
    public function getCreatedStateIDs()
    {
      return $this->CreatedStateIDs;
    }

    /**
     * @param int $CreatedStateIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setCreatedStateIDs($CreatedStateIDs)
    {
      $this->CreatedStateIDs = $CreatedStateIDs;
      return $this;
    }

    /**
     * @return int
     */
    public function getCreatedQueues()
    {
      return $this->CreatedQueues;
    }

    /**
     * @param int $CreatedQueues
     * @return \App\OTRS\TicketSearch
     */
    public function setCreatedQueues($CreatedQueues)
    {
      $this->CreatedQueues = $CreatedQueues;
      return $this;
    }

    /**
     * @return int
     */
    public function getCreatedQueueIDs()
    {
      return $this->CreatedQueueIDs;
    }

    /**
     * @param int $CreatedQueueIDs
     * @return \App\OTRS\TicketSearch
     */
    public function setCreatedQueueIDs($CreatedQueueIDs)
    {
      $this->CreatedQueueIDs = $CreatedQueueIDs;
      return $this;
    }

    /**
     * @return OTRS_TicketSearch_DynamicField
     */
    public function getDynamicField()
    {
      return $this->DynamicField;
    }

     function getDynamicField_BsystemUserId()
    {
        return $this->DynamicField_BsystemUserId;
    }

    function setDynamicFieldBsystemUserId($DynamicField_BsystemUserId)
    {
        $this->DynamicField_BsystemUserId = $DynamicField_BsystemUserId;
        return $this;
    }



    /**
     * @param OTRS_TicketSearch_DynamicField $DynamicField
     * @return \App\OTRS\TicketSearch
     */
    public function setDynamicField($DynamicField)
    {
      $this->DynamicField = $DynamicField;
      return $this;
    }



    /**
     * @return OTRS_TicketSearch_TicketFlag
     */
    public function getTicketflag()
    {
      return $this->Ticketflag;
    }

    /**
     * @param OTRS_TicketSearch_TicketFlag $Ticketflag
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketflag($Ticketflag)
    {
      $this->Ticketflag = $Ticketflag;
      return $this;
    }

    /**
     * @return string
     */
    public function getMIMEBase_From()
    {
      return $this->MIMEBase_From;
    }

    /**
     * @param string $MIMEBase_From
     * @return \App\OTRS\TicketSearch
     */
    public function setMIMEBase_From($MIMEBase_From)
    {
      $this->MIMEBase_From = $MIMEBase_From;
      return $this;
    }

    /**
     * @return string
     */
    public function getMIMEBase_To()
    {
      return $this->MIMEBase_To;
    }

    /**
     * @param string $MIMEBase_To
     * @return \App\OTRS\TicketSearch
     */
    public function setMIMEBase_To($MIMEBase_To)
    {
      $this->MIMEBase_To = $MIMEBase_To;
      return $this;
    }

    /**
     * @return string
     */
    public function getMIMEBase_Cc()
    {
      return $this->MIMEBase_Cc;
    }

    /**
     * @param string $MIMEBase_Cc
     * @return \App\OTRS\TicketSearch
     */
    public function setMIMEBase_Cc($MIMEBase_Cc)
    {
      $this->MIMEBase_Cc = $MIMEBase_Cc;
      return $this;
    }

    /**
     * @return string
     */
    public function getMIMEBase_Subject()
    {
      return $this->MIMEBase_Subject;
    }

    /**
     * @param string $MIMEBase_Subject
     * @return \App\OTRS\TicketSearch
     */
    public function setMIMEBase_Subject($MIMEBase_Subject)
    {
      $this->MIMEBase_Subject = $MIMEBase_Subject;
      return $this;
    }

    /**
     * @return string
     */
    public function getMIMEBase_Body()
    {
      return $this->MIMEBase_Body;
    }

    /**
     * @param string $MIMEBase_Body
     * @return \App\OTRS\TicketSearch
     */
    public function setMIMEBase_Body($MIMEBase_Body)
    {
      $this->MIMEBase_Body = $MIMEBase_Body;
      return $this;
    }

    /**
     * @return int
     */
    public function getFullTextIndex()
    {
      return $this->FullTextIndex;
    }

    /**
     * @param int $FullTextIndex
     * @return \App\OTRS\TicketSearch
     */
    public function setFullTextIndex($FullTextIndex)
    {
      $this->FullTextIndex = $FullTextIndex;
      return $this;
    }

    /**
     * @return string
     */
    public function getContentSearch()
    {
      return $this->ContentSearch;
    }

    /**
     * @param string $ContentSearch
     * @return \App\OTRS\TicketSearch
     */
    public function setContentSearch($ContentSearch)
    {
      $this->ContentSearch = $ContentSearch;
      return $this;
    }

    /**
     * @return int
     */
    public function getConditionInline()
    {
      return $this->ConditionInline;
    }

    /**
     * @param int $ConditionInline
     * @return \App\OTRS\TicketSearch
     */
    public function setConditionInline($ConditionInline)
    {
      $this->ConditionInline = $ConditionInline;
      return $this;
    }

    /**
     * @return int
     */
    public function getArticleCreateTimeOlderMinutes()
    {
      return $this->ArticleCreateTimeOlderMinutes;
    }

    /**
     * @param int $ArticleCreateTimeOlderMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setArticleCreateTimeOlderMinutes($ArticleCreateTimeOlderMinutes)
    {
      $this->ArticleCreateTimeOlderMinutes = $ArticleCreateTimeOlderMinutes;
      return $this;
    }

    /**
     * @return int
     */
    public function getArticleCreateTimeNewerMinutes()
    {
      return $this->ArticleCreateTimeNewerMinutes;
    }

    /**
     * @param int $ArticleCreateTimeNewerMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setArticleCreateTimeNewerMinutes($ArticleCreateTimeNewerMinutes)
    {
      $this->ArticleCreateTimeNewerMinutes = $ArticleCreateTimeNewerMinutes;
      return $this;
    }

    /**
     * @return string
     */
    public function getArticleCreateTimeNewerDate()
    {
      return $this->ArticleCreateTimeNewerDate;
    }

    /**
     * @param string $ArticleCreateTimeNewerDate
     * @return \App\OTRS\TicketSearch
     */
    public function setArticleCreateTimeNewerDate($ArticleCreateTimeNewerDate)
    {
      $this->ArticleCreateTimeNewerDate = $ArticleCreateTimeNewerDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getArticleCreateTimeOlderDate()
    {
      return $this->ArticleCreateTimeOlderDate;
    }

    /**
     * @param string $ArticleCreateTimeOlderDate
     * @return \App\OTRS\TicketSearch
     */
    public function setArticleCreateTimeOlderDate($ArticleCreateTimeOlderDate)
    {
      $this->ArticleCreateTimeOlderDate = $ArticleCreateTimeOlderDate;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketCreateTimeOlderMinutes()
    {
      return $this->TicketCreateTimeOlderMinutes;
    }

    /**
     * @param int $TicketCreateTimeOlderMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketCreateTimeOlderMinutes($TicketCreateTimeOlderMinutes)
    {
      $this->TicketCreateTimeOlderMinutes = $TicketCreateTimeOlderMinutes;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketCreateTimeNewerMinutes()
    {
      return $this->TicketCreateTimeNewerMinutes;
    }

    /**
     * @param int $TicketCreateTimeNewerMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketCreateTimeNewerMinutes($TicketCreateTimeNewerMinutes)
    {
      $this->TicketCreateTimeNewerMinutes = $TicketCreateTimeNewerMinutes;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketCreateTimeNewerDate()
    {
      return $this->TicketCreateTimeNewerDate;
    }

    /**
     * @param string $TicketCreateTimeNewerDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketCreateTimeNewerDate($TicketCreateTimeNewerDate)
    {
      $this->TicketCreateTimeNewerDate = $TicketCreateTimeNewerDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketCreateTimeOlderDate()
    {
      return $this->TicketCreateTimeOlderDate;
    }

    /**
     * @param string $TicketCreateTimeOlderDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketCreateTimeOlderDate($TicketCreateTimeOlderDate)
    {
      $this->TicketCreateTimeOlderDate = $TicketCreateTimeOlderDate;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketChangeTimeOlderMinutes()
    {
      return $this->TicketChangeTimeOlderMinutes;
    }

    /**
     * @param int $TicketChangeTimeOlderMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketChangeTimeOlderMinutes($TicketChangeTimeOlderMinutes)
    {
      $this->TicketChangeTimeOlderMinutes = $TicketChangeTimeOlderMinutes;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketChangeTimeNewerMinutes()
    {
      return $this->TicketChangeTimeNewerMinutes;
    }

    /**
     * @param int $TicketChangeTimeNewerMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketChangeTimeNewerMinutes($TicketChangeTimeNewerMinutes)
    {
      $this->TicketChangeTimeNewerMinutes = $TicketChangeTimeNewerMinutes;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketChangeTimeNewerDate()
    {
      return $this->TicketChangeTimeNewerDate;
    }

    /**
     * @param string $TicketChangeTimeNewerDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketChangeTimeNewerDate($TicketChangeTimeNewerDate)
    {
      $this->TicketChangeTimeNewerDate = $TicketChangeTimeNewerDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketChangeTimeOlderDate()
    {
      return $this->TicketChangeTimeOlderDate;
    }

    /**
     * @param string $TicketChangeTimeOlderDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketChangeTimeOlderDate($TicketChangeTimeOlderDate)
    {
      $this->TicketChangeTimeOlderDate = $TicketChangeTimeOlderDate;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketLastChangeTimeOlderMinutes()
    {
      return $this->TicketLastChangeTimeOlderMinutes;
    }

    /**
     * @param int $TicketLastChangeTimeOlderMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketLastChangeTimeOlderMinutes($TicketLastChangeTimeOlderMinutes)
    {
      $this->TicketLastChangeTimeOlderMinutes = $TicketLastChangeTimeOlderMinutes;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketLastChangeTimeNewerMinutes()
    {
      return $this->TicketLastChangeTimeNewerMinutes;
    }

    /**
     * @param int $TicketLastChangeTimeNewerMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketLastChangeTimeNewerMinutes($TicketLastChangeTimeNewerMinutes)
    {
      $this->TicketLastChangeTimeNewerMinutes = $TicketLastChangeTimeNewerMinutes;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketLastChangeTimeNewerDate()
    {
      return $this->TicketLastChangeTimeNewerDate;
    }

    /**
     * @param string $TicketLastChangeTimeNewerDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketLastChangeTimeNewerDate($TicketLastChangeTimeNewerDate)
    {
      $this->TicketLastChangeTimeNewerDate = $TicketLastChangeTimeNewerDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketLastChangeTimeOlderDate()
    {
      return $this->TicketLastChangeTimeOlderDate;
    }

    /**
     * @param string $TicketLastChangeTimeOlderDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketLastChangeTimeOlderDate($TicketLastChangeTimeOlderDate)
    {
      $this->TicketLastChangeTimeOlderDate = $TicketLastChangeTimeOlderDate;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketCloseTimeOlderMinutes()
    {
      return $this->TicketCloseTimeOlderMinutes;
    }

    /**
     * @param int $TicketCloseTimeOlderMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketCloseTimeOlderMinutes($TicketCloseTimeOlderMinutes)
    {
      $this->TicketCloseTimeOlderMinutes = $TicketCloseTimeOlderMinutes;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketCloseTimeNewerMinutes()
    {
      return $this->TicketCloseTimeNewerMinutes;
    }

    /**
     * @param int $TicketCloseTimeNewerMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketCloseTimeNewerMinutes($TicketCloseTimeNewerMinutes)
    {
      $this->TicketCloseTimeNewerMinutes = $TicketCloseTimeNewerMinutes;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketCloseTimeNewerDate()
    {
      return $this->TicketCloseTimeNewerDate;
    }

    /**
     * @param string $TicketCloseTimeNewerDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketCloseTimeNewerDate($TicketCloseTimeNewerDate)
    {
      $this->TicketCloseTimeNewerDate = $TicketCloseTimeNewerDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketCloseTimeOlderDate()
    {
      return $this->TicketCloseTimeOlderDate;
    }

    /**
     * @param string $TicketCloseTimeOlderDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketCloseTimeOlderDate($TicketCloseTimeOlderDate)
    {
      $this->TicketCloseTimeOlderDate = $TicketCloseTimeOlderDate;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketPendingTimeOlderMinutes()
    {
      return $this->TicketPendingTimeOlderMinutes;
    }

    /**
     * @param int $TicketPendingTimeOlderMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketPendingTimeOlderMinutes($TicketPendingTimeOlderMinutes)
    {
      $this->TicketPendingTimeOlderMinutes = $TicketPendingTimeOlderMinutes;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketPendingTimeNewerMinutes()
    {
      return $this->TicketPendingTimeNewerMinutes;
    }

    /**
     * @param int $TicketPendingTimeNewerMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketPendingTimeNewerMinutes($TicketPendingTimeNewerMinutes)
    {
      $this->TicketPendingTimeNewerMinutes = $TicketPendingTimeNewerMinutes;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketPendingTimeNewerDate()
    {
      return $this->TicketPendingTimeNewerDate;
    }

    /**
     * @param string $TicketPendingTimeNewerDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketPendingTimeNewerDate($TicketPendingTimeNewerDate)
    {
      $this->TicketPendingTimeNewerDate = $TicketPendingTimeNewerDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketPendingTimeOlderDate()
    {
      return $this->TicketPendingTimeOlderDate;
    }

    /**
     * @param string $TicketPendingTimeOlderDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketPendingTimeOlderDate($TicketPendingTimeOlderDate)
    {
      $this->TicketPendingTimeOlderDate = $TicketPendingTimeOlderDate;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketEscalationTimeOlderMinutes()
    {
      return $this->TicketEscalationTimeOlderMinutes;
    }

    /**
     * @param int $TicketEscalationTimeOlderMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketEscalationTimeOlderMinutes($TicketEscalationTimeOlderMinutes)
    {
      $this->TicketEscalationTimeOlderMinutes = $TicketEscalationTimeOlderMinutes;
      return $this;
    }

    /**
     * @return int
     */
    public function getTicketEscalationTimeNewerMinutes()
    {
      return $this->TicketEscalationTimeNewerMinutes;
    }

    /**
     * @param int $TicketEscalationTimeNewerMinutes
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketEscalationTimeNewerMinutes($TicketEscalationTimeNewerMinutes)
    {
      $this->TicketEscalationTimeNewerMinutes = $TicketEscalationTimeNewerMinutes;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketEscalationTimeNewerDate()
    {
      return $this->TicketEscalationTimeNewerDate;
    }

    /**
     * @param string $TicketEscalationTimeNewerDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketEscalationTimeNewerDate($TicketEscalationTimeNewerDate)
    {
      $this->TicketEscalationTimeNewerDate = $TicketEscalationTimeNewerDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getTicketEscalationTimeOlderDate()
    {
      return $this->TicketEscalationTimeOlderDate;
    }

    /**
     * @param string $TicketEscalationTimeOlderDate
     * @return \App\OTRS\TicketSearch
     */
    public function setTicketEscalationTimeOlderDate($TicketEscalationTimeOlderDate)
    {
      $this->TicketEscalationTimeOlderDate = $TicketEscalationTimeOlderDate;
      return $this;
    }

    /**
     * @return string
     */
    public function getArchiveFlags()
    {
      return $this->ArchiveFlags;
    }

    /**
     * @param string $ArchiveFlags
     * @return \App\OTRS\TicketSearch
     */
    public function setArchiveFlags($ArchiveFlags)
    {
      $this->ArchiveFlags = $ArchiveFlags;
      return $this;
    }

    /**
     * @return string
     */
    public function getOrderBy()
    {
      return $this->OrderBy;
    }

    /**
     * @param string $OrderBy
     * @return \App\OTRS\TicketSearch
     */
    public function setOrderBy($OrderBy)
    {
      $this->OrderBy = $OrderBy;
      return $this;
    }

    /**
     * @return int
     */
    public function getSortBy()
    {
      return $this->SortBy;
    }

    /**
     * @param int $SortBy
     * @return \App\OTRS\TicketSearch
     */
    public function setSortBy($SortBy)
    {
      $this->SortBy = $SortBy;
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
     * @return \App\OTRS\TicketSearch
     */
    public function setCustomerUserID($CustomerUserID)
    {
      $this->CustomerUserID = $CustomerUserID;
      return $this;
    }

}

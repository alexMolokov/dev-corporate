<?php

namespace App\OTRS;

class OTRS_TicketCreate_Ticket
{

    /**
     * @var string $Title
     */
    protected $Title = null;

    /**
     * @var int $QueueID
     */
    protected $QueueID = null;

    /**
     * @var string $Queue
     */
    protected $Queue = null;

    /**
     * @var int $TypeID
     */
    protected $TypeID = null;

    /**
     * @var string $Type
     */
    protected $Type = null;

    /**
     * @var int $ServiceID
     */
    protected $ServiceID = null;

    /**
     * @var string $Service
     */
    protected $Service = null;

    /**
     * @var int $SLAID
     */
    protected $SLAID = null;

    /**
     * @var string $SLA
     */
    protected $SLA = null;

    /**
     * @var int $StateID
     */
    protected $StateID = null;

    /**
     * @var string $State
     */
    protected $State = null;

    /**
     * @var int $PriorityID
     */
    protected $PriorityID = null;

    /**
     * @var string $Priority
     */
    protected $Priority = null;

    /**
     * @var int $OwnerID
     */
    protected $OwnerID = null;

    /**
     * @var string $Owner
     */
    protected $Owner = null;

    /**
     * @var int $ResponsibleID
     */
    protected $ResponsibleID = null;

    /**
     * @var string $Responsible
     */
    protected $Responsible = null;

    /**
     * @var string $CustomerUser
     */
    protected $CustomerUser = null;

    /**
     * @var string $CustomerID
     */
    protected $CustomerID = null;

    /**
     * @var OTRS_PendingTime $PendingTime
     */
    protected $PendingTime = null;

    /**
     * @param string $Title
     * @param string $CustomerUser
     */
    public function __construct($Title, $CustomerUser)
    {
      $this->Title = $Title;
      $this->CustomerUser = $CustomerUser;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setTitle($Title)
    {
      $this->Title = $Title;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setQueueID($QueueID)
    {
      $this->QueueID = $QueueID;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setQueue($Queue)
    {
      $this->Queue = $Queue;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setTypeID($TypeID)
    {
      $this->TypeID = $TypeID;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setType($Type)
    {
      $this->Type = $Type;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setServiceID($ServiceID)
    {
      $this->ServiceID = $ServiceID;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setService($Service)
    {
      $this->Service = $Service;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setSLAID($SLAID)
    {
      $this->SLAID = $SLAID;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setSLA($SLA)
    {
      $this->SLA = $SLA;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setStateID($StateID)
    {
      $this->StateID = $StateID;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setState($State)
    {
      $this->State = $State;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setPriorityID($PriorityID)
    {
      $this->PriorityID = $PriorityID;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setPriority($Priority)
    {
      $this->Priority = $Priority;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setOwnerID($OwnerID)
    {
      $this->OwnerID = $OwnerID;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setOwner($Owner)
    {
      $this->Owner = $Owner;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setResponsibleID($ResponsibleID)
    {
      $this->ResponsibleID = $ResponsibleID;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setResponsible($Responsible)
    {
      $this->Responsible = $Responsible;
      return $this;
    }

    /**
     * @return string
     */
    public function getCustomerUser()
    {
      return $this->CustomerUser;
    }

    /**
     * @param string $CustomerUser
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setCustomerUser($CustomerUser)
    {
      $this->CustomerUser = $CustomerUser;
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
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setCustomerID($CustomerID)
    {
      $this->CustomerID = $CustomerID;
      return $this;
    }

    /**
     * @return OTRS_PendingTime
     */
    public function getPendingTime()
    {
      return $this->PendingTime;
    }

    /**
     * @param OTRS_PendingTime $PendingTime
     * @return \App\OTRS\OTRS_TicketCreate_Ticket
     */
    public function setPendingTime($PendingTime)
    {
      $this->PendingTime = $PendingTime;
      return $this;
    }

}

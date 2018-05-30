<?php

namespace App\OTRS;

class OTRS_TicketHistoryGetResponse_TicketHistoryElement
{

    /**
     * @var int $ArticleID
     */
    protected $ArticleID = null;

    /**
     * @var int $CreateBy
     */
    protected $CreateBy = null;

    /**
     * @var string $CreateTime
     */
    protected $CreateTime = null;

    /**
     * @var string $HistoryType
     */
    protected $HistoryType = null;

    /**
     * @var int $HistoryTypeID
     */
    protected $HistoryTypeID = null;

    /**
     * @var string $Name
     */
    protected $Name = null;

    /**
     * @var int $OwnerID
     */
    protected $OwnerID = null;

    /**
     * @var int $PriorityID
     */
    protected $PriorityID = null;

    /**
     * @var int $QueueID
     */
    protected $QueueID = null;

    /**
     * @var int $StateID
     */
    protected $StateID = null;

    /**
     * @var int $TicketID
     */
    protected $TicketID = null;

    /**
     * @var int $TypeID
     */
    protected $TypeID = null;

    /**
     * @param int $ArticleID
     * @param int $CreateBy
     * @param string $CreateTime
     * @param string $HistoryType
     * @param int $HistoryTypeID
     * @param string $Name
     * @param int $OwnerID
     * @param int $PriorityID
     * @param int $QueueID
     * @param int $StateID
     * @param int $TicketID
     * @param int $TypeID
     */
    public function __construct($ArticleID, $CreateBy, $CreateTime, $HistoryType, $HistoryTypeID, $Name, $OwnerID, $PriorityID, $QueueID, $StateID, $TicketID, $TypeID)
    {
      $this->ArticleID = $ArticleID;
      $this->CreateBy = $CreateBy;
      $this->CreateTime = $CreateTime;
      $this->HistoryType = $HistoryType;
      $this->HistoryTypeID = $HistoryTypeID;
      $this->Name = $Name;
      $this->OwnerID = $OwnerID;
      $this->PriorityID = $PriorityID;
      $this->QueueID = $QueueID;
      $this->StateID = $StateID;
      $this->TicketID = $TicketID;
      $this->TypeID = $TypeID;
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
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setArticleID($ArticleID)
    {
      $this->ArticleID = $ArticleID;
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
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setCreateBy($CreateBy)
    {
      $this->CreateBy = $CreateBy;
      return $this;
    }

    /**
     * @return string
     */
    public function getCreateTime()
    {
      return $this->CreateTime;
    }

    /**
     * @param string $CreateTime
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setCreateTime($CreateTime)
    {
      $this->CreateTime = $CreateTime;
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
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setHistoryType($HistoryType)
    {
      $this->HistoryType = $HistoryType;
      return $this;
    }

    /**
     * @return int
     */
    public function getHistoryTypeID()
    {
      return $this->HistoryTypeID;
    }

    /**
     * @param int $HistoryTypeID
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setHistoryTypeID($HistoryTypeID)
    {
      $this->HistoryTypeID = $HistoryTypeID;
      return $this;
    }

    /**
     * @return string
     */
    public function getName()
    {
      return $this->Name;
    }

    /**
     * @param string $Name
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setName($Name)
    {
      $this->Name = $Name;
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
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setOwnerID($OwnerID)
    {
      $this->OwnerID = $OwnerID;
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
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setPriorityID($PriorityID)
    {
      $this->PriorityID = $PriorityID;
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
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setQueueID($QueueID)
    {
      $this->QueueID = $QueueID;
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
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setStateID($StateID)
    {
      $this->StateID = $StateID;
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
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setTicketID($TicketID)
    {
      $this->TicketID = $TicketID;
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
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistoryElement
     */
    public function setTypeID($TypeID)
    {
      $this->TypeID = $TypeID;
      return $this;
    }

}

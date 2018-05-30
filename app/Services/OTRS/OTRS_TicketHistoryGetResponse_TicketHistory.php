<?php

namespace App\OTRS;

class OTRS_TicketHistoryGetResponse_TicketHistory
{

    /**
     * @var int $TicketID
     */
    protected $TicketID = null;

    /**
     * @var OTRS_TicketHistoryGetResponse_TicketHistoryElement[] $History
     */
    protected $History = null;

    /**
     * @param int $TicketID
     * @param OTRS_TicketHistoryGetResponse_TicketHistoryElement[] $History
     */
    public function __construct($TicketID, array $History)
    {
      $this->TicketID = $TicketID;
      $this->History = $History;
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
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistory
     */
    public function setTicketID($TicketID)
    {
      $this->TicketID = $TicketID;
      return $this;
    }

    /**
     * @return OTRS_TicketHistoryGetResponse_TicketHistoryElement[]
     */
    public function getHistory()
    {
      return $this->History;
    }

    /**
     * @param OTRS_TicketHistoryGetResponse_TicketHistoryElement[] $History
     * @return \App\OTRS\OTRS_TicketHistoryGetResponse_TicketHistory
     */
    public function setHistory(array $History)
    {
      $this->History = $History;
      return $this;
    }

}

<?php

namespace App\OTRS;

class TicketHistoryGetResponse
{

    /**
     * @var OTRS_TicketHistoryGetResponse_TicketHistory $TicketHistory
     */
    protected $TicketHistory = null;

    /**
     * @param OTRS_TicketHistoryGetResponse_TicketHistory $TicketHistory
     */
    public function __construct($TicketHistory)
    {
      $this->TicketHistory = $TicketHistory;
    }

    /**
     * @return OTRS_TicketHistoryGetResponse_TicketHistory
     */
    public function getTicketHistory()
    {
      return $this->TicketHistory;
    }

    /**
     * @param OTRS_TicketHistoryGetResponse_TicketHistory $TicketHistory
     * @return \App\OTRS\TicketHistoryGetResponse
     */
    public function setTicketHistory($TicketHistory)
    {
      $this->TicketHistory = $TicketHistory;
      return $this;
    }

}

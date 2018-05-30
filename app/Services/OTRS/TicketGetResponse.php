<?php

namespace App\OTRS;

class TicketGetResponse
{

    /**
     * @var OTRS_TicketGetResponse_Ticket $Ticket
     */
    protected $Ticket = null;

    /**
     * @param OTRS_TicketGetResponse_Ticket $Ticket
     */
    public function __construct($Ticket)
    {
      $this->Ticket = $Ticket;
    }

    /**
     * @return OTRS_TicketGetResponse_Ticket
     */
    public function getTicket()
    {
      return $this->Ticket;
    }

    /**
     * @param OTRS_TicketGetResponse_Ticket $Ticket
     * @return \App\OTRS\TicketGetResponse
     */
    public function setTicket($Ticket)
    {
      $this->Ticket = $Ticket;
      return $this;
    }

}

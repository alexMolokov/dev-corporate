<?php

namespace App\OTRS;

class TicketSearchResponse
{

    /**
     * @var int $TicketID
     */
    protected $TicketID = null;

    /**
     * @param int $TicketID
     */
    public function __construct($TicketID)
    {
      $this->TicketID = $TicketID;
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
     * @return \App\OTRS\TicketSearchResponse
     */
    public function setTicketID($TicketID)
    {
      $this->TicketID = $TicketID;
      return $this;
    }

}

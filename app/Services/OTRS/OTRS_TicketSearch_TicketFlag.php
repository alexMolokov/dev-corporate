<?php

namespace App\OTRS;

class OTRS_TicketSearch_TicketFlag
{

    /**
     * @var int $Seen
     */
    protected $Seen = null;

    
    public function __construct()
    {
    
    }

    /**
     * @return int
     */
    public function getSeen()
    {
      return $this->Seen;
    }

    /**
     * @param int $Seen
     * @return \App\OTRS\OTRS_TicketSearch_TicketFlag
     */
    public function setSeen($Seen)
    {
      $this->Seen = $Seen;
      return $this;
    }

}

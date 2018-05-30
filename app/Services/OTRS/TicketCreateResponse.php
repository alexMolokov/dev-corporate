<?php

namespace App\OTRS;

class TicketCreateResponse
{

    /**
     * @var int $TicketID
     */
    protected $TicketID = null;

    /**
     * @var string $TicketNumber
     */
    protected $TicketNumber = null;

    /**
     * @var int $ArticleID
     */
    protected $ArticleID = null;

    /**
     * @var OTRS_Error $Error
     */
    protected $Error = null;

    /**
     * @param int $TicketID
     * @param string $TicketNumber
     * @param int $ArticleID
     * @param OTRS_Error $Error
     */
    public function __construct($TicketID, $TicketNumber, $ArticleID, $Error)
    {
      $this->TicketID = $TicketID;
      $this->TicketNumber = $TicketNumber;
      $this->ArticleID = $ArticleID;
      $this->Error = $Error;
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
     * @return \App\OTRS\TicketCreateResponse
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
     * @return \App\OTRS\TicketCreateResponse
     */
    public function setTicketNumber($TicketNumber)
    {
      $this->TicketNumber = $TicketNumber;
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
     * @return \App\OTRS\TicketCreateResponse
     */
    public function setArticleID($ArticleID)
    {
      $this->ArticleID = $ArticleID;
      return $this;
    }

    /**
     * @return OTRS_Error
     */
    public function getError()
    {
      return $this->Error;
    }

    /**
     * @param OTRS_Error $Error
     * @return \App\OTRS\TicketCreateResponse
     */
    public function setError($Error)
    {
      $this->Error = $Error;
      return $this;
    }

}

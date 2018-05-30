<?php

namespace App\OTRS;

class OTRS_Error
{

    /**
     * @var string $ErrorCode
     */
    protected $ErrorCode = null;

    /**
     * @var string $ErrorMessage
     */
    protected $ErrorMessage = null;

    /**
     * @param string $ErrorCode
     * @param string $ErrorMessage
     */
    public function __construct($ErrorCode, $ErrorMessage)
    {
      $this->ErrorCode = $ErrorCode;
      $this->ErrorMessage = $ErrorMessage;
    }

    /**
     * @return string
     */
    public function getErrorCode()
    {
      return $this->ErrorCode;
    }

    /**
     * @param string $ErrorCode
     * @return \App\OTRS\OTRS_Error
     */
    public function setErrorCode($ErrorCode)
    {
      $this->ErrorCode = $ErrorCode;
      return $this;
    }

    /**
     * @return string
     */
    public function getErrorMessage()
    {
      return $this->ErrorMessage;
    }

    /**
     * @param string $ErrorMessage
     * @return \App\OTRS\OTRS_Error
     */
    public function setErrorMessage($ErrorMessage)
    {
      $this->ErrorMessage = $ErrorMessage;
      return $this;
    }

}

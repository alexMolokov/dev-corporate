<?php

namespace App\OTRS;

class OTRS_Attachment
{

    /**
     * @var base64Binary $Content
     */
    protected $Content = null;

    /**
     * @var string $ContentType
     */
    protected $ContentType = null;

    /**
     * @var string $Filename
     */
    protected $Filename = null;

    /**
     * @param base64Binary $Content
     * @param string $ContentType
     * @param string $Filename
     */
    public function __construct($Content, $ContentType, $Filename)
    {
      $this->Content = $Content;
      $this->ContentType = $ContentType;
      $this->Filename = $Filename;
    }

    /**
     * @return base64Binary
     */
    public function getContent()
    {
      return $this->Content;
    }

    /**
     * @param base64Binary $Content
     * @return \App\OTRS\OTRS_Attachment
     */
    public function setContent($Content)
    {
      $this->Content = $Content;
      return $this;
    }

    /**
     * @return string
     */
    public function getContentType()
    {
      return $this->ContentType;
    }

    /**
     * @param string $ContentType
     * @return \App\OTRS\OTRS_Attachment
     */
    public function setContentType($ContentType)
    {
      $this->ContentType = $ContentType;
      return $this;
    }

    /**
     * @return string
     */
    public function getFilename()
    {
      return $this->Filename;
    }

    /**
     * @param string $Filename
     * @return \App\OTRS\OTRS_Attachment
     */
    public function setFilename($Filename)
    {
      $this->Filename = $Filename;
      return $this;
    }

}

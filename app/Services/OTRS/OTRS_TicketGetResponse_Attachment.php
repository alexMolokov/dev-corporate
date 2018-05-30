<?php

namespace App\OTRS;

class OTRS_TicketGetResponse_Attachment
{

    /**
     * @var int $FileID
     */
    protected $FileID = null;

    /**
     * @var base64Binary $Content
     */
    protected $Content = null;

    /**
     * @var string $ContentAlternative
     */
    protected $ContentAlternative = null;

    /**
     * @var string $ContentID
     */
    protected $ContentID = null;

    /**
     * @var string $ContentType
     */
    protected $ContentType = null;

    /**
     * @var string $Filename
     */
    protected $Filename = null;

    /**
     * @var string $Filesize
     */
    protected $Filesize = null;

    /**
     * @var string $FilesizeRaw
     */
    protected $FilesizeRaw = null;

    /**
     * @param int $FileID
     * @param base64Binary $Content
     * @param string $ContentType
     * @param string $Filename
     * @param string $Filesize
     * @param string $FilesizeRaw
     */
    public function __construct($FileID, $Content, $ContentType, $Filename, $Filesize, $FilesizeRaw)
    {
      $this->FileID = $FileID;
      $this->Content = $Content;
      $this->ContentType = $ContentType;
      $this->Filename = $Filename;
      $this->Filesize = $Filesize;
      $this->FilesizeRaw = $FilesizeRaw;
    }

    /**
     * @return int
     */
    public function getFileID()
    {
      return $this->FileID;
    }

    /**
     * @param int $FileID
     * @return \App\OTRS\OTRS_TicketGetResponse_Attachment
     */
    public function setFileID($FileID)
    {
      $this->FileID = $FileID;
      return $this;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Attachment
     */
    public function setContent($Content)
    {
      $this->Content = $Content;
      return $this;
    }

    /**
     * @return string
     */
    public function getContentAlternative()
    {
      return $this->ContentAlternative;
    }

    /**
     * @param string $ContentAlternative
     * @return \App\OTRS\OTRS_TicketGetResponse_Attachment
     */
    public function setContentAlternative($ContentAlternative)
    {
      $this->ContentAlternative = $ContentAlternative;
      return $this;
    }

    /**
     * @return string
     */
    public function getContentID()
    {
      return $this->ContentID;
    }

    /**
     * @param string $ContentID
     * @return \App\OTRS\OTRS_TicketGetResponse_Attachment
     */
    public function setContentID($ContentID)
    {
      $this->ContentID = $ContentID;
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Attachment
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
     * @return \App\OTRS\OTRS_TicketGetResponse_Attachment
     */
    public function setFilename($Filename)
    {
      $this->Filename = $Filename;
      return $this;
    }

    /**
     * @return string
     */
    public function getFilesize()
    {
      return $this->Filesize;
    }

    /**
     * @param string $Filesize
     * @return \App\OTRS\OTRS_TicketGetResponse_Attachment
     */
    public function setFilesize($Filesize)
    {
      $this->Filesize = $Filesize;
      return $this;
    }

    /**
     * @return string
     */
    public function getFilesizeRaw()
    {
      return $this->FilesizeRaw;
    }

    /**
     * @param string $FilesizeRaw
     * @return \App\OTRS\OTRS_TicketGetResponse_Attachment
     */
    public function setFilesizeRaw($FilesizeRaw)
    {
      $this->FilesizeRaw = $FilesizeRaw;
      return $this;
    }

}

<?php

namespace App\OTRS;

class SessionCreate
{
    /**
     * @var string $CustomerUserLogin
     */
    protected $CustomerUserLogin = null;

    /**
     * @var string $UserLogin
     */
    protected $UserLogin = null;


    /**
     * @var string $Password
     */
    protected $Password = null;

    /**
     * @param string $UserLogin
     * @param string $CustomerUserLogin
     * @param string $Password
     */
    public function __construct($UserLogin, $CustomerUserLogin, $Password)
    {
      $this->UserLogin = $UserLogin;
      $this->CustomerUserLogin = $CustomerUserLogin;
      $this->Password = $Password;
    }

    /**
     * @return string
     */
    public function getUserLogin()
    {
      return $this->UserLogin;
    }

    /**
     * @param string $UserLogin
     * @return \App\OTRS\SessionCreate
     */
    public function setUserLogin($UserLogin)
    {
      $this->UserLogin = $UserLogin;
      return $this;
    }

    /**
     * @return string
     */
    public function getCustomerUserLogin()
    {
      return $this->CustomerUserLogin;
    }

    /**
     * @param string $CustomerUserLogin
     * @return \App\OTRS\SessionCreate
     */
    public function setCustomerUserLogin($CustomerUserLogin)
    {
      $this->CustomerUserLogin = $CustomerUserLogin;
      return $this;
    }

    /**
     * @return string
     */
    public function getPassword()
    {
      return $this->Password;
    }

    /**
     * @param string $Password
     * @return \App\OTRS\SessionCreate
     */
    public function setPassword($Password)
    {
      $this->Password = $Password;
      return $this;
    }

}

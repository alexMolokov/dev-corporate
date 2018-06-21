<?php
/**
 * Created by PhpStorm.
 * User: Анастасия
 * Date: 04.05.2018
 * Time: 11:31
 */

namespace App\Helpers;

/**
 * HTTP client based on curl
 */
class HttpClient
{
    protected $_cookie=array();
    protected $_manualCookie=true;

    protected $_useragent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1';
    protected $_url;
    protected $_followlocation;
    protected $_timeout;
    protected $_maxRedirects;
    protected $_cookieFileLocation = './cookie.txt';
    protected $_post;
    protected $_postFields;
    protected $_referer ="http://www.google.com";

    protected $_verbose;
    protected $_session;
    protected $_webpage;
    protected $_includeHeader;
    protected $_noBody;
    protected $_status;
    protected $_binaryTransfer;
    public    $authentication = 0;
    public    $auth_name      = '';
    public    $auth_pass      = '';

    protected $_port=null;

    protected $_sslPeerHost=null;
    protected $_sslPeerCert=null;
    protected $_sslSelfCert=null;
    protected $_sslSelfCertPass=null;

    protected $additionalHeaders = [];
    protected $responseHeaders = [];

    public function getResponseHeaders(){
        return $this->responseHeaders;
    }

    public function useAuth($use){
        $this->authentication = 0;
        if($use == true) $this->authentication = 1;
    }

    public function setBinaryTransfer($use)
    {
        $this->_binaryTransfer = false;
        if($use) $this->_binaryTransfer = true;
    }

    public function setName($name){
        $this->auth_name = $name;
    }
    public function setPass($pass){
        $this->auth_pass = $pass;
    }

    public function setPort($port){
        $this->_port = $port;
    }

    public function __construct($url,$followlocation = true,$timeOut = 30,$maxRedirecs = 4,$binaryTransfer = false,$includeHeader = false,$noBody = false)
    {
        $this->_url = $url;
        $this->_followlocation = $followlocation;
        $this->_timeout = $timeOut;
        //$this->_timeout = 120;
        $this->_maxRedirects = $maxRedirecs;
        $this->_noBody = $noBody;
        $this->_includeHeader = $includeHeader;
        $this->_includeHeader = true;
        $this->_binaryTransfer = $binaryTransfer;

        $this->_verbose=false;

        $this->_cookieFileLocation = dirname(__FILE__).'/cookie.txt';

    }

    public function setSSLMode($peerHost=null,$peerCert=null,$myCert=null,$myCertPass=null)
    {
        $this->_sslPeerHost=$peerHost;
        $this->_sslPeerCert=$peerCert;
        $this->_sslSelfCert=$myCert;
        $this->_sslSelfCertPass=$myCertPass;
    }

    public function setReferer($referer){
        $this->_referer = $referer;
    }

    public function setCookie($сookie)
    {
        if (is_array($сookie))
        {
            $this->_cookie = $сookie;
        }
        else
        {
            $this->_cookie = array();
        }
    }

    public function getCookie(){
        return $this->_cookie;
    }

    public function setCookiFileLocation($path)
    {
        $this->_cookieFileLocation = $path;
    }

    public function setPost ($postFields)
    {
        $this->_post = true;
        $this->_postFields = $postFields;
    }

    public function setUserAgent($userAgent)
    {
        $this->_useragent = $userAgent;
    }

    public function createCurl($url = 'nul')
    {
        $headers = [];

        if($url != 'nul'){
            $this->_url = $url;
        }

        $s = curl_init();

        if ($this->_sslPeerHost)
        {
            curl_setopt($s, CURLOPT_SSL_VERIFYHOST, TRUE);
        }
        else
        {
            curl_setopt($s, CURLOPT_SSL_VERIFYHOST, FALSE);
        }
        if ($this->_sslPeerCert)
        {
            curl_setopt($s, CURLOPT_SSL_VERIFYPEER, TRUE);
            curl_setopt($s, CURLOPT_CAINFO, $this->_sslPeerCert);
        }
        else
        {
            curl_setopt($s, CURLOPT_SSL_VERIFYPEER, false);
        }
        if ($this->_sslSelfCert)
        {
            curl_setopt($s, CURLOPT_SSLCERT, $this->_sslSelfCert);
        }
        if ($this->_sslSelfCertPass)
        {
            curl_setopt($s, CURLOPT_SSLCERTPASSWD, $this->_sslSelfCertPass);
        }

        if(count($this->additionalHeaders) > 0)
        {
            curl_setopt($s, CURLOPT_HTTPHEADER, $this->additionalHeaders);

        }

        curl_setopt($s,CURLOPT_URL,$this->_url);
        //curl_setopt($s,CURLOPT_HTTPHEADER,array('Expect:'));
        curl_setopt($s,CURLOPT_TIMEOUT,$this->_timeout);
        curl_setopt($s,CURLOPT_MAXREDIRS,$this->_maxRedirects);
        curl_setopt($s,CURLOPT_RETURNTRANSFER,true);
        curl_setopt($s,CURLOPT_FOLLOWLOCATION,$this->_followlocation);
        if (!$this->_manualCookie)
        {
            curl_setopt($s,CURLOPT_COOKIEJAR,$this->_cookieFileLocation);
            curl_setopt($s,CURLOPT_COOKIEFILE,$this->_cookieFileLocation);
        }
        else
        {
            $cookie="";
            if (is_array($this->_cookie))
            {
                foreach ($this->_cookie as $key=>$value)
                {
                    $cookie.=$key."=".$value.";";
                }
            }
            curl_setopt($s, CURLOPT_HEADER, true);
            curl_setopt($s, CURLOPT_COOKIE,$cookie);
        }

        if($this->authentication == 1){
            curl_setopt($s, CURLOPT_USERPWD, $this->auth_name.':'.$this->auth_pass);
        }
        if($this->_post)
        {
            curl_setopt($s,CURLOPT_POST,true);
            curl_setopt($s,CURLOPT_POSTFIELDS,$this->_postFields);
        }

        if($this->_includeHeader)
        {
            curl_setopt($s,CURLOPT_HEADER,true);
            curl_setopt($s,CURLINFO_HEADER_OUT, true);
            curl_setopt($s, CURLOPT_HEADERFUNCTION,
                function($curl, $header) use (&$headers)
                {
                    $len = strlen($header);
                    $header = explode(':', $header, 2);
                    if (count($header) < 2) // ignore invalid headers
                        return $len;

                    $name = trim($header[0]);
                    if (!array_key_exists($name, $headers))
                        $headers[$name] = [trim($header[1])];
                    else
                        $headers[$name][] = trim($header[1]);

                    return $len;
                }
            );
        }

        if($this->_noBody)
        {
            curl_setopt($s,CURLOPT_NOBODY,true);
        }
        /*
        if($this->_binary)
        {
            curl_setopt($s,CURLOPT_BINARYTRANSFER,true);
        }
        */
        curl_setopt($s,CURLOPT_USERAGENT,$this->_useragent);
        curl_setopt($s,CURLOPT_REFERER,$this->_referer);

        curl_setopt($s,CURLOPT_VERBOSE,false);

        if ($this->_port)
        {
            curl_setopt($s, CURLOPT_PORT, $this->_port);
        }


        curl_setopt($s,CURLOPT_VERBOSE,true);
        $verbose = fopen('php://temp', 'rw+');
        curl_setopt($s, CURLOPT_STDERR, $verbose);

        $data = curl_exec($s);

        rewind($verbose);

        $this->responseHeaders = $headers;
        $header=substr($data,0,curl_getinfo($s,CURLINFO_HEADER_SIZE));
        $body=substr($data,curl_getinfo($s,CURLINFO_HEADER_SIZE));
        preg_match_all("/Set-Cookie: (.*?)=(.*?);/i",$header,$res);
        foreach ($res[1] as $key => $value)
        {
            $this->_cookie[$value]=$res[2][$key];
        };



        $this->_webpage = $body;
        $this->_status = curl_getinfo($s,CURLINFO_HTTP_CODE);

        curl_close($s);
    }

    public function getHttpStatus()
    {
        return $this->_status;
    }

    public function setVerbose($val)
    {
        $this->_verbose=$val;
    }

    public function __tostring(){
        return $this->_webpage;
    }

    public function result(){
        return $this->_webpage;
    }

    public function setHeaders(array $ar)
    {
        $this->additionalHeaders = $ar;
    }
}


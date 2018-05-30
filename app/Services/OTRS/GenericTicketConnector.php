<?php

namespace App\OTRS;

class GenericTicketConnector extends \SoapClient
{

    /**
     * @var array $classmap The defined classes
     */
    private static $classmap = array (
  'TicketCreate' => 'App\\OTRS\\TicketCreate',
  'TicketCreateResponse' => 'App\\OTRS\\TicketCreateResponse',
  'OTRS_TicketCreate_Ticket' => 'App\\OTRS\\OTRS_TicketCreate_Ticket',
  'OTRS_PendingTime' => 'App\\OTRS\\OTRS_PendingTime',
  'OTRS_Article' => 'App\\OTRS\\OTRS_Article',
  'OTRS_DynamicField' => 'App\\OTRS\\OTRS_DynamicField',
  'OTRS_Attachment' => 'App\\OTRS\\OTRS_Attachment',
  'OTRS_Error' => 'App\\OTRS\\OTRS_Error',
  'TicketUpdate' => 'App\\OTRS\\TicketUpdate',
  'TicketUpdateResponse' => 'App\\OTRS\\TicketUpdateResponse',
  'OTRS_TicketUpdate_Ticket' => 'App\\OTRS\\OTRS_TicketUpdate_Ticket',
  'TicketGet' => 'App\\OTRS\\TicketGet',
  'TicketGetResponse' => 'App\\OTRS\\TicketGetResponse',
  'OTRS_TicketGetResponse_Ticket' => 'App\\OTRS\\OTRS_TicketGetResponse_Ticket',
  'OTRS_TicketGetResponse_Article' => 'App\\OTRS\\OTRS_TicketGetResponse_Article',
  'OTRS_TicketGetResponse_Attachment' => 'App\\OTRS\\OTRS_TicketGetResponse_Attachment',
  'TicketSearch' => 'App\\OTRS\\TicketSearch',
  'TicketSearchResponse' => 'App\\OTRS\\TicketSearchResponse',
  'OTRS_TicketSearch_DynamicField' => 'App\\OTRS\\OTRS_TicketSearch_DynamicField',
  'OTRS_TicketSearch_TicketFlag' => 'App\\OTRS\\OTRS_TicketSearch_TicketFlag',
  'SessionCreate' => 'App\\OTRS\\SessionCreate',
  'SessionCreateResponse' => 'App\\OTRS\\SessionCreateResponse',
  'TicketHistoryGet' => 'App\\OTRS\\TicketHistoryGet',
  'TicketHistoryGetResponse' => 'App\\OTRS\\TicketHistoryGetResponse',
  'OTRS_TicketHistoryGetResponse_TicketHistory' => 'App\\OTRS\\OTRS_TicketHistoryGetResponse_TicketHistory',
  'OTRS_TicketHistoryGetResponse_TicketHistoryElement' => 'App\\OTRS\\OTRS_TicketHistoryGetResponse_TicketHistoryElement',
  'SessionGet' => 'App\\OTRS\\SessionGet',
  'SessionGetResponse' => 'App\\OTRS\\SessionGetResponse',
  'OTRS_SessionGetResponse_SessionData' => 'App\\OTRS\\OTRS_SessionGetResponse_SessionData',
);

    /**
     * @param array $options A array of config values
     * @param string $wsdl The wsdl file to use
     */
    public function __construct(array $options = array(), $wsdl = null)
    {
    
  foreach (self::$classmap as $key => $value) {
    if (!isset($options['classmap'][$key])) {
      $options['classmap'][$key] = $value;
    }
  }
      $options = array_merge(array (
          'features' => 1,
        ), $options);

       if (!$wsdl) {
             $wsdl = __DIR__ . DIRECTORY_SEPARATOR . 'otrs.wsdl';
        }
        parent::__construct($wsdl, $options);
    }

    /**
     * @param TicketCreate $parameters
     * @return TicketCreateResponse
     */
    public function TicketCreate(TicketCreate $parameters)
    {
        var_dump($this->__setParams($parameters));

        return  $this->__soapCall('TicketCreate', [$this->__setParams($parameters)]);
    }

    /**
     * @param TicketUpdate $parameters
     * @return TicketUpdateResponse
     */
    public function TicketUpdate(TicketUpdate $parameters)
    {
      return $this->__soapCall('TicketUpdate', array($parameters));
    }

    /**
     * @param TicketGet $parameters
     * @return TicketGetResponse
     */
    public function TicketGet(TicketGet $parameters)
    {
        var_dump($this->__setParams($parameters));
       $result =  $this->__soapCall('TicketGet',  [$this->__setParams($parameters)]);
        echo $this->__getLastRequest();
       echo $this->__getLastResponse();
       return $result;
    }

    /**
     * @param TicketSearch $parameters
     * @return TicketSearchResponse
     */
    public function TicketSearch(TicketSearch $parameters)
    {




        return $this->__soapCall('TicketSearch', array($parameters));
    }

    public function TicketSearchBsystem()
    {

        $ticketSearch = new TicketSearch([
            "Limit" => 10,
            "QueueIDs" => 37,
            "UserLogin" => "amolokov",
            "Password" => "123456789",
            "DynamicFieldBsystemUserId" => new OTRS_DynamicFieldBsystemUserId(5)
        ]);




        $this->__soapCall('TicketSearch',[$this->__setParams($ticketSearch)]);

        echo $this->__getLastRequest();
        echo $this->__getLastResponse();

       /* $result = $this->__soapCall("TicketSearch",

            array(["UserLogin" => "amolokov", "Password" => "123456789", "Limit" => 10, "QueueIDs" => 37, "DynamicField_bsystemUserId" => ["Equals" => "5"]]
            ));
        echo $this->__getLastRequest();
        $this->__getLastResponse();*/


    }

    /**
     * @param TicketHistoryGet $parameters
     * @return TicketHistoryGetResponse
     */
    public function TicketHistoryGet(TicketHistoryGet $parameters)
    {
        $result = $this->__soapCall('TicketHistoryGet', array($parameters));
      return $result;
    }

    /**
     * @param SessionCreate $parameters
     * @return SessionCreateResponse
     */
    public function SessionCreate(SessionCreate $parameters)
    {
        return  $this->__soapCall('SessionCreate', [$this->__setParams($parameters)]);
    }

    private function __setParams($object)
    {
        $result = [];
        $reflect = new \ReflectionClass($object);
        $properties =$reflect->getProperties();

        foreach($properties as $property)
        {
            $method = "get" . $property->name;
            if(method_exists($object, $method))
            {
                $propertyValue = $object->$method();
                if(!is_null($propertyValue))
                {
                    if(is_object($propertyValue)) $propertyValue = $this->__setParams($propertyValue);
                    $result[$property->name] = $propertyValue;
                }
            }
        }
        return $result;
    }

    /**
     * @param SessionGet $parameters
     * @return SessionGetResponse
     */
    public function SessionGet(SessionGet $parameters)
    {
      return $this->__soapCall('SessionGet', array($parameters));
    }

}
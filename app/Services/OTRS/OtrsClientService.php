<?php
namespace  App\OTRS;

use App\Contracts\TicketsInterface;
use App\Helpers\HttpClient;
use Mockery\Exception;

class OtrsClientService implements  TicketsInterface
{
    private $serviceUser;
    private $servicePassword;

    /**
     *  @brief queues array ["id" => "Name"] Id from OTRS system
     *
     */
    private $queues = [];
    private $defaultQueue;
    /**
     * @brief priorities array ["id" => "Name"] Id from OTRS system
     */
    private $priorities = [];
    private $defaultPriority;

    /**
     * @brief states array ["id" => "Name"] Id from OTRS system
     */
    private $states = [];
    private $startState;

    private $contentType;
    private $customerField;

    private $client;

    private $sessionId;
    private $notNullable = ["url","uri","serviceUser","servicePassword", "queues", "defaultQueue", "priorities", "defaultPriority", "states", "startState", "contentType", "customerField"];



    public function __construct(array $config)
    {
        foreach($config as $key => $value)
        {
            if(property_exists($this,$key)) $this->{$key} = $value;
        }

        foreach($this->notNullable as $key)
        {
            if(!isset($config[$key])) throw new \Exception($key . " - must be at config");
        }

        $options = [
            'location'=> $config["url"],
            'uri' => $config["uri"],
            'trace' => 1,
            'style' => SOAP_RPC,
            'use' => SOAP_ENCODED
        ];

        if(!is_null($config["httpUser"]))
        {
            $options['stream_context'] = stream_context_create([
                'http' => [
                    'header' => 'Authorization:Basic ' . base64_encode($config["httpUser"] . ":" . $config["httpPassword"])
                ]
            ]);
        }

        $this->client = new GenericTicketConnector($options,null);
    }

    public function getSessionId()
    {
        if(isset($this->sessionId)) return  $this->sessionId;

        $SessionObject = new SessionCreate(null, $this->serviceUser, $this->servicePassword);

        $result  = $this->client->SessionCreate($SessionObject);
        if($result->getError())
        {
                throw new \Exception($result->getError()->getErrorMessage());
        }
        else
        {
                $this->sessionId = $result->getSessionID();
        }
    }


    /**
     * @brief Create Ticket from data
     * @param array $data (title, customerId, body, queue)
     */
    public function create(array $data)
    {
        if(!isset($this->sessionId)) $this->getSessionId();

        $ticket = new OTRS_TicketCreate_Ticket(
            $data['title'],
            null
        );

        $ticket->setCustomerUser($this->serviceUser);
        $ticket->setStateID($this->startState);
        $ticket->setQueueID($data["queueId"]);
        $ticket->setPriorityID($data["priorityId"]);

        $article = new OTRS_Article(
            true,
            $data['title'],
            $data['body'],
            null,
            null
           );

        $article->setContentType($this->contentType);
        $dynamicField = new OTRS_DynamicField($this->customerField, [$data[$this->customerField]]);

        $createTicket = new TicketCreate(null, null, $this->sessionId, null, $ticket, $article, $dynamicField, null);

        $this->client->__getLastRequest();
        $result  = $this->client->TicketCreate($createTicket);

        if($result->getError())
        {
            throw new \Exception($result->getError()->getErrorMessage());
        }
        else
        {
            return $result->getTicketID();
        }
    }

    public function search(array $data)
    {
        $this->client->TicketSearchBsystem();
    }



    public function get()
    {
        if(!isset($this->sessionId)) $this->getSessionId();

        $ticketGet = new TicketGet(
            null,
            null,
            $this->sessionId,
            null,
            65521,
            null,
            null,
            1,
            null,
            null,
            null,
            null,
            null,
            null
        );

        $result  = $this->client->TicketGet($ticketGet);

        var_dump($result);

    }
}
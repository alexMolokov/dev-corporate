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

    private $limit = 40;

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

        if(count($data["attachment"]) > 0)
        {
            $atachment = new OTRS_Attachment();
        }

        $article->setContentType($this->contentType);
        $dynamicField = new OTRS_DynamicField($this->customerField, [$data[$this->customerField]]);

        $createTicket = new TicketCreate(null, null, $this->sessionId, null, $ticket, $article, $dynamicField, null);


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
        $return = [];
        if(!isset($this->sessionId)) $this->getSessionId();
        if(!isset($data[$this->customerField])) return $return;

        $ticketSearch = new TicketSearch([
            "Limit" => $this->limit,
            "QueueIDs" => array_keys($this->queues),
            "SessionID" => $this->sessionId,
            "DynamicField_BsystemUserId" => new OTRS_DynamicField_BsystemUserId($data[$this->customerField])
        ]);


        $result = $this->client->TicketSearchBsystem($ticketSearch);
        if(is_null($result)) return $return;

        $ticketIds = $result->getTicketID();

        if(is_int($ticketIds)) $ticketIds = [$ticketIds];
        if(!is_array($ticketIds)) $ticketIds = [];

        if(count($ticketIds) == 0) return $return;

        // App\OTRS\TicketGetResponse
        $result = $this->_get(["TicketID" => $ticketIds,"ArticleLimit" => 0]);
        $ar = $result->getTicket();

        foreach($ar as $ticket) {
            // App\OTRS\OTRS_TicketGetResponse_Ticket
            $return[] = [
                "date" => $ticket->getCreated(),
                "lastUpdate" => $ticket->getChanged(),
                "theme" => $ticket->getTitle(),
                "status" => $this->__getStateName($ticket->getStateID()),
                "department" => $this->__getQueueName($ticket->getQueueID()),
                "ticketNumber" => $ticket->getTicketNumber()
            ];
        }
        return $return;

    }

    public function get(array $data)
    {
        $return = [];
        if(!isset($this->sessionId)) $this->getSessionId();
        if(!isset($data[$this->customerField])) return $return;
        if(!isset($data["ticketNumber"])) return $return;

        $ticketSearch = new TicketSearch([
            "Limit" => $this->limit,
            "QueueIDs" => array_keys($this->queues),
            "SessionID" => $this->sessionId,
            "DynamicField_BsystemUserId" => new OTRS_DynamicField_BsystemUserId($data[$this->customerField]),
            "TicketNumber" => $data["ticketNumber"]
        ]);
        $result = $this->client->TicketSearchBsystem($ticketSearch);
        if(is_null($result)) return $return;

        $ticketIds = $result->getTicketID();
        if(is_int($ticketIds)) $ticketIds = [$ticketIds];
        if(!is_array($ticketIds)) $ticketIds = [];

        if(count($ticketIds) == 0) return $return;

        $result = $this->_get([
            "TicketID" => $ticketIds,
            "ArticleLimit" => 0,
            "AllArticles" => 1,
            "Attachments" => 1,
            "ArticleOrder" => "DESC",
            "DynamicFields" => 0
         ]
        );


        $ar = $result->getTicket();

        $return = [];

        foreach($ar as $ticket)
        {
            $articlesResponse = $ticket->getArticle();
            foreach($articlesResponse as $article)
            {
                $attachments = [];
                $attachmentsResponse = $article->getAttachment();


                if(is_array($attachmentsResponse))
                {
                    foreach($attachmentsResponse as $attachment)
                    {
                        $attachments[] = [
                            "filename" => $attachment->getFilename(),
                            "size" =>  $attachment->getFilesize(),
                            "id" => $attachment->getFileID()
                        ];
                    }
                }

                $articles[] = [
                  "id" =>   $article->getArticleID(),
                  "date" => $article->getChanged(),
                  "body" => $article->getBody(),
                  "attachments" => $attachments
                ];
            }

            $return = [
                "date" => $ticket->getCreated(),
                "lastUpdate" => $ticket->getChanged(),
                "theme" => $ticket->getTitle(),
                "status" => $this->__getStateName($ticket->getStateID()),
                "department" => $this->__getQueueName($ticket->getQueueID()),
                "ticketNumber" => $ticket->getTicketNumber(),
                "articles" => $articles
            ];
        }

        return $return;
    }

    public function getAttachment(array $data)
    {

    }

    private function _get(array $data)
    {
        if(!isset($this->sessionId)) $this->getSessionId();

        $ticketGet = new TicketGet([
            "SessionID" => $this->sessionId,
            "TicketID" => $data["TicketID"],
            "DynamicFields" => (isset($data["DynamicFields"]))? $data["DynamicFields"] : 1,
            "AllArticles" => (isset($data["AllArticles"]))? $data["AllArticles"] : 0,
            "ArticleLimit" => (isset($data["ArticleLimit"]))? $data["ArticleLimit"] : 1,
            "Attachments" => (isset($data["Attachments"]))? $data["Attachments"] : 0,
            "ArticleOrder" => (isset($data["ArticleOrder"]))? $data["ArticleOrder"] : "ASC"
        ]);

        return  $this->client->TicketGet($ticketGet);

    }

    private function __getStateName($stateId) {
        if(isset($this->states[$stateId])) return $this->states[$stateId];
        return "Unknown";
    }

    private function __getQueueName($queueId)
    {
        if(isset($this->queues[$queueId])) return $this->queues[$queueId];
        return "Unknown";
    }
}
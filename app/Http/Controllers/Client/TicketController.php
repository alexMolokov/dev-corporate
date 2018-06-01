<?php

namespace App\Http\Controllers\Client;
use App\Http\Controllers\Controller;


use App\Http\Requests\Tickets\AddTicketRequest;
use App\Http\Requests\Tickets\GetAttachmentRequest;
use App\Http\Requests\Tickets\GetTicketRequest;

use App\Contracts\TicketsInterface;
use Illuminate\Http\Request;
use Auth;
use File;

class TicketController extends Controller
{
    /**
     * @var TicketsInterface
     */
    private $service;

    private $customerField;

    public function __construct(Request $request)
    {
        $this->service = resolve("App\Contracts\TicketsInterface");
        $this->customerField = config("otrs.customerField");
    }

    public function getQueuesPriorities()
    {
        $queuesInfo = config("otrs.queues");
        $queues = [];
        foreach($queuesInfo as $key => $queue) $queues[] = ["key" => $key, "value" =>__($queue)];

        $prioritiesInfo = config("otrs.priorities");
        $priorities = [];
        foreach($prioritiesInfo as $key => $priority) $priorities[] = ["key" => $key, "value" =>__($priority)];

        $result = [
            "queues" =>  $queues,
            "priorities" => $priorities,
            "defaultPriority" => config("otrs.defaultPriority"),
            "defaultQueue" => config("otrs.defaultQueue")
        ];
        return response()->success($result);
    }


    public function add(AddTicketRequest $request)
    {

        $data = [
            "title" => $request->input("theme"),
            "name" => Auth::user()->getName(),
            "queueId" => $request->input("department"),
            "priorityId" => $request->input("priority"),
            "body" => $request->input("message"),
            $this->customerField => Auth::user()->getCustomerId()
        ];

        $attachments = [];
        $files = $request->files->get("files");
        if(is_array($files))
        {
            foreach($files as $file)
            {
                $attachments[] = [
                    "Content"     => base64_encode(File::get($file->getRealPath())),
                    "ContentType" => $file->getClientMimeType(),
                    "Filename"    => $file->getClientOriginalName()
                ];
            }
        }

        $data["attachment"] = $attachments;

        try {

            $result = $this->service->create($data);
            return response()->success($result);
        }
        catch(\Exception $e)
        {
            return response()->error(__("Can't add Ticket.") . " " . __("Please try later!"));
        }
    }

    public function getList(Request $request)
    {
         $result = $this->service->search([
             $this->customerField => Auth::user()->getCustomerId()
        ]);

       if($result)
       {
           foreach($result as $recordKey => $record)
           {
               $record["date_int"] = date("YmdHi",strtotime($record["date"]));
               $record["lastUpdate_int"] = date("YmdHi",strtotime($record["lastUpdate"]));
               $record["department"] = __($record["department"]);
               $record["status"] = __($record["status"]);
               $result[$recordKey] = $record;
           }
       }

        return response()->success($result);

    }

    public function get($ticketNumber)
    {
        $result = $this->service->get([
            $this->customerField => Auth::user()->getCustomerId(),
            "ticketNumber" => $ticketNumber
        ]);

        return response()->success($result);
    }

    public function getAttachment(Request $request)
    {
        echo "1";
        die();
    }


}

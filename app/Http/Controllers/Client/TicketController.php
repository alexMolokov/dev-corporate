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


    private function _getAttachment(Request $request) {
        $attachments = [];
        $files = $request->files->get("files");

        if(is_array($files))
        {
            foreach($files as $file)
            {
                $attachments[] = [
                    "Content"     => File::get($file->getRealPath()),
                    "ContentType" => $file->getClientMimeType(),
                    "Filename"    => $file->getClientOriginalName()
                ];
            }
        }
        return $attachments;
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


        $data["attachments"] = $this->_getAttachment($request);

        try {

            $result = $this->service->create($data);
            return response()->success($result);
        }
        catch(\Exception $e)
        {
            return response()->error(__($e->getMessage() . " Can't add Ticket.") . " " . __("Please try later!"));
        }
    }

    public function getList(Request $request)
    {
         $result = $this->service->getList([
             $this->customerField => Auth::user()->getCustomerId()
        ], Auth::user()->getCustomerId());

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
        ], Auth::user()->getCustomerId());

        return response()->success($result);
    }

    public function getAttachment(Request $request, $ticketNumber, $articleId, $fileName)
    {
        $result = $this->service->getAttachment([
            $this->customerField => Auth::user()->getCustomerId(),
            "ticketNumber" => $ticketNumber,
            "fileName" => $fileName,
            "articleId" => $articleId
        ]);

        if(is_array($result))
        {
            return response($result["content"], 200)
                ->header('Content-Type', $result["contentType"])
                ->header('Content-Length', $result["contentLength"])
                ->header('Content-Disposition', "attachment;  filename=\"{$result['fileName']}\"");
        }

        return response()->error(__("File Not found"));

    }

    public function addArticle(Request $request)
    {
        $data = [
            $this->customerField => Auth::user()->getCustomerId(),
            "ticketNumber" => $request->input("ticketNumber"),
            "body" => $request->input("message"),
            "attachments" => $this->_getAttachment($request)
        ];

        $result = $this->service->addArticle($data);

        try {

            $result = $this->service->addArticle($data);
            return response()->success($result);
        }
        catch(\Exception $e)
        {
            return response()->error(__("Can't add Answer.") . " " . __("Please try later!"));
        }
    }


}

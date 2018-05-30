<?php

namespace App\Http\Controllers\Client;
use App\Http\Controllers\Controller;


use App\Http\Requests\Tickets\AddTicketRequest;
use Illuminate\Http\Request;

class TicketController extends Controller
{
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
            "defaultQueue" => config("otrs.defaultPriority")
        ];
        return response()->success($result);
    }


    public function add(AddTicketRequest $request) {

    }

    public function getList(Request $request)
    {
            $data = [];
            $data[] = [
                "date" => '25.01.1988',
                "department" => "Tech",
                "theme" => "ntvf",
                "status" => "new",
                "lastupdate" => '25.01.1989',
                "lastupdate_int" => "19890125",
                "date_int" => '19880125'
            ];

        $data[] = [
            "date" => '25.01.2000',
            "department" => "Tech1",
            "theme" => "ntvf1",
            "status" => "new1",
            "lastupdate" => '25.01.2002',
            "lastupdate_int" => "20020125",
            "date_int" => '20000125'
        ];

        return response()->success($data);
    }




}

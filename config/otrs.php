<?php
return [
    "url" => env("OTRS_URL"),
    'uri' => env("OTRS_URI"),
    "httpUser" => env("OTRS_HTTP_USER"),
    "httpPassword" => env("OTRS_HTTP_PASSWORD"),
    "serviceUser" => env("OTRS_SERVICE_USER",null),
    "servicePassword" => env("OTRS_SERVICE_PASSWORD"),

    "queues" => ["37" => "Technical Support", "37" => "Sales"],
    "defaultQueue" => "37",

    "priorities" => [5 => "High", 3 => "Normal", 1 => "Low"],
    "defaultPriority" => 3,

    "countRecordsOnPage" => 10,
    "states" => [
        "1" => "new",
        "2" => "closed successful",
        "3" => "closed unsuccessful",
        "4" => "open",
        "5" => "removed",
        "6" => "pending reminder",
        "7" => "pending auto close+",
        "8" => "pending auto close-",
        "9" => "merged"
    ],
    "startState" => 1,
    "contentType" => "text/plain; charset=utf8",
    "customerField" => "BsystemUserId" // dynamic field at otrs (if not exists need create )


];


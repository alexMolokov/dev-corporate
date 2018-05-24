<?php
return [
    "url" => env("OTRS_URL"),
    "httpUser" => env("OTRS_HTTP_USER"),
    "httpPassword" => env("OTRS_HTTP_PASSWORD"),

    "serviceUser" => env("OTRS_SERVICE_USER",null),
    "servicePassword" => env("OTRS_SERVICE_PASSWORD"),
    "queueTech" => env("OTRS_QUEUE_TECH"),
    "queueCommon" => env("OTRS_QUEUE_COMMON"),
];


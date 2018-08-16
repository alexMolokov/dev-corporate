<?php

return [
    "httpUser" => env("DOWNLOAD_SERVER_HTTP_USER"),
    "httpPassword" => env("DOWNLOAD_SERVER_HTTP_PASSWORD"),
    "urls" => [
        "standalone" => [
            "windows" => env("DOWNLOAD_SERVER_WINDOWS_STANDALONE",
                "https://www.vipole.com/download-server/standalone-windows-2017-en"),
            "linux" => env("DOWNLOAD_SERVER_LINUX_STANDALONE",
                "https://www.vipole.com/download-server/standalone-linux_x86_64-2017-en")
        ],
        "cluster" => [
            "windows" => env("DOWNLOAD_SERVER_WINDOWS_CLUSTER",
                "https://www.vipole.com/download-server/cluster-windows-2017-en"),
            "linux" => env("DOWNLOAD_SERVER_LINUX_CLUSTER",
                "https://www.vipole.com/download-server/cluster-linux_x86_64-2017-en")
        ]
    ],
    "addons" => [
        "redis" => ["name" => "Redis", "url" => "https://redis.io"],
        "mongo" => ["name" => "Mongo", "url" => "https://www.mongodb.com"]
    ]
];

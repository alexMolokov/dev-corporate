<?php
/*
types
file -
soon
html
*/
return [
    "servers" => [
        "standalone" => [
                "windows" =>
                [
                    "ru" => ["type" => "file", "reference" => "standalone_windows_en"],
                    "en" => ["type" => "html"]
                ],
                 "linux" =>
                 [
                    "en" => ["type" => "soon"],
                    "ru" => ["type" => "soon"]
                 ]
        ],
         "cluster" => [
                    "windows" =>
                    [
                        "en" => ["type" => "soon"],
                        "ru" => ["type" => "soon"]
                    ],
                     "linux" =>
                     [
                        "en" => ["type" => "soon"],
                        "ru" => ["type" => "soon"]
                     ]
         ]
    ],
    "filesPath" => "support/documents",
    "files" => [
        "standalone_windows_en" => ["name" => "Installation Manual - VIPole Corporate Server v.2.0 Win EN.pdf", "content-type" => "application/octet-stream"]
    ],
    "search" => [
        "allow" => env("SUPPORT_SEARCH_ALLOW", true),
        "host" => env("SUPPORT_SEARCH_HOST", "localhost"),
        "port" =>  env("SUPPORT_SEARCH_PORT","9306"),
        "charset" => env("SUPPORT_SEARCH_CHARSET","utf8"),
        "index" => env("SUPPORT_SEARCH_INDEX","supportCorporate"),
        "args" => "--rotate",
        "exec" => "indexer",
        "path" => env("SUPPORT_SEARCH_PATH", "C:/sphinx/bin")
    ]
];

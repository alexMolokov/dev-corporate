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
    ]
];

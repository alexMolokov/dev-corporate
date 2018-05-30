<?php
    return [
        "currency" => "USD",
        "trial" => 14, //days

        "products" => [
            "1" => [
                "name" => "VIPole Enterprise, Standalone edition",
                "baseAnnualPrice" => 950,
                "baseLifetimePrice" => 1700,
                "startUsers" => 10,
                "userLicensePrice" => ["50" => 70, "100" => 66, "200" => 63, "300" => 52],
                "userLicenseRenewalPrice" => ["50" => 56, "100" => 52.8, "200" => 50.4, "300" => 41.6],
                "userLicenseLifetimePrice" => ["50" => 150, "100" => 142, "200" => 135, "300" => 128],
                "section" => "servers"
            ],
            "2" => [
                "name" => "VIPole Enterprise, Cluster edition",
                "baseAnnualPrice" => 2900,
                "baseLifetimePrice" => 6000,
                "startUsers" => 30,
                "userLicensePrice" => ["50" => 90, "100" => 85.5, "200" => 81, "300" => 76.5],
                "userLicenseRenewalPrice" => ["50" => 72, "100" => 68.4, "200" => 64.8, "300" => 61.2],
                "userLicenseLifetimePrice" => ["50" => 200, "100" => 190, "200" => 180, "300" => 128],
                "section" => "servers"
            ],
            "3" => [
                "name" => "VoIP/SIP module",
                "baseAnnualPrice" => 300,
                "baseLifetimePrice" => 700,
                "section" => "addons"
            ],
            "4" => [
                "name" => "WEB module",
                "baseAnnualPrice" => 100,
                "baseLifetimePrice" => 250,
                "section" => "addons"
            ],
            "5" => [
                "name" => "Media Relay Worker",
                "baseAnnualPrice" => 300,
                "baseLifetimePrice" => 700,
                "section" => "addons"
            ],
            "6" => [
                "name" => "Cluster Processing Worker",
                "baseAnnualPrice" => 450,
                "baseLifetimePrice" => 1000,
                "section" => "addons"
            ],
            "7" => [
                "name" => "Installing Enterprise Standalone edition",
                "baseLifetimePrice" => 200,
                "section" => "services"
            ],
            "8" => [
                "name" => "Installing Enterprise Cluster edition",
                "baseLifetimePrice" => 500,
                "section" => "services"
            ],
            "9" => [
                "name" => "Applying server software updates",
                "baseLifetimePrice" => 300,
                "section" => "services"
            ],
            "10" => [
                "name" => "Recovering server data base from backup for Standalone edition",
                "baseLifetimePrice" => 100,
                "section" => "services"
            ],
            "11" => [
                "name" => "Recovering server data base from backup for Cluster edition",
                "baseLifetimePrice" => 300,
                "section" => "services"
            ],
            "12" => [
                "name" => "Installing and configuring optional addons",
                "baseLifetimePrice" => 200,
                "section" => "services"
            ]
        ]

    ];

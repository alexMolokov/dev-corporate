<?php
    return [
        "currency" => "USD",
        "renewDiscount" => 0.2, // %
        "os" => [
            "windows" => ["name" => "Windows Server"],
            "linux" => ["name" => "Linux Debian"],
        ],
        "periods" => [
            "trial" => ["name" => "14 days trial", "period" => 14],
            "annual" => ["name" => "12 months", "period" => 365],
            "lifetime" => ["name" => "lifetime", "period" => "Infinity"]
        ],
        "products" => [
            "1" => [
                "name" => "VIPole Enterprise, Standalone edition",
                "baseAnnualPrice" => 250,
                "baseLifetimePrice" => 200,
                "startUsers" => 10,
                "postfixForLicense" => "UserLicense",
                "baseAnnualPriceUserLicense" => ["50" => 70, "100" => 66, "200" => 63, "300" => 52],
                "baseLifetimePriceUserLicense" => ["50" => 150, "100" => 142, "200" => 135, "300" => 128],
                "userLicenseRenewalPrice" => ["50" => 56, "100" => 52.8, "200" => 50.4, "300" => 41.6],
                "section" => "servers"
            ],
            "2" => [
                "name" => "VIPole Enterprise, Cluster edition",
                "baseAnnualPrice" => 200,
                "baseLifetimePrice" => 0,
                "startUsers" => 30,
                "postfixForLicense" => "UserLicense",
                "baseAnnualPriceUserLicense" => ["50" => 90, "100" => 85.5, "200" => 81, "300" => 76.5],
                "baseLifetimePriceUserLicense" => ["50" => 200, "100" => 190, "200" => 180, "300" => 128],
                "userLicenseRenewalPrice" => ["50" => 72, "100" => 68.4, "200" => 64.8, "300" => 61.2],
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
                "baseAnnualPrice" => 200,
                "baseLifetimePrice" => 200,
                "section" => "services"
            ],
            "8" => [
                "name" => "Installing Enterprise Cluster edition",
                "baseAnnualPrice" => 500,
                "baseLifetimePrice" => 500,
                "section" => "services"
            ],
            "9" => [
                "name" => "Applying server software updates",
                "baseAnnualPrice" => 300,
                "baseLifetimePrice" => 300,
                "section" => "services"
            ],
            "10" => [
                "name" => "Recovering server data base from backup for Standalone edition",
                "baseAnnualPrice" => 100,
                "baseLifetimePrice" => 100,
                "section" => "services"
            ],
            "11" => [
                "name" => "Recovering server data base from backup for Cluster edition",
                "baseAnnualPrice" => 300,
                "baseLifetimePrice" => 300,
                "section" => "services"
            ],
            "12" => [
                "name" => "Installing and configuring optional addons",
                "baseAnnualPrice" => 200,
                "baseLifetimePrice" => 200,
                "section" => "services"
            ]
        ]

    ];

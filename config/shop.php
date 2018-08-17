<?php
    return [
        "currency" => "USD",
        "renewDiscount" => 0.2, // %
        "trialServers" => ["1"],
        "paymentMethods" => [
            "bitcoin" => "Bitcoin",
            "visa_mastercard" => "Visa",
            "card" => "American Express",
            "paypal" => "Paypal",
            "webmoney" => "Webmoney",
            "yandex" => "Yandex.Money",
            "qiwi" => "Qiwi",
            "wiretransfer" => "Wire Transfer"
        ],
        "os" => [
            "windows" => ["name" => "Windows Server"],
            "linux" => ["name" => "Linux Debian"],
        ],
        "bsOs" => [
            "windows" => "windows",
            "linux" => "linux_x86_64",
        ],
        "periods" => [
            "trial" => ["name" => "14 days trial", "period" => 14],
            "annual" => ["name" => "12 months", "period" => 365],
            "lifetime" => ["name" => "lifetime", "period" => "Infinity"]
        ],
        "products" => [
            "1" => [
                "trial" => true,
                "trialAllowedProducts" => ["3"],
                "edition" => "standalone",
                "release" => "2017",
                "name" => "VIPole Enterprise, Standalone edition",
                "baseAnnualPrice" => 250,
                "baseLifetimePrice" => 200,
                "startUsers" => 10,
                "postfixForLicense" => "UserLicense",
                "baseAnnualPriceUserLicense" => ["50" => 70, "100" => 66, "200" => 63, "300" => 52],
                "baseLifetimePriceUserLicense" => ["50" => 150, "100" => 142, "200" => 135, "300" => 128],
                "userLicenseRenewalPrice" => ["50" => 56, "100" => 52.8, "200" => 50.4, "300" => 41.6],
                "section" => "servers",
                 "avangate" => [
                     "license" => ["annual" => 5023124,"lifetime" => 5023148, "renew" => 5023156],
                     "server" => ["annual" => 5023159,"lifetime" => 5023160]
                 ],
            ],
            "2" => [
                "name" => "VIPole Enterprise, Cluster edition",
                "edition" => "cluster",
                "release" => "2017",
                "baseAnnualPrice" => 200,
                "baseLifetimePrice" => 0,
                "startUsers" => 30,
                "postfixForLicense" => "UserLicense",
                "baseAnnualPriceUserLicense" => ["50" => 90, "100" => 85.5, "200" => 81, "300" => 76.5],
                "baseLifetimePriceUserLicense" => ["50" => 200, "100" => 190, "200" => 180, "300" => 128],
                "userLicenseRenewalPrice" => ["50" => 72, "100" => 68.4, "200" => 64.8, "300" => 61.2],
                "section" => "servers",
                "avangate" => [
                    "license" => ["annual" => 5023162,"lifetime" => 5023167, "renew" => 5023163],
                    "server" => ["annual" => 5023161,"lifetime" => 5023169]
                ],
            ],
            "3" => [
                "name" => "VoIP/SIP module",
                "bsname" => "SIP",
                "baseAnnualPrice" => 300,
                "baseLifetimePrice" => 700,
                "section" => "addons",
                "avangate" => ["annual" => 5023016,"lifetime" => 5023021]
            ],
            "4" => [
                "name" => "WEB module",
                "bsname" => "BS-HTTP",
                "baseAnnualPrice" => 100,
                "baseLifetimePrice" => 250,
                "section" => "addons",
                "avangate" => ["annual" => 5023029,"lifetime" => 5023030]
            ],
            "5" => [
                "name" => "Media Relay Worker",
                "baseAnnualPrice" => 300,
                "baseLifetimePrice" => 700,
                "section" => "addons",
                "avangate" => ["annual" => 5023033,"lifetime" => 5023045]
            ],
            "6" => [
                "name" => "Cluster Processing Worker",
                "baseAnnualPrice" => 450,
                "baseLifetimePrice" => 1000,
                "section" => "addons",
                "avangate" => ["annual" => 5023046,"lifetime" => 5023047]
            ],
            "7" => [
                "name" => "Installing Enterprise Standalone edition",
                "baseAnnualPrice" => 200,
                "baseLifetimePrice" => 200,
                "section" => "services",
                "avangate" => ["annual" => 5023049,"lifetime" => 5023049]
            ],
            "8" => [
                "name" => "Installing Enterprise Cluster edition",
                "baseAnnualPrice" => 500,
                "baseLifetimePrice" => 500,
                "section" => "services",
                "avangate" => ["annual" => 5023052,"lifetime" => 5023052]
            ],
            "9" => [
                "name" => "Applying server software updates",
                "baseAnnualPrice" => 300,
                "baseLifetimePrice" => 300,
                "section" => "services",
                "avangate" => ["annual" => 5023054,"lifetime" => 5023054]
            ],
            "10" => [
                "name" => "Recovering server data base from backup for Standalone edition",
                "baseAnnualPrice" => 100,
                "baseLifetimePrice" => 100,
                "section" => "services",
                "avangate" => ["annual" => 5023056,"lifetime" => 5023056]
            ],
            "11" => [
                "name" => "Recovering server data base from backup for Cluster edition",
                "baseAnnualPrice" => 300,
                "baseLifetimePrice" => 300,
                "section" => "services",
                "avangate" => ["annual" => 5023062,"lifetime" => 5023062]
            ],
            "12" => [
                "name" => "Installing and configuring optional addons",
                "baseAnnualPrice" => 200,
                "baseLifetimePrice" => 200,
                "section" => "services",
                "avangate" => ["annual" => 5023065,"lifetime" => 5023065]
            ]
        ]

    ];

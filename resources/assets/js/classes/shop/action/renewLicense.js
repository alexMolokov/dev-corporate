import {OS,PERIOD,PRODUCTS,EDITIONS} from "./const";

export function renewLicense(localServer, licenseID)
{
    let license = localServer.getLicense(licenseID);

    this.getDefaultChoice = function()
    {
        return {
            "period": PERIOD.ANNUAL,
            "services": [],
            "server": (localServer.edition == EDITIONS.STANDALONE)? PRODUCTS.STANDALONE : PRODUCTS.CLUSTER,
            "os": (localServer.os == OS.LINUX)? OS.LINUX: OS.WINDOWS,
            "minUsers": 5,
            "users": license.users,
            "addons": [PRODUCTS.SIP]
        };
    }

    this.getForbidden = function()
    {
        return {
            "period": [PERIOD.TRIAL],
            "os": [(localServer.os == OS.LINUX)? OS.WINDOWS : OS.LINUX],
            "server": [(localServer.edition == EDITIONS.STANDALONE)? PRODUCTS.CLUSTER: PRODUCTS.STANDALONE],
            "addons": [],
            "services": []
        }
    }
}
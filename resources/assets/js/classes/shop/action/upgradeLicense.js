import {OS,PERIOD,PRODUCTS, PRICES, COUNT_USERS, EDITIONS} from "./const";

export function upgradeLicense(localServer, licenseID)
{
    let year = 365;
    let license = localServer.getLicense(licenseID);

    let period = PERIOD.ANNUAL;
    let price = PRICES.ANNUAL;
    let days = 1;

    if(typeof license.validTill == 'undefined')
    {
        period = PERIOD.LIFETIME;
        price = PRICES.LIFETIME;
    }
    else
    {
        let date = new Date(license.validTill);
        let dateNow = new Date();

        days = Math.ceil((date.getTime() - dateNow.getTime()) / (1000 * 3600 * 24));
        if(days < 0) days = 1;
    }

    console.log(days);


    this.getUrl = function()
    {
        return '/shop/upgrade-license';
    }

    this.setDefaultChoice = function(context)
    {
        let product = (localServer.edition == EDITIONS.STANDALONE)? PRODUCTS.STANDALONE : PRODUCTS.CLUSTER;

        context.choice = {
            "period": period,
            "os": (localServer.os == OS.WINDOWS)? OS.WINDOWS: OS.LINUX ,
            "server": product,
            "price": price,
            "users": license.users,
            "minUsers": license.users,
            "maxUsers": (product == PRODUCTS.STANDALONE)? COUNT_USERS.MAX_USERS_STANDALONE : COUNT_USERS.MAX_USERS_CLUSTER
        }

        context.addToBasket(product);
        context.discount = 0;
    }

    this.setForbidden = function(context)
    {
        let  forbidden = {
            "period": [PERIOD.TRIAL, (period == PERIOD.LIFETIME)? PERIOD.ANNUAL:  PERIOD.LIFETIME],
            "os": [(localServer.os == OS.WINDOWS)? OS.LINUX : OS.WINDOWS],
            "products": [],
        }

        for(let i = 0; i< license.serverModules.length; i++)
        {
            forbidden.products.push(PRODUCTS[license.serverModules[i]]);
        }

        if(localServer.edition == EDITIONS.STANDALONE)
        {
            let ar = [PRODUCTS.CLASTER_WORKER,PRODUCTS.INSTALL_CLASTER, PRODUCTS.RECOVER_CLASTER, PRODUCTS.CLUSTER];
            for(let i = 0; i< ar.length; i++)
            {
                forbidden.products.push(ar[i]);
                context.removeFromBasket(ar[i]);
            }
        }
        else if(localServer.edition == EDITIONS.CLUSTER)
        {
            let ar = [PRODUCTS.INSTALL_STANDALONE, PRODUCTS.RECOVER_STANDALONE, PRODUCTS.STANDALONE];
            for(let i = 0; i< ar.length; i++)
            {
                forbidden.products.push(ar[i]);
                context.removeFromBasket(ar[i]);
            }
        }
        context.forbidden = forbidden;


    }

    this.setForLicense = function(context)
    {

    }

    this.sumOrder = function(context)
    {
        let sum = 0;
        let rate = context.getRate;
        for(let product of context.basket.values())
        {
            if(product.id == PRODUCTS.STANDALONE || product.id == PRODUCTS.CLUSTER)
            {
                let values =  product[context.choice.price + product.postfixForLicense];
                let price = 1;
                for(let i in  values)
                {
                    if(context.choice.users <= Math.abs(i))
                    {
                        price = Math.abs(values[i]);
                        break;
                    }
                }


                sum += Math.round(Math.round(price*(days/year), 2)*Math.abs(context.choice.users - license.users)/rate);
            }
            else {
                sum += Math.round(product[context.choice.price]/rate);
            }
        }

        context.sum = sum;
    }
}
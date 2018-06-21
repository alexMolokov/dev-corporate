import {OS,PERIOD,PRODUCTS, PRICES, COUNT_USERS, EDITIONS} from "./const";

export function renewLicense(localServer, licenseID)
{
    let license = localServer.getLicense(licenseID);

    this.setDefaultChoice = function(context)
    {
        let product = (localServer.edition == EDITIONS.STANDALONE)? PRODUCTS.STANDALONE : PRODUCTS.CLUSTER;
        let minUsers = (COUNT_USERS.MIN_USERS_STANDALONE < license.users)? COUNT_USERS.MIN_USERS_STANDALONE : license.users;
        if(product == PRODUCTS.CLUSTER)
        {
            minUsers = (COUNT_USERS.MIN_USERS_CLUSTER < license.users)? COUNT_USERS.MIN_USERS_STANDALONE : license.users;
        }

        context.choice = {
            "period": PERIOD.ANNUAL,
            "os": (localServer.os == OS.WINDOWS)? OS.WINDOWS: OS.LINUX ,
            "server": product,
            "price": PRICES.ANNUAL,
            "users": license.users,
            "minUsers": minUsers,
            "maxUsers": (product == PRODUCTS.STANDALONE)? COUNT_USERS.MAX_USERS_STANDALONE : COUNT_USERS.MAX_USERS_CLUSTER
        }
        context.addToBasket(product);

        for(let i = 0; i< license.serverModules.length; i++)
        {
            context.addToBasket(PRODUCTS[license.serverModules[i]]);
        }

        if(license.valid) context.discount =  context.getRenewDiscount;

    }

    this.setForbidden = function(context)
    {
        let data = {
            "period": [PERIOD.TRIAL],
            "os": [(localServer.os == OS.WINDOWS)? OS.LINUX : OS.WINDOWS],
            "products": [],
        }
        if(localServer.edition == EDITIONS.STANDALONE)
        {
            let ar = [PRODUCTS.CLASTER_WORKER,PRODUCTS.INSTALL_CLASTER, PRODUCTS.RECOVER_CLASTER];
            for(let i = 0; i< ar.length; i++)
            {
                data.products.push(ar[i]);
                context.removeFromBasket(ar[i]);
            }
        }
        else if(localServer.edition == EDITIONS.CLUSTER)
        {
            let ar = [PRODUCTS.INSTALL_STANDALONE, PRODUCTS.RECOVER_STANDALONE];
            for(let i = 0; i< ar.length; i++)
            {
                data.products.push(ar[i]);
                context.removeFromBasket(ar[i]);
            }
        }
        context.forbidden = data;
    }

    this.setForLicense = function(context)
    {

    }

    this.sumOrder = function(context)
    {
        let sum = 0;
        console.log(context);

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


                sum += Math.abs(context.choice.users)*price;
            }
            else {
                sum += product[context.choice.price];
            }
        }

        context.sum = sum*(1 - context.discount);
    }
}
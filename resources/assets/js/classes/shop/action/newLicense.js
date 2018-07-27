import {OS,PERIOD,PRODUCTS, PRICES, COUNT_USERS, EDITIONS} from "./const";

export function newLicense(localServer)
{
    let addSumServer = true;
    for(let i = 0; i< localServer.licenses.length; i++)
    {
        let license = localServer.licenses[i];
        let date = new Date(license.validTill);
        let dateFrom = new Date(license.validFrom);

        let days = Math.ceil((date.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24));

        if(days > 364)  addSumServer = false;
    }

    this.getUrl = function()
    {
        return '/shop/new-license';
    }


    this.setDefaultChoice = function(context)
    {
        let product = (localServer.edition == EDITIONS.STANDALONE)? PRODUCTS.STANDALONE : PRODUCTS.CLUSTER;
        context.choice = {
            "period": PERIOD.ANNUAL,
            "os": (localServer.os == OS.WINDOWS)? OS.WINDOWS: OS.LINUX ,
            "server": product,
            "price": PRICES.ANNUAL,
            "users": (product == PRODUCTS.STANDALONE)? COUNT_USERS.MIN_USERS_STANDALONE : COUNT_USERS.MIN_USERS_CLUSTER,
            "minUsers": (product == PRODUCTS.STANDALONE)? COUNT_USERS.MIN_USERS_STANDALONE : COUNT_USERS.MIN_USERS_CLUSTER,
            "maxUsers": (product == PRODUCTS.STANDALONE)? COUNT_USERS.MAX_USERS_STANDALONE : COUNT_USERS.MAX_USERS_CLUSTER
        }
        context.addToBasket(product);
        context.discount = 0;
    }

    /**
     *
     * @param page/Shop context
     */
    this.setForbidden = function(context)
    {
           let data = {
            "period": [PERIOD.TRIAL],
            "os": [(localServer.os == OS.WINDOWS)? OS.LINUX : OS.WINDOWS],
            "products": [],
        };
        if(localServer.edition == EDITIONS.STANDALONE)
        {
            let ar = [PRODUCTS.CLASTER_WORKER,PRODUCTS.INSTALL_CLASTER, PRODUCTS.RECOVER_CLASTER, PRODUCTS.CLUSTER];
            for(let i = 0; i< ar.length; i++)
            {
                data.products.push(ar[i]);
                context.removeFromBasket(ar[i]);
            }
        }
        else if(localServer.edition == EDITIONS.CLUSTER)
        {
            let ar = [PRODUCTS.INSTALL_STANDALONE, PRODUCTS.RECOVER_STANDALONE, PRODUCTS.STANDALONE];
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
            if(context.choice.server == PRODUCTS.STANDALONE)
            {
                context.choice.minUsers = COUNT_USERS.MIN_USERS_STANDALONE;
                context.choice.maxUsers = COUNT_USERS.MAX_USERS_STANDALONE;
                if(context.choice.users < COUNT_USERS.MIN_USERS_STANDALONE) context.choice.users = COUNT_USERS.MIN_USERS_STANDALONE ;
            }
            else
            {
                context.choice.minUsers = COUNT_USERS.MIN_USERS_CLUSTER;
                context.choice.maxUsers = COUNT_USERS.MAX_USERS_CLUSTER;
                if(context.choice.users < COUNT_USERS.MIN_USERS_CLUSTER) context.choice.users = COUNT_USERS.MIN_USERS_CLUSTER;
            }
    }


    this.sumOrder = function(context)
    {
        let sum = 0;
        for(let product of context.basket.values())
        {
            if(product.id == PRODUCTS.STANDALONE || product.id == PRODUCTS.CLUSTER && addSumServer)
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
        context.sum = sum;
    }


}
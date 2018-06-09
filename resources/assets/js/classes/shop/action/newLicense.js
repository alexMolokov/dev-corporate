import {OS,PERIOD,PRODUCTS, PRICES, COUNT_USERS, EDITIONS} from "./const";

export function newLicense(localServer)
{

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
        context.addToBasket(product)
    }

    /**
     *
     * @param page/Shop context
     */
    this.setForbidden = function(context)
    {
           context.forbidden = {
            "period": [PERIOD.TRIAL],
            "os": [(localServer.os == OS.WINDOWS)? OS.LINUX : OS.WINDOWS],
            "products": [(localServer.edition == EDITIONS.STANDALONE)? PRODUCTS.CLUSTER: PRODUCTS.STANDALONE],
        }
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
        context.sum = sum;
    }


}
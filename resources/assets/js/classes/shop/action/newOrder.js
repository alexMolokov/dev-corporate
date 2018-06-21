import {OS,PERIOD,PRODUCTS, PRICES, COUNT_USERS} from "./const";

export function newOrder()
{
    /**
     *
     * @param page/Shop context
     * @returns {{period: string, os: string, server: number, addons: [null], services: Array, users: number, minUsers: number}}
     */
    this.setDefaultChoice = function(context)
    {
        context.choice = {
            "period": PERIOD.ANNUAL,
            "os": OS.LINUX,
            "server": PRODUCTS.STANDALONE,
            "price": PRICES.ANNUAL,
            "users": COUNT_USERS.MIN_USERS_STANDALONE,
            "minUsers": COUNT_USERS.MIN_USERS_STANDALONE,
            "maxUsers": COUNT_USERS.MAX_USERS_STANDALONE
        }
        context.addToBasket(PRODUCTS.STANDALONE)
        context.addToBasket(PRODUCTS.SIP)
        context.discount = 0;
    }

    /**
     *
     * @param page/Shop context
     */
    this.setForbidden = function(context)
    {
        context.forbidden = {
            "period": [],
            "os": [],
            "products": [],
        }
        setForbiddenForServer(context);
    }

    var setForbiddenForServer = function(context){
        if(context.choice.server == PRODUCTS.STANDALONE)
        {
            let ar = [PRODUCTS.CLASTER_WORKER,PRODUCTS.INSTALL_CLASTER, PRODUCTS.RECOVER_CLASTER];
            for(let i = 0; i< ar.length; i++){
                context.removeFromBasket(ar[i])
                context.forbidden.products.push(ar[i]);

            }
        }
        else
        {
            let ar = [PRODUCTS.INSTALL_STANDALONE, PRODUCTS.RECOVER_STANDALONE];
            for(let i = 0; i< ar.length; i++){
                context.removeFromBasket(ar[i])
                context.forbidden.products.push(ar[i]);

            }
        }

        
    }

    this.setForLicense = function(context)
    {
            if(context.choice.price == PRICES.TRIAL)
            {
                for(let key in PRODUCTS)
                {
                    if(key != "STANDALONE" && key != "SIP")
                    {
                        context.forbidden.products.push(PRODUCTS[key]);
                        context.removeFromBasket(PRODUCTS[key])
                    } else {
                        context.addToBasket(PRODUCTS[key]);
                        context.choice.server = PRODUCTS.STANDALONE;
                    }
                }
                context.choice.minUsers = COUNT_USERS.MIN_USERS_TRIAL;
                context.choice.maxUsers = COUNT_USERS.MIN_USERS_TRIAL;
                context.choice.users = COUNT_USERS.MIN_USERS_TRIAL;

            } else {

                context.forbidden.products = [];

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
                setForbiddenForServer(context);
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


               sum += product[context.choice.price] + Math.abs(context.choice.users)*price;
            }
            else {
                sum += product[context.choice.price];
            }
        }
        context.sum = sum;

    }
}
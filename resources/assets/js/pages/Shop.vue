<template>
    <div id="user-order-page">
        <div v-if="products.length > 0">

        <div v-if="makeDeal == 'new'">
                <h2 class="blue" v-translate>New Order</h2>
                <span class="license-number blue"><span v-translate>Select products to purchase</span></span>
        </div>

            <div v-if="makeDeal == 'upgrade'">
            <h2 class="blue" v-translate>Upgrade license</h2>
            <span class="license-number blue"><span v-translate>Select options to upgrade for license</span> {{license}}</span>
        </div>


        <div v-if="makeDeal == 'renew'">
            <h2 class="blue" v-translate>Renew license</h2>
            <span class="license-number blue"><span v-translate>Select new maintenance period for license</span> {{license}}</span>
        </div>



        <h3>1. <span v-translate>Maintenance period</span></h3>
        <section id="periods">
            <div v-for="item in getPeriods" :class="{ disabled: isDisabledPeriod(item.id) }">
                <input type="radio" name="period" :value="item.id" :disabled="isDisabledPeriod(item.id)" :id="'period_' + item.id" :checked="choice.period == item.id" @click="setPeriod(item.id)">
                <label :for="'period_' + item.id">{{item.name}}</label>
            </div>
        </section>
        <h3>2. <span v-translate>Choose your deployment</span></h3>
        <section id="servers">
            <div v-for="item in getServers" :class="{ disabled: isDisabledProduct(item.id) }">
                <input type="radio" name="deployment" :value="item.id" :disabled="isDisabledProduct(item.id)" :id="'deployment_' + item.id" :checked="choice.server == item.id" @click="setServer(item.id)">
                <label :for="'deployment_' + item.id">{{item.name}}</label>
            </div>
        </section>
        <h3>3. <span v-translate>Choose Operational system</span></h3>
        <section id="os">
            <div v-for="item in getOs" :class="{ disabled: isDisabledOs(item.id) }">
                <input type="radio" name="os" :value="item.id"  :id="'os_' + item.id" :disabled="isDisabledOs(item.id)" :checked="choice.os == item.id" @click="setRadio({'id':'os','value': item.id})">
                <label :for="'os_' + item.id">{{item.name}}</label>
            </div>
        </section>
        <h3>4. <span v-translate>User tier</span></h3>
        <section id="users">
            <div class="number">
                <div class="field-number">
                    <div class="minus" @click="addUser(-1)" :class="{ disabled: this.choice.users == this.choice.minUsers ||  isDisabledUsers()}"></div>
                    <input  name="users" type="text"  :disabled="isDisabledUsers()" v-model="choice.users"  @keyup="checkCountUsers" v-validate="'required|numeric'" :class="{error: errors.has('users')}">
                    <div class="add" @click="addUser(1)"  :class="{ disabled: this.choice.users == this.choice.maxUsers ||  isDisabledUsers()}"></div>
                </div>
                <p  class="min"><span v-translate>minimum</span> {{choice.minUsers}} <span v-translate>users</span></p>
            </div>
        </section>

        <h3>5. <span v-translate>Choose optional addons</span></h3>
        <section id="addons">
            <div class="table">
                <div v-for="item in getAddons" :class="{ disabled: isDisabledProduct(item.id) }">
                    <span>
                    <input type="checkbox" :disabled="isDisabledProduct(item.id)" name="addons" :id="'addons_' + item.id" @click="addCheckbox($event)" :value="item.id" :checked="inBasket(item.id)"> <label :for="'addons_' + item.id">{{item.name}}</label>
                    </span>
                    <span class="price"><span v-if="item[choice.price] > 0"><sup v-html="getShortCurrencySymbol"></sup>{{getPrice(item[choice.price])}}</span></span>
                </div>
            </div>
        </section>

        <h3>6. <span v-translate>Choose optional services</span></h3>
        <section id="services">
            <div class="table">
                <div v-for="item in getServices" :class="{ disabled: isDisabledProduct(item.id) }">
                    <span>
                    <input type="checkbox"  :disabled="isDisabledProduct(item.id)" name="addons" :id="'service_' + item.id" @click="addCheckbox($event)" :value="item.id" :checked="inBasket(item.id)"> <label :for="'service_' + item.id">{{item.name}}</label>
                    </span>
                    <span class="price"><span v-if="item[choice.price] > 0"><sup v-html="getShortCurrencySymbol"></sup>{{getPrice(item[choice.price])}}</span></span>

                </div>
            </div>
        </section>

        <hr>
        <div  class="shop-footer">
            <div class="hidden-xs col-sm-6" style="text-align: left"><a href="#" class="btn btn-middle btn-green" @click.prevent.stop="back" v-translate>Back</a></div>
            <div v-if="choice.price == PRICES.TRIAL" class="col-xs-12 col-sm-6">
              <a href="#"  class="btn btn-middle btn-blue" @click.prevent.stop="showFormGetTrial = true" v-translate>Next</a>
            </div>

            <div v-if="choice.price != PRICES.TRIAL" class="col-xs-12 col-sm-6">
                <a href="#"  class="btn btn-middle btn-blue" @click.prevent.stop="choosePayment" v-translate v-if="sum > 0">Check out</a>
                <div class="subtotal">
                    <h3><span v-translate>Subtotal</span> ({{getCurrency}})</h3>
                    <h3 v-if="discount > 0"><span v-translate>Discount</span>: {{discount*100}}%</h3>
                    <div class="price"><sup v-html="getShortCurrencySymbol"></sup>{{sum}}</div>
                </div>
            </div>
        </div>
        <form-payment v-if="showFormPayment"  @close="showFormPayment = false" :purchase="purchase" @billingdetails="showFormChangeDetails = false; showFormChangeDetails = true;"></form-payment>
        <form-get-trial v-if="showFormGetTrial"  @close="showFormGetTrial = false" :choice="choice" :basket="basket"></form-get-trial>
        <form-change-details  v-if="showFormChangeDetails" @close="showFormChangeDetails = false"></form-change-details>


    </div>
    <div v-if="products.length == 0">
        <loading-page v-if="loadingConfig"></loading-page>
        <error-inform :err="err" :state="stateLoading"></error-inform>
    </div>
    </div>

</template>

<script>
    import LoadingPage from "../components/loadingPage";
    let userMenu = require('../components/userMenu.vue');
    const ajaxform = require('../mixins/ajax-form.vue');
    import { mapState, mapMutations, mapGetters  } from 'vuex';

    const ORDER_STATES = {"NEW_ORDER": "new", "NEW_LICENSE": "new-license",  "RENEW_LICENSE": "renew", "UPGRADE_LICENSE": "upgrade"};

    import {newOrder} from "../classes/shop/action/newOrder";
    import {newLicense} from "../classes/shop/action/newLicense";
    import {renewLicense} from "../classes/shop/action/renewLicense";
    import {upgradeLicense} from "../classes/shop/action/upgradeLicense";
    import {OS,PERIOD,PRODUCTS,PRICES, COUNT_USERS} from "../classes/shop/action/const";
    const loadingPage = require('../components/loadingPage.vue');

    const formPayment = () => System.import('../components/formPayment.vue');
    const formGetTrial = () => System.import('../components/formGetTrial.vue');
    const formChangeCompanyDetails = () => System.import('../components/formChangeDetails.vue');

    import {STATES} from "../mixins/states";
    import ErrorInform from "../mixins/error-inform.vue";


    export default {
        name: 'order',
        props: {
            makeDeal: {type: String},
            server: {type: String, default: ""},
            license: {type: String, default: ""}
        },
        data(){
            return {
                err: {validation:[], common: []},
                stateLoading: STATES.START,
                showFormPayment: false,
                showFormGetTrial: false,
                showFormChangeDetails:false,
                choice: {
                    "period": PERIOD.ANNUAL,
                    "os": OS.WINDOWS,
                    "price": PRICES.ANNUAL,
                    "server": PRODUCTS.STANDALONE,
                    "users": COUNT_USERS.MIN_USERS_STANDALONE,
                    "minUsers": COUNT_USERS.MIN_USERS_STANDALONE,
                    "maxUsers": COUNT_USERS.MAX_USERS_STANDALONE
                },
                forbidden: {
                    "period": [],
                    "os": [],
                    "products": [],
                    "users": false
                },
                basket: new Map(),
                state: null,
                PRICES: PRICES,
                sum: "",
                discount: 0,
                purchase: {}
            }
        },
        components: {
            ErrorInform,
            LoadingPage,
            "user-menu": userMenu,
            "form-payment": formPayment,
            "form-get-trial": formGetTrial,
            "form-change-details":formChangeCompanyDetails
        },
        computed: {
            ...mapState("shop",["products","productsMap"]),
            ...mapState("servers",["serversMap"]),
            ...mapGetters("shop",["getServers", "getServices", "getAddons", "getOs", "getPeriods", "getRenewDiscount", "getCurrency", "getShortCurrencySymbol", "getRate"]),
            loadingConfig(){
                return this.stateLoading != STATES.ERROR
            }
        },
        created()
        {
            this.state = this.factoryState();

            if(this.products.length == 0)
            {
                this.uploadInfo("/shop/get-product-list", {}, (data) => {

                    for(let productId in data.products)
                    {
                        this.addProduct({"id": productId, ...data.products[productId]});
                    }

                    for(let period in data.periods)
                    {
                        this.addPeriod({"id": period, ...data.periods[period]});
                    }

                    for(let os in data.os)
                    {
                        this.addOs({"id": os, ...data.os[os]});
                    }

                    for(let rate in data.exchangeRate)
                    {
                        this.addRate({"id": rate, "value": data.exchangeRate[rate]});
                    }

                    this.setCurrency(data.currency);
                    this.setDiscount(data.renewDiscount);
                    this.state.setDefaultChoice(this);
                    this.state.setForbidden(this);
                    this.state.sumOrder(this);
                },  {}, (data) => {
                   this.stateLoading =  STATES.ERROR;
                   this.err.common.push(data);
                });
            }
            else
            {
                this.state.setDefaultChoice(this);
                this.state.setForbidden(this);
            }

            document.body.scrollTop = document.documentElement.scrollTop = 0;

        },
        mixins: [ajaxform],

        methods: {
            ...mapMutations("shop", ["addProduct", "addPeriod", "addOs", "setCurrency", "setDiscount", "addRate"]),
            getPrice(price){
              return Math.round(price/this.getRate,0);
            },
            factoryState: function()
            {
                if(this.makeDeal == ORDER_STATES.NEW_ORDER)
                {
                    return new newOrder(this.serversMap);
                }
                else
                if(this.makeDeal == ORDER_STATES.NEW_LICENSE)
                {
                    return new newLicense(this.serversMap.get(this.server));
                }
                else
                if(this.makeDeal == ORDER_STATES.RENEW_LICENSE)
                {
                    return new renewLicense(this.serversMap.get(this.server), this.license);
                }
                if(this.makeDeal == ORDER_STATES.UPGRADE_LICENSE)
                {
                          return new upgradeLicense(this.serversMap.get(this.server), this.license);
                }
            },
            setServer: function(server)
            {
                this.choice.server = server;

                let deleteServer = (server == PRODUCTS.CLUSTER)? PRODUCTS.STANDALONE : PRODUCTS.CLUSTER;
                this.removeFromBasket(deleteServer);
                this.addToBasket(server);
                this.state.setForLicense(this);
                this.state.sumOrder(this);

            },
            setRadio: function (choice)
            {
                this.choice[choice.id] = choice.value;
            },
            addToBasket: function(key)
            {
                this.basket.set(key, this.productsMap.get(key));
                this.state.sumOrder(this);
            },
            removeFromBasket: function(key)
            {
                this.basket.delete(key);
                this.state.sumOrder(this);
            },
            inBasket: function(key)
            {
                return typeof this.basket.get(key) != "undefined";
            },
            isDisabledProduct: function(key)
            {
                return  this.forbidden.products.indexOf(key) != -1;
            },
            isDisabledOs: function(key)
            {
                return  this.forbidden.os.indexOf(key) != -1;
            },
            isDisabledPeriod: function(key)
            {
                return  this.forbidden.period.indexOf(key) != -1;
            },
            isDisabledUsers: function(key)
            {
                return  this.forbidden.users;
            },

            addCheckbox(e)
            {
                if (e.target.checked)
                {
                    this.addToBasket(e.target.value);
                } else {
                    this.removeFromBasket(e.target.value);
                }
            },
            addUser(count){
              if(this.isDisabledUsers()) return;
              if(this.choice.users + count >= this.choice.minUsers && this.choice.users + count < this.choice.maxUsers)  this.choice.users = this.choice.users + count;
                this.state.sumOrder(this);
            },

            setPeriod(period)
            {
              this.choice.period = period;
              this.choice.price = PRICES[period.toUpperCase()];
              this.state.setForLicense(this);
              this.state.sumOrder(this);
            },
            back: function(){
              this.$router.back();
            },
            checkCountUsers: function()
            {
                let users =  Math.abs(this.choice.users);
                if(users < this.choice.minUsers || isNaN(users) || this.choice.users < 0)
                {
                    this.choice.users = this.choice.minUsers;
                }
                else
                {
                    if(users > this.choice.maxUsers) this.choice.users = this.choice.maxUsers;
                    this.choice.users = Math.abs(this.choice.users);
                }
                this.state.sumOrder(this);
             },
            choosePayment: function()
            {
                this.purchase = {
                    "server_id": this.server,
                    "license_id": this.license,
                    "period": this.choice.period,
                    "os": this.choice.os,
                    "users": this.choice.users,
                    "basket": [],
                    'url': this.state.getUrl()
                };

                let ar = [];
                for(let key of this.basket.keys()) {
                    ar.push(key)
                }
                this.purchase.basket = ar;
                this.showFormPayment = true;

            }

        },

        locales: {
            ru: {
                'New Order': 'Новый заказ',
                'Select products to purchase': 'выберите продукты для покупки',
                'Maintenance period': 'Период обслуживания',
                'Choose your deployment': 'Выберите вариант развертывания',
                'Choose Operational system': 'Выберите операционную систему',
                'User tier':'Количество пользователей',
                'Choose optional addons':'Выберите дополнительные модули',
                'Choose optional services':'Выберите дополнительные услуги',
                'minimum': 'минимум',
                'users': 'пользователей',
                'Upgrade license': 'Обновление лицензии',
                'Select options to upgrade for license' : 'выберите новые опции для лицензии',
                'Renew license': 'Продление лицензии',
                'Select new maintenance period for license' : 'выберите новый период обслуживания для лицензии',
                'Check out': 'Оплатить',
                'Back': 'Назад',
                'Next' : 'Далее',
                'Discount': 'Скидка',
                'Subtotal': 'Итого'
            }
        }

    }
</script>

<style scoped lang="scss">

    h2 {
        .license-number {
            font-size: 14px;
        }
    }


    h3 {
        font-size: 21px;
        margin-top: 30px;
    }

    #user-order-page {

        .disabled {
            background-color: #f5f5f5;
            opacity: 0.5;
        }
        hr {margin: 40px 0;}

        > h3:first-child {
            margin-top: 10px;
        }

        .shop-footer {
            text-align: right;

            .price {
                color: #67ab49;
                font-size: 30px;
                font-weight: bold;
                display: inline-block;

                sup {
                    font-size: .5em;
                    vertical-align: baseline;
                    position: relative;
                    top: -.6666667em;
                }
            }

        }


    }

    #users {
        .field-number {
            width: 182px;
            margin-top: 20px;
            display: block;

            >* {
                display: inline;
                float: left;
            }

            .minus {
                padding: 0px 9px 1px;
                border-right: 0;
                border-radius: 3px 0 0 3px;
                border: 1px solid #e8e8e8;
                font-size: 26px;
                font-weight: 700;
                color: #00a0c8;

                &:after {
                    content: "—";
                }
            }

            .add {
                padding: 0px 12px 1px 11px;
                border-left: 0;
                border-radius: 0 3px 3px 0;
                border: 1px solid #e8e8e8;
                font-size: 26px;
                font-weight: 700;
                color: #00a0c8;

                &:after {
                    content: "+";
                }
            }

            input {
                width: 100px;
                height: 40px;
                color: #000;
                text-align: center;
                border: 1px solid #e8e8e8;
                font-size: 18px;
                font-weight: 700;
            }


        }
        .number .min {
            clear: both;
            font-size: 14px;
            color: #888;
            padding-top: 7px;
            margin-bottom: 4px;
        }
    }

    #os, #servers, #periods, #services {

        >div {
            padding: 4px;
        }
        input[type="radio"] {
            margin-right:3px;
        }
    }

    #addons, #os, #servers, #periods, #services {
        label {
            font-size: 18px;
            color: #666;
            font-weight: 400;
        }

        .table {
            display: table;

            >div:not(:first-child) {
                border-top: none;
            }

            >div {
                /*display: table-row;*/
                border: 1px solid #ccc;
                padding: 10px;
                &:hover {
                    background-color: #f5f5f5;
                }
                input[type="checkbox"] {
                    margin-right: 3px;
                }

                > span:first-child {
                    width: 85%;
                    @media (max-width: 767px)
                    {
                        width: 78%;
                    }
                    display: inline-block;

                }
                > span:last-child {
                    width: 13%;
                    @media (max-width: 767px)
                    {
                        width: 20%;
                    }
                    display: inline-block;
                    text-align: right;
                    padding-right: 10px;
                }

            }

            .price {
                color: #67ab49;
                font-size: 22px;
                font-weight: bold;
                display: inline-block;
            }

        }
    }

</style>

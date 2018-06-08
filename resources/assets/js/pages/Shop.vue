<template>
    <div id="user-order-page">
        <h3>1. <span v-translate>Maintenance period</span> {{makeDeal}} {{server}} {{license}}</h3>
        <section id="periods">
            <div v-for="item in getPeriods">
                <input type="radio" name="period" :value="item.id"  :id="'period_' + item.id" :checked="choice.period == item.id" @click="setMaintenance(item.id)">
                <label :for="'period_' + item.id">{{item.name}}</label>
            </div>
        </section>
        <h3>2. <span v-translate>Choose your deployment</span></h3>
        <section id="servers">
            <div v-for="item in getServers">
                <input type="radio" name="deployment" :value="item.id"  :id="'deployment_' + item.id" :checked="choice.server == item.id" @click="setRadio({'id':'server','value': item.id})">
                <label :for="'deployment_' + item.id">{{item.name}}</label>
            </div>
        </section>
        <h3>3. <span v-translate>Choose Operational system</span></h3>
        <section id="os">
            <div v-for="item in getOs">
                <input type="radio" name="os" :value="item.id"  :id="'os_' + item.id" :checked="choice.os == item.id" @click="setRadio({'id':'os','value': item.id})">
                <label :for="'os_' + item.id">{{item.name}}</label>
            </div>
        </section>
        <h3>4. <span v-translate>User tier</span></h3>
        <section id="users">
            <div class="number">
                <div class="field-number">
                    <div class="minus"></div>
                    <input  name="user_number" type="text" value="5"  aria-required="true" aria-invalid="false">
                    <div class="add"></div>
                </div>
                <p  class="min"><span data-v-53491cc2="">minimum</span> 5 <span>users</span></p>
            </div>
        </section>

        <h3>5. <span v-translate>Choose optional addons</span></h3>
        <section id="addons">
            <div class="table">
                <div v-for="item in getAddons">
                    <span>
                    <input type="checkbox" name="addons" :id="'addons_' + item.id" @click="addCheckbox($event)" :value="item.id"> <label :for="'addons_' + item.id">{{item.name}}</label>
                    </span>
                    <span class="price"><span v-if="item[choice.price] > 0"><sup>$</sup>{{item[choice.price]}}</span></span>
                </div>
            </div>
        </section>

        <h3>6. <span v-translate>Choose optional services</span></h3>
        <section id="services">
            <div class="table">
                <div v-for="item in getServices">
                    <span>
                    <input type="checkbox" name="addons" :id="'service_' + item.id" @click="addCheckbox($event)" :value="item.id"> <label :for="'service_' + item.id">{{item.name}}</label>
                    </span>
                    <span class="price"><span v-if="item[choice.price] > 0"><sup>$</sup>{{item[choice.price]}}</span></span>

                </div>
            </div>
        </section>

        <hr>
        <div  class="shop-footer">
            <a href="#"  class="btn btn-middle btn-blue" @click.prevent.stop="checkout" v-translate>Check out</a>
            <a href="#"  class="btn btn-middle btn-blue" @click.prevent.stop="trial" v-translate>Next</a>

            <div class="subtotal">
                <h3 v-translate>Subtotal (USD)</h3>
                <div class="price"><sup>$</sup>100</div>
            </div>
        </div>
    </div>

</template>

<script>
    let userMenu = require('../components/userMenu.vue');
    const ajaxform = require('../mixins/ajax-form.vue');
    import { mapState, mapMutations, mapGetters  } from 'vuex';

    export default {
        name: 'order',
        props: {
            makeDeal: {type: String},
            server: {type: String, default: ""},
            license: {type: String, default: ""}
        },
        components: {
            "user-menu": userMenu
        },
        computed: {
            ...mapState("shop",["products", "choice"]),
            ... mapGetters("shop",["getServers", "getServices", "getAddons", "getOs", "getPeriods"])
        },
        created()
        {
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

                    this.setCurrency(data.currency);

                });
            }
        },
        mixins: [ajaxform],
        data(){
            return {

            }
        },

        methods: {
            ...mapMutations("shop", ["addProduct", "addPeriod", "addOs", "setCurrency", "setRadio", "setPriceType", "addToBasket", "removeFromBasket"]),
            addCheckbox(e)
            {
                if (e.target.checked)
                {
                    this.addToBasket(e.target.value);
                } else {
                    this.removeFromBasket(e.target.value);
                }
            },
            checkout()
            {
                alert("checkout");
            },
            trial()
            {
                alert("trial");
            },
            setMaintenance(period)
            {
                this.setRadio({'id':'period','value': period});
                this.setPriceType(period);

            }
        },

        locales: {
            ru: {



            }
        }

    }
</script>

<style scoped lang="scss">
    h3 {
        font-size: 21px;
        margin-top: 30px;
    }

    #user-order-page {

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

                span:first-child {
                    width: 78%;
                    display: inline-block;

                }
                span:last-child {
                    width: 20%;
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

"use strict";
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./vlib.site.min');

import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate, { Validator } from 'vee-validate';
import VueTranslate from 'vue-translate-plugin';
import Vuex from 'vuex'
import {User} from './classes/User';

import TicketModule from './modules/tickets';
import ShopModule from './modules/shop';
import ServersModule from './modules/servers';
import SupportModule from './modules/support';

const dictionary = {
    en: {
        messages: {
            required: () => 'Is required',
            email: () => 'Not valid email',
            url: () => 'Not valid url',
            decimal: () => 'Not valid',
            numeric: () => 'Not valid',
            min_value: () => 'Not valid',
            min: () => 'Not valid',
            password:  () => 'Not valid',
            login: () => 'Not valid',
            is: () => 'Not valid',
            regex: () => 'Not valid'
        }
    },
    ru: {
        messages: {
            required: () => 'Обязательное поле',
            email: () => 'Некорректный адрес',
            decimal: () => 'Некорректное значение',
            numeric: () => 'Некорректное значение',
            min_value: () => 'Некорректное значение',
            min: () => 'Некорректное значение',
            url: () => 'Некорректное значение',
            password: () => 'Некорректное значение',
            login: () => 'Некорректное значение',
            is: () => 'Некорректное значение',
            regex: () => 'Некорректное значение'
        }
    }
};


Vue.use(Vuex)
Vue.use(VueRouter);
Vue.use(VeeValidate, {fieldsBagName: 'formFields'});
Vue.use(VueTranslate);

const store = new Vuex.Store({
    state: {
        auth: false,
        lang: "en",
        registrationAllowed: false,
        user: {
            id: "",
            login: "",
            name: "",
            primary: {
                email: "",
                firstName: "",
                lastName: "",
                jobTitle: ""
            },
            billing: {
                    address: "",
                    zip: "",
                    country: "",
                    state: "",
                    city: "",
                    phone: "",
                    email: ""
            },
            tech: {
                firstName:"",
                lastName: "",
                jobTitle: "",
                email: ""
            }
        }
    },
    getters: {
        isAuth: state => {
            return state.auth;
        },
        getLogin: state => {
            return state.user.login;
        },
        getLang: state => {
            return state.lang;
        },
        isRegisterAllowed: state => {
            return state.registrationAllowed;
        },
        getAddress: state => {
            let ar = [];
            let billing = state.user.billing;
            let fields = ["address", "city", "state", "country", "zip"];
            fields.forEach(function(element) {
                if(typeof billing[element] != "undefined" && billing[element].length > 0)
                {
                    ar.push(billing[element])
                }
            });


            return ar.join(', ');

        },
        isFillingBillingInfo: state =>
        {
            let billing = state.user.billing;
            return billing.address != '' && billing.zip != '' && billing.country != '' && billing.city != '' && billing.phone != '' && billing.email != ''
        }

    },
    mutations: {
        setRegistrationAllowed(state, value)
        {
            state.registrationAllowed = value;
        },

        setLang(state, obj)
        {
            obj.translate.setLang(obj.lang);
            state.lang = obj.lang;
            Validator.localize(obj.lang,dictionary[obj.lang]);
        },
        setDetails(state, obj)
        {
            let billing = state.user.billing;
            billing.address = obj.address;
            billing.city = obj.city;
            billing.country = obj.country;
            billing.zip = obj.zip;
            billing.email = obj.email;
            billing.phone = obj.phone;
        },
        setContact(state, obj)
        {
            let contact = (obj.type == 'tech')? state.user.tech : state.user.primary;

            contact.email = obj.email;
            contact.firstName = obj.firstName;
            contact.lastName = obj.lastName;
            contact.jobTitle = obj.jobTitle;

        },
        setCompanyName(state, obj)
        {
            state.user.name = obj.name;
        },
        logout(state)
        {
            for (let prop in state.user)
            {
                if(typeof state.user[prop] == "string")
                {
                    state.user[prop] = "";
                }
                else if(typeof state.user[prop] == "object")
                {
                    for (let propObject in state.user[prop])
                    {
                        state.user[prop][propObject] = "";
                    }
                }
            }

            store.commit("servers/logout");


            //cleanServers
            state.auth = false;
            router.push({name: 'login'});
        },
        login(state, user)
        {
            state.user = user;
            state.auth = true;
            router.push({name: 'userpage'});
        },
        activate(state,user)
        {
            state.user = user;
            state.auth = true;
        }
    },
    modules: {
        shop: ShopModule,
        servers: ServersModule,
        support: SupportModule,
        ticket: TicketModule
    }
});

import App from './components/app'


const routes = [
    { path: '/',
        component: (resolve) => { require(['./pages/Login'], resolve) },
        name: "login",
        meta: {requiresNoAuth: true},
    },
    { path: '/registration',
        component: (resolve) => { require(['./pages/Registration'], resolve) },
        name: "registration",
        meta: {requiresNoAuth: true}
    },
    { path: '/registration/change/password/:code',
        component: (resolve) => { require(['./pages/ChangeForgotPassword'], resolve) },
        name: "changeForgotPassword",
        meta: {requiresNoAuth: true}
    },
    { path: '/registration/activate/:code',
        component: (resolve) => { require(['./pages/ActivateRegister'], resolve) },
        name: "registrationActivate",
        meta: {requiresNoAuth: true}
    },

    { path: '/user',
        component: (resolve) => { require(['./pages/UserStart'], resolve)},
        meta: {requiresAuth: true},
        children: [
            { path: '',
                component: (resolve) => { require(['./pages/User'], resolve)},
                name:"userpage",
                meta: {requiresAuth: true}
            },
            { path: 'documents',
                component: (resolve) => { require(['./pages/Documents'], resolve)},
                name: "documents"
            },
            { path: 'support/:edition/:os',
                component: (resolve) => { require(['./pages/Support'], resolve)},
                name: "supportHtml"
            },
            { path: 'tickets',
                component: (resolve) => { require(['./pages/Tickets'], resolve)},
                name: "tickets"
            },
            { path: 'ticket/:ticketNumber',
                component: (resolve) => { require(['./pages/Ticket'], resolve)},
                props: true,
                name: "ticket",
            },
            { path: 'shop/:makeDeal/:server?/:license?',
                component: (resolve) => { require(['./pages/Shop'], resolve)},
                props: true,
                name: "shop"
            },

            { path: 'download',
                component: (resolve) => { require(['./pages/Download'], resolve)},
                name: "download"
            },
            { path: 'payments',
                component: (resolve) => { require(['./pages/Payments'], resolve)},
                name: "payments"
            },
            { path: 'unpaid/invoices',
                component: (resolve) => { require(['./pages/UnpaidInvoices'], resolve)},
                name: "unpaid_invoices"
            },
        ]
    },
    { path: '/forgot',
        component: (resolve) => { require(['./pages/ForgotPassword'], resolve)},
        name: "forgot"
    },

]

export const router = new VueRouter({
    routes: routes
})

router.beforeEach((to, from, next) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    const auth = router.app.$options.store.state.auth;

    if (to.matched.some(record => record.meta.requiresAuth))
    {
        if(!auth)
        {
            next( {name: 'login'});
        }
    }

    if (to.matched.some(record => record.meta.requiresNoAuth))
    {
        if(auth)
        {
            next( {name: 'userpage'});
        }
    }

    next();
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example', require('./components/Example.vue'));


const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    beforeCreate(){
        let store = this.$store;

        window.axios.post("/registration/allowed", {}).then(function({data: response})
        {
            if(response.status)
            {
               store.commit("setRegistrationAllowed", response.data == true);
            }
        })
        window.axios.post("/auth/auto", {}).then(function({data: response})
        {
            if(response.status)
            {
                let user = new User(response.data);
                store.commit("login", user);
            }
        })
    },
    mounted(){
        let supportedLangs = ["en","ru"];
        let lang = navigator.language;

        if(supportedLangs.indexOf(lang) == -1) lang = "en";
        this.$store.commit("setLang", {"lang": lang, "translate": this.$translate});
    }

});

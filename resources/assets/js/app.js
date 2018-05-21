/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate, { Validator } from 'vee-validate';
import VueTranslate from 'vue-translate-plugin';
import Vuex from 'vuex'


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
        }
    }
};



Vue.use(VueRouter);
Vue.use(VeeValidate, {fieldsBagName: 'formFields'});
Vue.use(VueTranslate);
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        auth: false,
        lang: "en",
        user: {
            id: "123",
            login: "alex",
            password: "123",
            name: "Ivanov и К",
            primary: {
                email: "alex@yandex.ru",
                firstName: "Олег",
                lastName: "Болдырев",
                jobTitle: "Manager"
            },
            billing: {
                    address: "",
                    phone: "",
                    firstName:"",
                    lastName: "",
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

    },
    mutations: {
        setLang(state, obj)
        {
            obj.translate.setLang(obj.lang);
            state.lang = obj.lang;
            Validator.localize(obj.lang,dictionary[obj.lang]);
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
            state.auth = false;
        },
        login(state, user)
        {
            state.user = user;
            state.auth = true;
        }
    },
    actions: {
        logoutAsync(){
            window.axios.post('/auth/logout', {})
                .then((response) => {
                    store.commit('logout')
                    router.push({name: 'login'})
            })
        },
        loginAsync(commit){
            window.axios.post('/auth/login', commit)
                .then((response) => {
                    store.commit('login')
                    router.push({name: 'user'})
             })
        }
    }
});

import App from './components/app'


const routes = [
    { path: '/',
        component: (resolve) => { require(['./pages/Login'], resolve) },
        name: "login"
    },
    { path: '/registration',
        component: (resolve) => { require(['./pages/Registration'], resolve) },
        name: "registration"
    },
    { path: '/user',
        component: (resolve) => { require(['./pages/UserStart'], resolve)},
        name: "user",
        children: [
            { path: '',
                component: (resolve) => { require(['./pages/User'], resolve)},
                name:"userpage"
            },
            { path: 'documents',
                component: (resolve) => { require(['./pages/Documents'], resolve)},
                name: "documents"
            },
            { path: 'tickets',
                component: (resolve) => { require(['./pages/Tickets'], resolve)},
                name: "tickets"
            },
            { path: 'download',
                component: (resolve) => { require(['./pages/Download'], resolve)},
                name: "download"
            }
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
    mounted(){
        let supportedLangs = ["en","ru"];
        let lang = navigator.language;

        if(supportedLangs.indexOf(lang) == -1) lang = "en";
        this.$store.commit("setLang", {"lang": lang, "translate": this.$translate});

    }

});

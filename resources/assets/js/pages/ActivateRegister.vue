<template>

<div id="register-activate-page" class="login-page">
        <div class="container">
                <div v-if="checked && error" class="clearfix">
                        <div class="reg-header">
                                <h2 class="text-danger" v-translate>Error! Operation can not be completed now.</h2>
                                <p class="lead"><span v-translate>Please</span>, <router-link :to="{name: 'register'}" v-translate>try again</router-link> <span v-translate>later or contact VIPole support team</span>.</p>
                        </div>
                </div>
                <div v-if="checked && !error">
                        <div id="sign_in" class="clearfix">
                                <h1 class="header">Your Corporate VIPole account is successfully activated!</h1>
                                <div class="complete-body">
                                        <div id="login-outer">Your login (VIPole ID) - <span>{{$login}}</span></div>
                                        <div id="manage">To manage you account and connected services go to your <router-link :to="{name: 'login'}">Profile page</router-link>.</div>
                                </div>
                        </div>
                </div>
                <div v-if="!checked">
                    <loading-page></loading-page>
                </div>
        </div>
</div>
</template>

<script type="text/ecmascript-6">
    const loadingPage = require('../components/loadingPage.vue');
    const ErrorInform = require('../mixins/error-inform.vue');
    import {User} from '../classes/User';

    let ajaxform = require('../mixins/ajax-form.vue');
    import {mapState, mapMutations} from "vuex";

    export default {
        name: 'changeForgotPassword',
        created(){
            this.code = this.$route.params.code;
            let path =  '/registration/activate/' + this.code;
            this.uploadInfo(path, {}, (data) => {
                this.checked = true;
                this.error = false;
                this.login = data.login;
            }, {}, (data) => {
                this.checked = true;
                this.error = true;
            });
        },
        data(){
            return {
                code: "",
                checked: false,
                error: false,
                login: ""
            }
        },
        computed: {
            ...mapState(["lang"]),
        },
        mixins: [ajaxform],

        components: {
            "loading-page": loadingPage,
            "error-inform": ErrorInform,
        },
        methods: {
           togglePassword: function(type){
                if(type == 'type_input_new')
                {
                    this.type_input_new = (this.type_input_new == 'password')? 'text' : 'password';
                }
                else if(type == 'type_input_repeat')
                {
                    this.type_input_repeat = (this.type_input_repeat == 'password')? 'text' : 'password';
                }
            },
            validate: function()
            {
                let url = "/registration/change/password/" + this.code;
                let data = {"new_password": this.new_password, "check_password": this.check_password};


                this.send(url, data, (data) => {
                    this.changed = true;
                });
            }

        },
        locales: {
            ru: {
                'Set a new password': 'Задайте новый пароль',
                'New Password': 'Пароль',
                'Repeat new password': 'Повторить пароль',
                'Next': 'Далее',
                'Error! Operation can not be completed now.': 'Ошибка! Операция не может быть сейчас выполнена.',
                "Please": 'Пожалуйста',
                'try again': 'попробуйте',
                'later or contact VIPole support team': 'позже или свяжитесь со службой поддерки VIPole',
            }
        }

    }
</script>

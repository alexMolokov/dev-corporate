<template>

<div class="login-page">
        <div class="container">
                <div v-if="checked && error" class="clearfix">
                        <div class="reg-header">
                                <h2 class="text-danger" v-translate>Error! Operation can not be completed now.</h2>
                                <p class="lead"><span v-translate>Please</span>, <router-link :to="{name: 'register'}" v-translate>try again</router-link> <span v-translate>later or contact VIPole support team</span>.</p>
                        </div>
                </div>
                <div   v-if="checked && !error" class="clearfix">
                                <h2 class="text-primary" v-translate>Your Corporate VIPole account is successfully activated!</h2>
                                <p class="complete-body">
                                        <p class="lead"><span v-translate>Your login</span> - <strong>{{login}}</strong>.<br>
                                        <span v-translate>To manage you account and connected services go to your</span> <router-link :to="{name: 'login'}" v-translate>Profile page</router-link>.</p>
                                </div>
                 </div>

                <div v-if="!checked">
                    <loading-page>
                            <template slot="loading"><span v-translate>Please, wait until the activation process is complete...</span></template>
                  </loading-page>
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
        name: 'activateAccount',
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
                login: "",
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
            }
        },
        locales: {
            ru: {
                'Your Corporate VIPole account is successfully activated!': 'Ваш корпоративный аккаунт VIPole успешно активирован!',
                'Your login': 'Ваш логин',
                'To manage you account and connected services go to your': 'Управлять аккаунтом и подключенными сервисами вы можете в',
                'Profile page': 'Личном кабинете корпоративного пользователя',
                'Error! Operation can not be completed now.': 'Ошибка! Операция не может быть сейчас выполнена.',
                "Please": 'Пожалуйста',
                'try again': 'попробуйте',
                'later or contact VIPole support team': 'позже или свяжитесь со службой поддержки VIPole',
                'Please, wait until the activation process is complete...': 'Пожалуйста, подождите пока идет процесс активации'
            }
        }

    }
</script>

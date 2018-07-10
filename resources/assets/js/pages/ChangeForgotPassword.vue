<template>

<div id="forget-password-page" class="login-page">
        <div class="container">
                <div v-if="checked && error && !changed" class="clearfix">
                        <div class="reg-header">
                                <h2 class="text-danger" v-translate>Error! Operation can not be completed now.</h2>
                                <p class="lead"><span v-translate>Please</span>, <router-link :to="{name: 'forgot'}" v-translate>try again</router-link> <span v-translate>later or contact VIPole support team</span>.</p>
                        </div>
                </div>
                <div v-if="checked && !error && !changed">
                        <div id="sign_in" class="clearfix">
                                <div class="reg-header">
                                        <h2 class="text-primary" v-translate>Set a new password</h2>
                                </div>
                                <form  autocomplete="off" :url="url" @submit.prevent.stop>
                                        <div class="reg-body">
                                                <div class="form-group  top-10">
                                                        <label for="password" v-translate>New Password</label> <span v-show="errors.has('new_password')" class="help is-danger">*{{errors.first('new_password')}}</span>
                                                        <div class="input-group">
                                                                <input :type="type_input_new" v-model="new_password"  name="new_password" class="form-control input-alg" :class="{error: errors.has('new_password')}" v-validate="{ rules: { required:true,min:6}}">
                                                                <a href="#" class="input-group-addon" @click.prevent.stop="togglePassword('type_input_new')"><span class="glyphicon" aria-hidden="true" :class="{'glyphicon-eye-close': type_input_new == 'password', 'glyphicon-eye-open': type_input_new == 'text'}"></span></a>
                                                        </div>
                                                </div>

                                                <div class="form-group top-10">
                                                        <label for="check_password" v-translate>Repeat new password</label> <span v-show="errors.has('check_password')" class="help is-danger">*{{errors.first('check_password')}}</span>
                                                        <div class="input-group">
                                                                <input :type="type_input_repeat" v-model="check_password"  name="check_password" class="form-control input-alg" :class="{error: errors.has('check_password')}"  v-validate="{ rules: {required:true,min:6, is: new_password }}">
                                                                <a href="#" class="input-group-addon" @click.prevent.stop="togglePassword('type_input_repeat')"><span class="glyphicon" aria-hidden="true" :class="{'glyphicon-eye-close': type_input_repeat == 'password', 'glyphicon-eye-open': type_input_repeat == 'text'}"></span></a>
                                                        </div>
                                                </div>
                                        </div>

                                        <div class="reg-body">
                                                <div class="captcha-wrapper"></div>
                                                <error-inform :err="err" :state="state"></error-inform>
                                        </div>

                                        <div class="reg-left">
                                                <button type="submit" class="btn btn-primary btn-lg" @click="validate" v-translate>Next</button>
                                        </div>

                                </form>
                        </div>
                </div>
                <div v-if="!checked && !changed">
                    <loading-page></loading-page>
                </div>
                <div  v-if="changed">
                        <div class="reg-header">
                                <h2 class="text-primary"  v-translate>Password was successfully changed</h2>
                                <p class="lead"><span v-translate>You have reset you old password and set a new one</span>.<br>
                                        <span v-translate>Use new password to log in to</span> <router-link :to="{name: 'login'}" v-translate>Corporate User profile page</router-link>.</p>

                        </div>
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
            let path =  '/registration/check/' + this.code;
            this.uploadInfo(path, {}, (data) => {
                this.checked = true;
                this.error = false;
            }, {}, (data) => {
                this.checked = true;
                this.error = true;
            });
        },
        data(){
            return {
                code: "",
                checked: false,
                changed: false,
                error: false,
                type_input_new: "password",
                type_input_repeat: "password",
                new_password: '',
                check_password: ''
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
                'Password was successfully changed':'Пароль успешно изменен',
                'You have reset you old password and set a new one':'Вы успешно сбросили старый пароль и задали новый',
                'Use new password to log in to':'Используйте новый пароль для входа в',
                'Corporate User profile page':'Личный кабинет корпоративного пользователя',
            }
        }

    }
</script>

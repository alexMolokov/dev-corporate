<template>
    <div class="login-page">
        <div class="container">
            <div id="sign_in" class="clearfix">
                <div class="reg-header">
                    <h2 class="text-primary" v-translate>Login to your account</h2>

                </div>
                <form  autocomplete="off" :url="url" @submit.prevent.stop>
                    <div class="reg-body">
                        <div class="form-group">
                            <label for="login"  v-translate>Login</label> <span v-show="errors.has('login')" class="help is-danger">*{{errors.first('login')}}</span>
                            <input type="text"  id="login" name="login" placeholder="" v-model="login" class="form-control input-alg readonly" :class="{error: errors.has('login')}" v-validate="'required|min:6'">
                        </div>
                        <div class="form-group">
                            <label for="password"  v-translate>Password</label> <span v-show="errors.has('password')" class="help is-danger">*{{errors.first('password')}}</span>
                            <div class="input-group">
                                <input :type="type_password" id="password" name="password" v-model="password" class="form-control input-alg" :class="{error: errors.has('password')}" v-validate="'required|min:6'">
                                <a href="#" class="input-group-addon" @click.prevent.stop="togglePassword"><span class="glyphicon" :class="{'glyphicon-eye-close': type_password == 'password', 'glyphicon-eye-open': type_password != 'password'}" aria-hidden="true"></span></a>
                            </div>
                        </div>
                    </div>

                    <div class="reg-body">
                        <div class="captcha-wrapper"></div>
                        <error-inform :err="err" :state="state"></error-inform>
                    </div>

                    <div class="reg-left">
                        <button type="submit" class="btn btn-primary btn-lg" :class="{'submitting':submitting}" :disabled="submitting" @click="validate"  v-translate>Log In</button>
                    </div>
                    <div class="reg-right">
                        <p v-if="isRegisterAllowed"class="reg-choice"><router-link :to="{name:'forgot'}" tabindex="-1"  v-translate>Forgot password?</router-link></p>
                    </div>
                    <div class="reg-footer">
                        <p v-if="isRegisterAllowed" class="h4 text-center"><span v-translate>Don't have an account?</span> <router-link :to="{name:'registration'}" tabindex="-1"  v-translate>Sign In</router-link></p>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import ajaxform from '../mixins/ajax-form.vue';
    import {User} from '../classes/User';
    import ErrorInform  from '../mixins/error-inform.vue';
    import { mapMutations, mapGetters } from 'vuex'

    export default {
        components: {ErrorInform},
        name: 'login',
        data(){
            return {
                url: "/auth/login",
                login: null,
                password: null,
                submitting: false,
                type_password: "password"
            }
        },
        computed: {
            ...mapGetters(["isRegisterAllowed"])
        },
        mixins: [ajaxform],
        methods: {
            ...mapMutations({authLogin: 'login'}),
            togglePassword: function()
            {
                this.type_password = (this.type_password == 'password')? 'text' : 'password';
            },
            validate: function()
            {
                let data = {"login": this.login, "password": this.password};
                let authLogin = this.authLogin;
                this.submitting = true;
                this.send(this.url, data,
                    function(data) {
                        authLogin(new User(data));
                    },
                    (data) => {
                        this.submitting = false;
                    });


            }
        },
        locales: {
            ru: {
                'Login to your account': 'Войдите в ваш Личный кабинет',
                'Password': 'Пароль',
                'Login': 'Логин',
                'Log In': 'Войти',
                'Forgot password?': 'Забыли пароль?',
                "Don't have an account?": 'У вас нет аккаунта?',
                'Sign In': ' Зарегистрируйтесь'
            }
        }
    }
</script>

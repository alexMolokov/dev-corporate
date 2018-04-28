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
                            <label for="login">Login</label> <span v-show="errors.has('login')" class="help is-danger">*{{errors.first('login')}}</span>
                            <input type="text"  id="login" name="login" placeholder="" v-model="login" class="form-control input-alg readonly" :class="{error: errors.has('login')}" v-validate="'required|min_value:5'">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label> <span v-show="errors.has('password')" class="help is-danger">*{{errors.first('password')}}</span>
                            <div class="input-group">
                                <input :type="type_password" id="password" name="password" v-model="password" class="form-control input-alg" :class="{error: errors.has('password')}" v-validate="'required|min_value:5'">
                                <a href="#" class="input-group-addon" @click.prevent.stop="togglePassword"><span class="glyphicon" :class="{'glyphicon-eye-close': type_password == 'password', 'glyphicon-eye-open': type_password != 'password'}" aria-hidden="true"></span></a>
                            </div>
                        </div>
                    </div>

                    <div class="reg-body">
                        <div class="captcha-wrapper"></div>
                        <div class="alert-wrapper"></div>
                    </div>

                    <div class="reg-left">
                        <button type="submit" class="btn btn-primary btn-lg" @click="validate">Log In</button>
                    </div>
                    <div class="reg-right">
                        <p class="reg-choice"><router-link :to="{name:'forgot'}" tabindex="-1">Forgot password?</router-link></p>
                    </div>
                    <div class="reg-footer">
                        <p class="h4 text-center">Don't have an account? <router-link :to="{name:'registration'}" tabindex="-1">Sign In</router-link></p>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import ajaxform from '../mixins/ajax-form.vue';

    export default {
        name: 'login',
        data(){
            return {
                url: "/login",
                login: null,
                password: null,
                type_password: "password"
            }
        },
        mixins: [ajaxform],
        methods: {
            togglePassword: function()
            {
                this.type_password = (this.type_password == 'password')? 'text' : 'password';
            }
        },
        locales: {
            ru: {
                'Login to your account': 'МЕНЮ',
                'Your password has been changed.': 'Ваш пароль был изменен',
                'Current password': 'Текущий пароль',
                'New Password': 'Новый Пароль',
                'Repeat new password': 'Повторить новый пароль',
                'Password not valid': 'Неверный пароль',
                'Next': 'Далее'
            }
        }
    }
</script>

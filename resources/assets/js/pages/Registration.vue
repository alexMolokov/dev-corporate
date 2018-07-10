<template>
    <div class="login-page">
        <div class="container">
            <div v-if="!registered" id="sign_in" class="clearfix">
                <div class="reg-header">
                    <h2 class="text-primary" v-translate>Registration</h2>
                </div>
                <form  autocomplete="off" :url="url" @submit.prevent.stop>
                    <div class="reg-body">
                        <div class="form-group">
                            <label for="login" v-translate>Email</label> <span v-show="errors.has('email')" class="help is-danger">*{{errors.first('email')}}</span>
                            <input type="text" id="email" name="email" placeholder="" v-model="email" class="form-control input-alg readonly" :class="{error: errors.has('email')}" v-validate="'required|email|try_email'">
                        </div>
                        <div class="form-group">
                            <label for="login" v-translate>Login</label> <span v-show="errors.has('login')" class="help is-danger">*{{errors.first('login')}}</span>
                            <input type="text"  id="login" name="login" placeholder="" v-model="login" class="form-control input-alg readonly" :class="{error: errors.has('login')}" v-validate="'required|min:6|try_login'">
                        </div>
                        <div class="form-group">
                            <label for="password" v-translate>Password</label> <span v-show="errors.has('password')" class="help is-danger">*{{errors.first('password')}}</span>
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
                        <button type="submit" class="btn btn-primary btn-lg" @click="validate" :disabled="emailExists || loginExists" v-translate>Create account</button>
                    </div>
                    <div class="reg-right"></div>

                    <div class="reg-footer">
                        <p class="reg-agree"><span v-translate>By clicking</span> <strong v-translate>Create account</strong> <span v-translate>you agree to the</span> <a href="/legal" target="blank" class="text-nowrap">User Agreement</a>, <a href="/terms_of_use" target="legal" class="text-nowrap">Terms of use</a> and <a href="/confidentiality" target="legal" class="text-nowrap">Privacy policy</a></p>
                    </div>

                </form>
            </div>
            <div v-if="registered" id="verify-email" class="clearfix">
                <div class="reg-header">
                    <h2 class="text-primary" v-translate>Just one more step to get started</h2>
                    <p class="lead"><span v-translate>Check your email and activate VIPole Corporate account by clicking the activation link that we have just sent to</span> <br><strong>{{email}}</strong></p>
                    <p class="lead">
                        <span v-translate>Once your Corporate account is activated, VIPole services will be enabled for your account</span>.<br>
                        <span v-translate>Activation link is valid for a single use and will expire in 24 hours</span>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ajaxform from '../mixins/ajax-form.vue';
    import ErrorInform  from '../mixins/error-inform.vue';

    export default {
        components: {ErrorInform},
        name: 'login',
        data(){
            return {
                url: "/registration/register",
                email: null,
                login: null,
                password: null,
                type_password: "password",
                emailExists: false,
                loginExists: false,
                registered: false
            }
        },
        created(){

            this.$validator.extend('try_login', {
                getMessage: field => this.t('Login already exists'),
                validate: value => {
                    if(value) {
                        return window.axios.post("/registration/try-login", {login: value}).then(({data}) =>
                        {
                            if(data.status)
                                return true;

                            return false;

                        }).catch(function(error) {
                            console.log('error2');
                            return false;
                        });

                    } else {
                        return false;
                    }
                }
            });

            this.$validator.extend('try_email', {
                getMessage: field => this.t('Email already exists'),
                validate: value => {
                    if(value) {
                        return window.axios.post("/registration/try-email", {email: value}).then(({data}) =>
                        {
                            if(data.status)
                                return true;

                            return false;
                        }).catch(function(error) {
                            console.log('error1');
                            return false;
                        });

                    } else {
                        return false;
                    }
                }
            });


        },
        mixins: [ajaxform],
        methods: {
            validate: function()
            {
                let data = {"login": this.login, "password": this.password, "email": this.email};
                this.send(this.url, data,
                    (data) => {
                            this.registered = true;
                    }
                );
            },
            togglePassword: function()
            {
                this.type_password = (this.type_password == 'password')? 'text' : 'password';
            }
        },
        locales: {
            ru: {
                'Registration': 'Регистрация',
                'Login': 'Логин',
                'Password': 'Пароль',
                'Create account': 'Создать аккаунт',
                'Login already exists': 'Логин уже существует',
                'Email already exists': 'Email уже существует',
                'By clicking': 'Нажимая',
                'you agree to the': 'вы соглашаетесь с условиями',
                'Just one more step to get started': 'Остался всего один шаг',
                'Check your email and activate VIPole Corporate account by clicking the activation link that we have just sent to': 'Проверьте ваш email и активируйте корпоративный аккаунт VIPole, перейдя по ссылке активации в письме, которое мы отправили на адрес',
                'Once your Corporate account is activated, VIPole services will be enabled for your account': 'Как только вы активируете аккаунт, вы сможете начать пользоваться сервисом VIPole для корпоративных клиентов',
                'Activation link is valid for a single use and will expire in 24 hours': 'Ссылка активации одноразовая и действует в течение 24 часов',
            }
        }

    }
</script>


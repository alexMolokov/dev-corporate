<template>
    <div class="login-page">
        <div class="container">
            <div id="sign_in" class="clearfix">
                <div class="reg-header">
                    <h2 class="text-primary">Registration</h2>
                </div>
                <form  autocomplete="off" :url="url" @submit.prevent.stop>
                    <div class="reg-body">
                        <div class="form-group">
                            <label for="login">Email</label> <span v-show="errors.has('email')" class="help is-danger">*{{errors.first('email')}}</span>
                            <input type="text" id="email" name="email" placeholder="" v-model="email" class="form-control input-alg readonly" :class="{error: errors.has('email')}" v-validate="'required|email'">
                        </div>
                        <div class="form-group">
                            <label for="login">Login</label> <span v-show="errors.has('login')" class="help is-danger">*{{errors.first('login')}}</span>
                            <input type="text"  id="login" name="login" placeholder="" v-model="login" class="form-control input-alg readonly" :class="{error: errors.has('login')}" v-validate="'required|min:6|try_login'">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label> <span v-show="errors.has('password')" class="help is-danger">*{{errors.first('password')}}</span>
                            <div class="input-group">
                                <input :type="type_password" id="password" name="password" v-model="password" class="form-control input-alg" :class="{error: errors.has('password')}" v-validate="'required|min:6'">
                                <a href="#" class="input-group-addon" @click.prevent.stop="togglePassword"><span class="glyphicon" :class="{'glyphicon-eye-close': type_password == 'password', 'glyphicon-eye-open': type_password != 'password'}" aria-hidden="true"></span></a>
                            </div>
                        </div>
                    </div>

                    <div class="reg-body">
                        <div class="captcha-wrapper"></div>
                        <div class="alert-wrapper"></div>
                    </div>

                    <div class="reg-left">
                        <button type="submit" class="btn btn-primary btn-lg" @click="validate" :disabled="emailExists || loginExists">Create account</button>
                    </div>
                    <div class="reg-right"></div>

                    <div class="reg-footer">
                        <p class="reg-agree">By clicking <strong> Create account</strong> you agree to the <a href="/legal" target="blank" class="text-nowrap">User Agreement</a>, <a href="/terms_of_use" target="legal" class="text-nowrap">Terms of use</a> and <a href="/confidentiality" target="legal" class="text-nowrap">Privacy policy</a></p>
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
                url: "/registration",
                email: null,
                login: null,
                password: null,
                type_password: "password",
                emailExists: false,
                loginExists: false
            }
        },
        created(){

            this.$validator.extend('try_login', {
                getMessage: field => this.t('Login already exists'),
                validate: value => {
                    if(value) {
                        console.log(this.send);
                        return this.send("/registration/try_login", {"value": value},
                            function (response) { // success
                                if(response.body.status)
                                {
                                    return true;

                                }  else {
                                    return false;
                                }
                            },
                            function (response) { // error
                                return false;
                            }


                        ).catch(function(error) {
                            console.log('error');
                            return false;
                        });

                    } else {
                        return false;
                    }
                }
            });


            this.$validator.attach({
                name: 'try_login',
                getter: () => this.login,
                _delay: 1
            });
        },
        mixins: [ajaxform],
        methods: {
            validate: function()
            {

            },
            togglePassword: function()
            {
                this.type_password = (this.type_password == 'password')? 'text' : 'password';
            }
        }

    }
</script>


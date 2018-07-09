<template>
    <div class="login-page">
        <div class="container">
            <div id="sign_in" class="clearfix"  v-if="!emailChecked">
                <div class="reg-header">
                    <h2 class="text-primary">Reset your password</h2>
                    <p class="lead">If you don’t remember your password, reset it following the instructions.</p>
                </div>
                <form  autocomplete="off" :url="url" @submit.prevent.stop>
                    <div class="reg-body">
                        <div class="form-group">
                            <label for="login">Login or Email</label> <span v-show="errors.has('search')" class="help is-danger">*{{errors.first('search')}}</span>
                            <input type="text" id="login" name="search" placeholder="" v-model="search" class="form-control input-alg readonly" :class="{error: errors.has('search')}" v-validate="'required|min:5'">
                        </div>
                       </div>

                    <div class="reg-body">
                        <div class="captcha-wrapper"></div>
                        <error-inform :err="err" :state="state"></error-inform>
                    </div>

                    <div class="reg-left">
                        <button type="submit" class="btn btn-primary btn-lg" @click="validate">Next</button>
                    </div>
                    <div class="reg-right"> <p class="reg-choice"><router-link :to="{name: 'login'}">Return to Login</router-link></p> </div>
                </form>
            </div>
            <div class="clearfix" v-if="emailChecked">
                <div class="reg-header">
                    <h2 class="text-primary" v-translate>Check your email</h2>
                    <p class="lead top-20"><span v-translate>We’ve sent an email with password reset link to</span> <strong>{{email}}</strong>. <span v-translate>Click on the link to confirm your password reset.</span></p>
                    <p class="lead" v-translate>Verification link is valid for a single use and will expire in 24 hours.</p>
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
        name: 'forget-password',
        data(){
            return {
                url: "/registration/forget",
                search: null,
                emailChecked:  false,
                email: "example@mail.com"
            }
        },
        mixins: [ajaxform],

        methods: {
            validate: function()
            {

                let data = {"search": this.search};

                this.send(this.url, data,
                    (data) => {
                        this.email = data.email;
                        this.emailChecked = true;
                    }
                );
            },
        }

    }
</script>


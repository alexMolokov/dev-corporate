<template>
    <div class="login-page">
        <div class="container">
            <div id="sign_in" class="clearfix">
                <div class="reg-header">
                    <h2 class="text-primary">Reset your password</h2>
                    <p class="lead">If you don’t remember your password, reset it following the instructions.</p>
                </div>
                <form  autocomplete="off" :url="url" @submit.prevent.stop>
                    <div class="reg-body">
                        <div class="form-group">
                            <label for="login">Login or Email</label> <span v-show="errors.has('search')" class="help is-danger">*{{errors.first('search')}}</span>
                            <input type="text" id="login" name="search" placeholder="" v-model="search" class="form-control input-alg readonly" :class="{error: errors.has('search')}" v-validate="'required|min_value:5'">
                        </div>
                       </div>

                    <div class="reg-body">
                        <div class="captcha-wrapper"></div>
                        <div class="alert-wrapper"></div>
                    </div>

                    <div class="reg-left">
                        <button type="submit" class="btn btn-primary btn-lg" @click="validate">Next</button>
                    </div>
                    <div class="reg-right"> <p class="reg-choice"><router-link :to="{name: 'login'}">Return to Login</router-link></p> </div>
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
                search: null,
            }
        },
        mixins: [ajaxform],
        methods: {

        }

    }
</script>


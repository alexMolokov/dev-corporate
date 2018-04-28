<template>
    <div class="main_container">
    <header>
        <div class="container v-nav-main">
            <nav class="navbar navbar-default v-navbar" role="navigation">
                <div class="navbar-header">
                    <a href="/"><img id="logo-img-logo" :src="logo" width="113" height="37" border="0"></a>
                    <button type="button" class="navbar-toggle collapsed navbar-slider-button" data-toggle="offcanvas" data-target=".navmenu">
                        <span v-translate>MENU</span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right v-main-menu v-second-nav">
                        <li><a target="_blank" :href="rootSite + '/features'"><span v-translate>Features</span></a></li>
                        <li><a target="_blank" :href="rootSite + '/pricing'"><span v-translate>Pricing</span></a></li>
                        <li><a target="_blank" :href="rootSite + '/support'"><span v-translate>Support</span></a></li>
                        <li><a target="_blank" :href="rootSite + '/download'" id="a-download"><span id="v-download" v-translate>Download</span></a></li>
                        <li v-if="!isAuth"><router-link :to="{name:'registration'}" class="a-sign"><span id="v-sign" v-translate>Sign in</span></router-link></li>
                        <li  v-if="isAuth"class="sub-menu">
                            <router-link :to="{name: 'user'}" class="username hidden-xs"><div>{{getLogin}}</div><img src="/images/icons/icon-userpic-white.png" alt></router-link>
                            <ul>
                                <li><router-link :to="{name: 'user'}">Profile</router-link></li>
                                <li><a href="#" class="logout">Sign out</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>
            <div class="navmenu navmenu-default navmenu-fixed-left offcanvas-sm hidden-sm hidden-md hidden-lg">
                <a href="/">
                    <div class="logo-mobile hidden-sm hidden-md hidden-lg">
                        <img id="logo-img-logo" :src="logo" width="113" height="37" border="0" title="Secure Private Messenger">
                    </div>
                </a>
                <ul class="nav navmenu-nav start-menu">
                    <li><a target="_blank" :href="rootSite + '/features'" v-translate>Features</a></li>
                    <li><a target="_blank" :href="rootSite + '/pricing'" v-translate>Pricing</a></li>
                    <li><a target="_blank" :href="rootSite + '/support'" v-translate>Support</a></li>
                </ul>
                <ul class="nav load-button">
                    <li><a target="_blank" :href="rootSite + '/download'" id="a-download"><span id="v-download" v-translate>Download VIPole</span></a></li>
                </ul>
                <ul v-if="!isAuth" class="nav navmenu-nav">
                    <li><router-link :to="{name:'registration'}" class="a-sign"><span id="v-sign" v-translate>Sign in</span></router-link></li>
                </ul>
                <ul  v-if="isAuth" class="nav navmenu-nav end-menu">
                    <li>
                        <router-link :to="{name: 'user'}" id="sign_up_link"><img src="/images/icons/icon-userpic-white.png" alt >{{getLogin}}</router-link>
                    </li>
                    <li>
                        <a href="#" class="logout"><img src="/images/icons/icon-sign-out.png" alt=""><span>Sign out</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
        <router-view />
        <footer class="end-page">
            <div class="container">
                <div class="row icon-footer">
                    <div class="col-sm-7 social">
                        <div class="icons">
                            <a href="https://medium.com/@VIPole" target="_blank"><div class="medium"></div></a>
                            <a href="https://www.facebook.com/VIPoleapp" target="_blank"><div class="facebook"></div></a>
                            <a href="https://twitter.com/VIPoleapp" target="_blank"><div class="twitter"></div></a>
                            <a href="https://plus.google.com/+VIPole/" target="_blank"><div class="google"></div></a>
                            <a href="https://www.linkedin.com/company/vipole" target="_blank"><div class="in"></div></a>
                            <a href="http://www.youtube.com/user/vipolemessenger" target="_blank"><div class="youtube"></div></a>
                        </div>
                    </div>
                    <div class="col-sm-5 language">
                        <div class="dropdown v-choose-language">
                            <span>Language:</span>
                            <a href="#" id="drop-down-lang" class="dropdown-toggle" data-toggle="dropdown"><span class="lang">{{getLang}}</span></a>
                            <ul class="dropdown-menu dropdown-menu-left lang-dropdown-menu">
                                <li><a href="#" @click="changeLanguage('en')">English (English)</a></li>
                                <li><a href="#" @click="changeLanguage('ru')">Russian (Русский)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row copyright">
                    <div class="col-md-12">
                        <p class="legal">
                            <span>© copyright_date VIPole International LP, United Kingdom, All rights reserved. </span>
                        </p>
                        <p class="legal">
                            <span><a :href="getLang + '/user_agreement'">User Agreement</a> | <a :href="getLang + '/terms_of_use'">Terms of Use</a>  | <a :href="getLang + '/confidentiality'">Privacy Policy</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

export default {
    name: 'app',
    props: {
        logo: {type: String, default: ''},
        rootSite: {type: String, default: ''}
    },
    computed: mapGetters([
        'isAuth',
        'getLogin',
        'getLang'
      ])
    ,
    methods: {
        changeLanguage(lang)
        {
            alert(lang)
        }
    },
    locales: {
        ru: {
            'MENU': 'МЕНЮ',
            'Features': 'Возможности',
            'Pricing': 'Стоимость',
            'Support': 'Помощь',
            'Download': 'Скачать',
            'Sign in': 'Войти',
            'Download VIPole': 'Скачайте VIPole'
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss"></style>


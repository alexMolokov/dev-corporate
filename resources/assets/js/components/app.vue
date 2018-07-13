<template>
    <div class="main_container">
    <header>
        <div class="container v-nav-main">
            <nav class="navbar navbar-default v-navbar" role="navigation">
                <div class="navbar-header">
                    <router-link :to="{name: mainPageName}"><img id="logo-img-logo" :src="logo" width="113" height="37" border="0"></router-link>
                    <button type="button" class="navbar-toggle collapsed navbar-slider-button" data-toggle="offcanvas" data-target=".navmenu">
                        <span v-translate>MENU</span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right v-main-menu v-second-nav">
                        <li><a target="_blank" :href="rootReference + '/features'"><span v-translate>Features</span></a></li>
                        <li><a target="_blank" :href="rootReference + '/pricing'"><span v-translate>Pricing</span></a></li>
                        <li><a target="_blank" :href="rootReference + '/support'"><span v-translate>Support</span></a></li>
                        <li><a target="_blank" :href="rootReference + '/download'" id="a-download"><span id="v-download" v-translate>Download</span></a></li>
                        <li v-if="!isAuth"><router-link :to="{name:'login'}" class="a-sign"><span id="v-sign" v-translate>Sign in</span></router-link></li>
                        <li  v-if="isAuth"class="sub-menu">
                            <router-link :to="{name: 'userpage'}" class="username hidden-xs"><div>{{getLogin}}</div><img src="/images/icons/icon-userpic-white.png" alt></router-link>
                            <ul>
                                <li><router-link :to="{name: 'userpage'}">Profile</router-link></li>
                                <li><a href="#" class="logout"  @click="userLogout">Sign out</a></li>
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
                    <li><a @click="closeMenu" target="_blank" :href="rootReference + '/features'" v-translate>Features</a></li>
                    <li><a @click="closeMenu" target="_blank" :href="rootReference + '/pricing'" v-translate>Pricing</a></li>
                    <li><a @click="closeMenu" target="_blank" :href="rootReference + '/support'" v-translate>Support</a></li>
                </ul>
                <ul class="nav load-button">
                    <li><a target="_blank" :href="rootReference + '/download'" id="a-download"><span id="v-download" v-translate>Download VIPole</span></a></li>
                </ul>
                <!--
                <ul v-if="!isAuth" class="nav navmenu-nav">
                    <li><router-link :to="{name:'registration'}" class="a-sign"><span id="v-sign" v-translate>Sign in</span></router-link></li>
                </ul> -->
                <ul  v-if="isAuth" class="nav navmenu-nav end-menu">
                    <li>
                        <router-link :to="{name: 'userpage'}" @click.native="closeMenu" id="sign_up_link"><img src="/images/icons/icon-userpic-white.png" alt >{{getLogin}}</router-link>
                    </li>
                    <li>
                        <a href="#"  class="logout" @click="userLogout"><img src="/images/icons/icon-sign-out.png" alt=""><span v-translate>Sign out</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
        <div id="close-menu" class="close-menu hidden-sm hidden-md hidden-lg"></div>
        <div id="content">
            <div class="container v-page">
                <div class="internal">
                    <div class="internal_content">
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 pds0-xs">
                        <div class="list-reference">
                            <div>
                                <input type="checkbox" id="reference-menu-vipole">
                                <label for="reference-menu-vipole"><div class="head">VIPole</div></label>
                                <div class="submenu">
                                    <div><a :href="rootReference + 'about_vipole'" target="_blank" v-translate>About VIPole</a></div>
                                    <div><a :href="rootReference + 'features'" target="_blank" v-translate>Features</a></div>
                                    <div><a :href="rootReference + 'pricing'" target="_blank" v-translate>Pricing</a></div>
                                    <div><a :href="rootReference + 'download'" target="_blank" v-translate>Download</a></div>
                                </div>
                            </div>
                            <div>
                                <input type="checkbox" id="reference-menu-security">
                                <label for="reference-menu-security"><div class="head" v-translate>Security</div></label>
                                <div class="submenu">
                                    <div><a :href="rootReference + '/security'" target="_blank" v-translate>Overview</a></div>
                                    <div><a :href="rootReference + '/security/protection-levels'" target="_blank" v-translate>Data protection</a></div>
                                    <div><a :href="rootReference + '/security/encryption'" target="_blank" v-translate>Encryption</a></div>
                                </div>
                            </div>
                            <div class="cl"></div>
                            <div>
                                <input type="checkbox" id="reference-menu-partners">
                                <label for="reference-menu-partners"><div class="head" v-translate>Partners</div></label>
                                <div class="submenu">
                                    <div><a :href="rootReference + '/partners'" target="_blank" v-translate>Opportunities</a></div>
                                    <div><a :href="rootReference + '/partners/affiliates'" target="_blank" v-translate>Affiliate program</a></div>
                                    <div><a :href="rootReference + '/partners/resellers'" target="_blank" v-translate>Reseller program</a></div>
                                    <div><a :href="rootReference + '/businessclub'" target="_blank" v-translate>Business Club</a></div>
                                </div>
                            </div>
                            <div>
                                <input type="checkbox" id="reference-menu-about">
                                <label for="reference-menu-about"><div class="head" v-translate>About us</div></label>
                                <div class="submenu">
                                    <div><a :href="rootReference + '/about_us'" target="_blank" v-translate>Company</a></div>
                                    <div><a :href="rootReference + '/news'" target="_blank" v-translate>News</a></div>
                                    <div><a href="http://blog.vipole.com/" target="_blank" v-translate>Blog</a></div>
                                    <div><a :href="rootReference + '/feedback'" target="_blank" v-translate>Contact us</a></div>
                                </div>
                            </div>
                            <div class="cl"></div>
                            <div>
                                <input type="checkbox" id="reference-menu-support">
                                <label for="reference-menu-support"><div class="head" v-translate>My Account</div></label>
                                <div class="submenu">
                                    <div><a :href="rootReference + '/user'" target="_blank" v-translate>Sign in</a></div>
                                    <div><a :href="rootReference + '/registration'" id="v-sign-up-link" target="_blank" v-translate>Sign up</a></div>

                                    <div><a :href="rootReference + '/support'" target="_blank" v-translate>Support</a></div>
                                    <div><a :href="rootReference + '/partners/referrals'" target="_blank" v-translate>Referral program</a></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
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
                            <span v-translate>Language:</span>
                            <a href="#"  class="dropdown-toggle" @click.prevent.stop="langMenu = !langMenu"><span class="lang">{{currentLanguageName}}</span></a>
                            <ul class="dropdown-menu dropdown-menu-left lang-dropdown-menu"  style="bottom:100%; top: auto; display: block" v-if="langMenu">
                                <li><a href="#" @click="changeLanguage('en')" @click.prevent.stop>English (English)</a></li>
                                <li><a href="#" @click="changeLanguage('ru')" @click.prevent.stop>Russian (Русский)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row copyright">
                    <div class="col-md-12">
                        <p class="legal">
                            <span>© {{currentYear}} VIPole International LP, United Kingdom, All rights reserved.</span>
                        </p>
                        <p class="legal">
                            <span><a :href="rootReference + '/user_agreement'">User Agreement</a> | <a :href="rootReference + '/terms_of_use'">Terms of Use</a>  | <a :href="rootReference + '/confidentiality'">Privacy Policy</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapMutations } from 'vuex'
import ajaxform from '../mixins/ajax-form.vue';



export default {
    name: 'app',
    props: {
        logo: {type: String, default: ''},
        rootSite: {type: String, default: ''}
    },
    data() {
        return {
            langMenu: false,
        }
    },
    computed: {
        currentLanguageName(){
          const langs = {
              ru: 'Русский',
              en: 'English'
          }
          return langs[this.getLang]
        },
        currentYear(){
            let d = new Date()
            return d.getFullYear();
        },
        rootReference() {
            return this.rootSite + '/' + this.getLang;
        },
        ...mapGetters([
            'isAuth',
            'getLogin',
            'getLang'
        ]),
        mainPageName(){
            if(this.isAuth) return "userpage";
            return "login";
        }
    }
    ,
    mixins: [ajaxform],
    methods: {
        ...mapMutations(['setLang', 'logout']),
        changeLanguage(lang)
        {
            this.langMenu = false;
            this.setLang({lang: lang, translate: this.$translate});
        },
        closeMenu()
        {
            document.getElementById('close-menu').click();
        },
        userLogout()
        {
            //let authLogout = this.logout;
            let url = "/auth/logout";
            this.send(url, {},
                () => {

                    this.logout(),
                    this.closeMenu();
                }
            );
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
            'Sign out': 'Выйти',
            'Download VIPole': 'Скачайте VIPole',
            'About VIPole':'О VIPole',
            'Features':'Возможности',
            'Pricing':'Тарифы',
            'Download':'Загрузка',
            'Security':'Безопасность',
            'Overview':'Общие сведения',
            'Data protection':'Уровни защиты',
            'Encryption':'Шифрование',
            'Partners':'Партнерам',
            'Opportunities':'Возможности',
            'Affiliate program':'Аффилиатная программа',
            'Reseller program':'Реселлерская программа',
            'Business Club':'Бизнес клуб',
            'About us':'О нас',
            'Company':'Компания',
            'News':'Новости',
            'Blog':'Блог',
            'Contact us':'Контакты',
            'My Account':'Мой Аккаунт',
            'Sign in':'Войти',
            'Sign up':'Регистрация',
            'Support':'Помощь',
            'Referral program':'Реферальная программа',
            'Language:': 'Язык:'

        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss"></style>


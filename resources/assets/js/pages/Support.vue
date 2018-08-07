<template>
<div id="support-page">
    <div v-show="!search.showResult">
        <div v-if="isCatalogLoad">
            <div id="support-menu-catalog" v-if="menu != ''" :class="{'opened': opened}">
                <div class="close-support-menu" @click="opened=false">×</div>
                <ul id="accordeon">
                    <tree-menu class="item" :model="menu" :doc_id="doc_id" @clickmenu="clickMenu"/>
                </ul>
            </div>
            <div id="document-support-body">
                <div class="side-navigation-open-button" @click="opened=!opened"></div>
                <div v-if="body == ''" class="top-30"><loading-page></loading-page></div>
                <div v-else>
                    <div  v-html="body"></div>
                    <div v-if="search.allowed">
                        <section id="search-section">
                            <form class="search" role="search" @submit.prevent.stop="searchQuery">
                                <input id="query" class="ui-autocomplete-input" name="query" v-model="query" placeholder="SEARCH" autocomplete="off" value="" type="search">
                                <input src="/static/common/img/icons/icon-search.png" width="14" height="14" type="image">
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div  class="top-60" v-else>
            <loading-page></loading-page>
        </div>
    </div>

    <section v-show="search.showResult" id="search">
        <div class="container">
            <div class="search-container">
                <h1 v-translate>How can we help?</h1>
                <form class="search" role="search" @submit.prevent.stop="searchQuery">
                    <input  name="query" placeholder="Find anything" class="ui-autocomplete-input" autocomplete="off" type="search" v-model="query">
                    <input src="/static/common/img/icons/icon-search.png" type="image">
                </form>
             </div>
        </div>
    </section>

    <div v-show="search.showResult" class="container search-result">
        <div class="count-found">
            <div>
                <div v-if="lang == 'ru'"> <span v-translate>results found for</span> "{{search.query}}" : {{search.count}}</div>
                <div v-else>{{search.count}} <span>results found for</span> "{{search.query}}"</div>
            </div>
        </div>
        <div v-if="search.count > 0">
            <div class="list-doc">
                <div class="search-doc" v-for="doc in search.list">
                    <div><a href="#" @click.prevent.stop="go(doc.id)" v-html="doc.title"></a></div>
                    <div class="snippet" v-html="doc.snippet"></div>
                </div>
            </div>
        </div>
        <div v-else>
            <div><span v-translate>Sorry! We didn’t find anything about</span> <b>{{query}}</b>.</div>
            <div><span v-translate>Try a different search, or</span> <a href="/en/support" v-translate>browse our help topics instead</a>.</div>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">

    //const userMenu = require('../components/userMenu.vue');

    const treeMenu = require('../components/treeMenu.vue');
    const loadingPage = require('../components/loadingPage.vue');

    let ajaxform = require('../mixins/ajax-form.vue');
    import {mapState, mapMutations, mapGetters} from "vuex";

    export default {
        name: 'supportHtml',
        created(){
            this.edition = this.$route.params.edition;
            this.os= this.$route.params.os;

            if(this.getCatalog.has(this.getCatalogKey())) {
                this.isCatalogLoad = true;
                let data =   this.getCatalog.get(this.getCatalogKey());
                this.menu = data["catalog"];
                this.body = data["body"];
                this.doc_id = data["id"];
                return;
            }

            let path =  '/support/' + this.lang + '/' + this.edition + '/' + this.os  + '/catalog';
            this.uploadInfo(path, {}, (data) => {
                this.isCatalogLoad = true;
                this.menu = data["catalog"];
                this.body = data["body"];
                this.doc_id = data["id"];
                this.saveCatalog({"key": this.getCatalogKey(), "data": data});
                this.saveDoc({"key": this.getDocKey(this.doc_id), "data": this.body});
            });
        },
        data(){
            return {
                isCatalogLoad: false,
                menu: "",
                body: "",
                doc_id: "",
                edition: "",
                os: "",
                opened: false,

                query: "",
                search: {
                    allowed: true,
                    showResult: false,
                    list: [],
                    count: 0,
                    query: ""
                }


            }
        },
        computed: {
            ...mapState(["lang"]),
            ...mapGetters("support", ["getCatalog", "getDoc"])
        },
        mixins: [ajaxform],

        components: {
            'tree-menu': treeMenu,
            "loading-page": loadingPage

        },
        methods: {
            ...mapMutations("support",["saveCatalog", "saveDoc"]),
            getCatalogKey: function(){
                return this.lang + '.' + this.edition + '.' + this.os
            },
            getDocKey: function(id){
               return this.lang + '.' + this.edition + '.' + this.os + "." + id;
            },
            clickMenu: function(id)
            {

                if(this.getDoc.has(this.getDocKey(id)))
                {
                    let data =   this.getDoc.get(this.getDocKey(id));
                    this.doc_id = id;
                    this.body = data;
                    return;
                }

                this.body = "";
                let path =  '/support/' + this.lang + '/' + this.edition + '/' + this.os  + '/body/' + id;
                this.uploadInfo(path, {}, (data) => {
                    this.body = data;
                    this.doc_id = id;
                    this.saveDoc({"key": this.getDocKey(id), "data": data});
                });
            },

            scroll: function(){
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            },

            go: function(doc_id) {
                this.search.showResult = false;
                this.clickMenu(parseInt(doc_id));
                this.scroll();

            },
            searchQuery: function()
            {
                if(this.query.trim() == "")
                {
                    alert(this.t("Please enter query!"));
                    return;
                }

                let path =  '/support/search/' + this.lang + '/' + this.edition + '/' + this.os;
                this.uploadInfo(path, {query: this.query}, (data) =>
                {
                    this.search.showResult = true;
                    this.search.count = data.count;
                    this.search.list = data.list;
                    this.search.query = data.query;
                    this.scroll();


                });
            }

        },
        locales: {
            ru: {
                "Please enter query!": "Пожалуйста введите запрос!",
                "How can we help?": "Чем мы можем помочь?",
                "Find anything": "Найдите что нибудь",
                "Sorry! We didn’t find anything about": "Очень жаль, но мы не нашли ничего о",
                "Try a different search, or": "Попробуйте другой поиск или",
                "browse our help topics instead": 'посмотрите, нет ли подходящей темы в разделе "Документация".',
                "results found for":"Результатов поиска для"
            }
        }
    }
</script>

<style lang="scss">

    .container.v-page {
        position: relative;
    }

    #support-page {

        #search {
            min-width: 320px;
            height: 250px;
            background-color: #00a0c8;
            margin-bottom: 50px;
            text-align: center;
            margin-top: 60px;

            h1 {
                font-size: 48px;
                font-weight: 700;
                color: #fff;
                margin: 60px 0 32px;
            }
            form {position: relative;}
            input[name=query] {
                font-size: 14px;
                line-height: 20px;
                padding: 20px 55px 20px 20px;
                border: 0;
                border-radius: 3px;
                display: block;
                width: 100%;
                margin-bottom: 20px;
            }

            input[type=image] {
                position: absolute;
                top: 20px;
                right: 25px;
            }
        }

       .search-result {
           .count-found,  .not-found {
               text-align: center;

               div > div:first-child {
                   font-size: 24px;
                   font-weight: 700;
                   color: #00a0c8;
                   margin-bottom: 30px;
               }
           }

           .list-doc {

               .search-doc {
                   margin-bottom: 40px;

                   > div a {
                       font-size: 15px;
                       font-weight: 600;
                       color: #00a0c8;
                   }

                   .snippet {
                       margin-top: 10px;
                       font-size: 15px;
                       color: #4c6d7d;
                   }
               }
           }


        }



        #search-section {
            margin: 0 auto;
            /*max-width: 660px;*/

            #query {
                border: 0;
                border-radius: 2px;
                display: block;
                font-size: 12px;
                line-height: 15px;
                padding: 13px 55px 12px 15px;
                margin: 45px 0;
                width: 100%;
                background-color: #f5f5f5;
            }

            .search {
                position: relative;

                input[type=image] {
                    position: absolute;
                    right: 20px;
                    top: 15px;
                    width: 14px;
                    height: 14px;
                }
            }


        }



        @media (max-width: 767px)
        {
            .side-navigation-open-button
            {
                height: 30px;
                width: 30px;
                border-radius: 3px;
                position: absolute;
                left: 10px;
                top: 30px;
                opacity: 1;
                cursor: pointer;
                background: #F4F5F7 url("/images/icons/sidebar-open.svg") no-repeat center;

                &:hover {
                    background-color: #D2D5DA;
                }
            }
            #support-menu-catalog {


                display: block;
                position: fixed;
                z-index: 8;
                top: 75px;
                left: -300px;
                transition: left .2s;
                background-color: #fff;

                .close-support-menu {
                    display: none;
                    font-size: 30px;
                    font-weight: 300;
                    color: #ddd;
                    text-align: right;
                    padding: 0 5px;

                }

                &.opened {
                    left: 0;
                    right: 10px;
                    bottom: 0;
                    min-width: 300px;
                    box-shadow: 0 0 20px 0 rgba(22,22,22,0.1);
                    overflow: auto;

                    .close-support-menu {
                        display: block;
                        cursor: pointer;
                        margin-top: -15px;
                    }

                    #accordeon {
                        margin-top: -15px;
                    }

                    ul li {
                        line-height: 30px;


                    }




                }

            }

            #document-support-body {
                padding-left: 50px;
                position: relative;

            }
        }

        @media (min-width: 768px)
        {
            .side-navigation-open-button
            {
                display: none;
            }
        }




        .auto-cursor-target {
            display: none;
        }

        h4 {
            font-weight: 600;
        }
        table {

            th {
                background-color: #f0f0f0;
            }
            pre {
                white-space: pre;
                border: none;
                background-color: #fff;
                font-size:  12px;
            }
        }

        pre {
            font-size: 16px;
            padding: 10px;
        }



        .alert-note
        {
            background: #FEFBD7;
            border-color: #ffeaae;

            pre {
                border: none;
                background-color: #FEFBD7;
                white-space: pre-wrap;


            }
        }



        margin-top: -35px;
        &.flex-row {
            > div {
                flex-grow: 1;
                flex-basis: 1px;
                padding: 20px 20px 0 20px;

                &:first-child {
                    flex-grow: 0;
                    min-width: 360px;
                    border-right: 2px solid #f5f5f5;
                    padding: 20px 20px 0 0;
                    height: 100%;
                }
            }
        }
    }

    #support-menu-catalog {

        width: 300px;
        position: absolute;
        top: 60px;
        left:0;
        bottom: 0;
        padding: 10px;
        border-right: 2px solid #f5f5f5;
        z-index: 6;

        .close-support-menu {
            display: none;
        }

        a {
            padding: 3px;
        }

        ul li {
            list-style-type: none;
            margin-left: 10px;
            line-height: 25px;
        }

        .fa {
            display: inline-block;
            font: normal normal normal 11px/1 FontAwesome;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .fa-chevron-down:before {
            content: "\f078";
        }
    }


    #document-support-body {

        .support.article {
            .alert-warning {
                color: #a94442;
                background-color: #f2dede;
                border-color: #ebccd1;
            }
        }



        padding-left: 330px;
        padding-top: 10px;

        p {
            margin: 0 0 20px;
            text-align: left;

        }


        div.panel.pdl {
            border: 1px solid #ccc;
            border-radius: 3px;

            &.code {
                overflow: auto;
            }

            pre {
                line-height: 25px;
                background-color: #fff;
                border: none;
                border-radius: 0px;
            }


            .codeContent
            {
                .line {
                    white-space: pre;
                    padding: 5px;
                    &:first-child {
                        padding-top: 10px;
                    }
                    &:last-child {
                        padding-bottom: 10px;
                    }

                    &.comment {
                        color: #008200 !important;
                    }
                }

            }

            .panelHeader.pdl {
                border-bottom: 1px solid #ccc;
                text-align: left;
                padding: 5px 15px;
                background: #f5f5f5;
                overflow: hidden;
                position: relative;
                font-weight: bold;
            }
        }

        ul.square {
            li:before {
                content: "\25a0";
                color: #00a0c8;
                font-size: 15px;
                font-weight: 700;
                display: block;
                line-height: 30px;
            }
            li {
                list-style: none;
                margin-left: 20px;
                display: flex;

                > span {
                    display: block;
                    margin: 0 0 0 15px;
                    line-height: 30px;
                }

            }



        }
    }

</style>

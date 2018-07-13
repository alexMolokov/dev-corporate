<template>

<div id="support-page">
    <div id="scroll"></div>
    <div v-if="isCatalogLoad">
        <div id="support-menu-catalog" v-if="menu != ''">
            <ul id="accordeon">
                <tree-menu class="item" :model="menu"  @clickmenu="clickMenu"/>
            </ul>
        </div>
        <div id="document-support-body">
            <div v-if="body == ''" class="top-30"><loading-page></loading-page></div>
            <span v-else v-html="body"></span>
        </div>
    </div>
    <div  class="top-60" v-else>
        <loading-page></loading-page>
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
                os: ""

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
                    this.body = data;
                    return;
                }

                this.body = "";
                let path =  '/support/' + this.lang + '/' + this.edition + '/' + this.os  + '/body/' + id;
                this.uploadInfo(path, {}, (data) => {
                    this.body = data;
                    this.saveDoc({"key": this.getDocKey(id), "data": data});
                });

            }

        }

    }
</script>

<style lang="scss" scoped="">

    .container.v-page {
        position: relative;
    }


    #support-page {

        .alert-note
        {
            background: #fffdf6;
            border-color: #ffeaae;

            pre {
                border: none;
                background-color: #fffdf6;
                font-size: 16px;
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

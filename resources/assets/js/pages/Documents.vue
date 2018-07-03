<template>
    <div  id="user-documents-page">

        <div v-if="!isLoaded">
            <loading-page></loading-page>
        </div>

        <div v-if="isLoaded">
            <div v-if="hasStandalone">
                <h2>Windows</h2>
                <div>
                    <a href="#" @click.prevent.stop="loadSupport(standalone,windows)">VIPole Enterprise, Standalone edition</a>
                    <span v-if="isSoon(standalone,windows)" class="soon" v-translate>Coming soon!</span>
                </div>
                <h2>Linux</h2>
                <div>
                    <a href="#" @click.prevent.stop="loadSupport(standalone,linux)">VIPole Enterprise, Standalone edition</a>
                    <span v-if="isSoon(standalone,linux)" class="soon" v-translate>Coming soon!</span>
                </div>
            </div>

            <div  v-if="hasCluster">
                <h2>Windows</h2>
                <div>
                    <a href="#" @click.prevent.stop="loadSupport(cluster,windows)">VIPole Enterprise, Cluster edition</a>
                    <span v-if="isSoon(cluster,windows)" class="soon" v-translate>Coming soon!</span>
                </div>

                <h2>Linux</h2>
                <div>
                    <a href="#" @click.prevent.stop="loadSupport(cluster,linux)">VIPole Enterprise, Cluster edition</a>
                    <span v-if="isSoon(cluster,linux)" class="soon" v-translate>Coming soon!</span>
                </div>
            </div>
        </div>


        <form  method="post" id="downloadSupport" action="/support"></form>

    </div>
</template>

<script type="text/ecmascript-6">
    import {mapState, mapGetters, mapMutations} from "vuex";
    import {EDITIONS, OS} from "../classes/shop/action/const";
    const ajaxform = require('../mixins/ajax-form.vue');
    const loadingPage = require('../components/loadingPage.vue');

    export default {
        name: 'documents',
        components: {
            "loading-page": loadingPage
        },
        computed: {
            ...mapState("servers",["serverTypes"]),
            ...mapState(["lang"]),
            ...mapGetters("support",["getConfig"]),
            hasCluster: function() {
                return this.serverTypes[EDITIONS.CLUSTER];
            },
            hasStandalone: function() {
                return this.serverTypes[EDITIONS.STANDALONE];
            }


        },
        mixins: [ajaxform],
        created()
        {
            if(this.getConfig == null)
            {
                this.uploadInfo("/support/config", {}, (data) => {
                    this.setConfig(data);
                    this.isLoaded = true;
                });
            } else {
                this.isLoaded = true;
            }
        },
        data(){
            return {

                standalone: EDITIONS.STANDALONE,
                cluster: EDITIONS.CLUSTER,
                windows: OS.WINDOWS,
                linux: OS.LINUX,
                isLoaded: false,
                edition: "",
                os: ""
            }
        },
        methods: {
            ...mapMutations("support",["setConfig"]),
            getType(edition, os){
                return this.getConfig[edition][os][this.lang]["type"];
            },
            loadSupport(edition, os)
            {

                this.edition = edition;
                this.os = os;

                let type = this.getType(edition, os);
                if(type == 'soon' )
                {
                    alert(this.t('Coming soon!'));
                    return;
                }
                 else if(type == 'file')
                {
                    let form = document.getElementById("downloadSupport");
                    form.action = '/support/' + this.lang + '/' + edition + '/' + os + '/file';
                    form.submit();
                    return;
                } else if(type == 'html')
                {
                    let obj = {name: 'supportHtml', params: {edition: this.edition, os: this.os}};
                    this.$router.push(obj);
                    return;

                   //
                }
            },
            isSoon(edition, os){
                let type = this.getType(edition, os);
                return type == 'soon' || type == ""
            }

        },

        locales: {
            ru: {

                'Coming soon!': 'Скоро'
            }
        }

    }
</script>

<style scoped lang="scss">
    .soon{
        font-size: 12px;
    }
</style>

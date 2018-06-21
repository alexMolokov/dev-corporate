<template>
    <div id="user-download-page">

        <div v-if="hasStandalone">
            <h2>Windows</h2>
            <div><a href="/download/windows/standalone" target="_blank">VIPole Enterprise, Standalone edition</a></div>

            <h2>Linux</h2>
            <div><a href="/download/linux/standalone" target="_blank">VIPole Enterprise, Standalone edition</a></div>
        </div>

        <div v-if="hasCluster">
            <h2>Windows</h2>
            <div><a href="/download/windows/cluster" target="_blank">VIPole Enterprise, Cluster edition</a></div>

            <h2>Linux</h2>
            <div><a href="/download/linux/cluster" target="_blank">VIPole Enterprise, Cluster edition</a></div>
        </div>


    </div>

</template>

<script type="text/ecmascript-6">
    let userMenu = require('../components/userMenu.vue');
    import { mapState} from 'vuex';
    import {EDITIONS} from "../classes/shop/action/const";

    export default {
        name: 'download',
        components: {
            "user-menu": userMenu
        },
        computed: {
          ...mapState("servers",["serverTypes"]),
            hasCluster: function() {
              return this.serverTypes[EDITIONS.CLUSTER];
            },
            hasStandalone: function() {
                  return this.serverTypes[EDITIONS.STANDALONE];
            }
        },
        data(){
            return {
                
            }
        },

        locales: {
            ru: {



            }
        }

    }
</script>

<style></style>

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


        <div v-if="addons.length > 0" class="top-60">
            <h2 v-translate>Addons</h2>
            <div v-for="addon in addons" class="top-5"><a :href="addon.url" target="_blank">{{addon.name}}</a></div>


        </div>


    </div>

</template>

<script type="text/ecmascript-6">
    let userMenu = require('../components/userMenu.vue');
    var ajaxform = require('../mixins/ajax-form.vue');
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
                "addons" : []
            }
        },
        mixins: [ajaxform],
        created(){
            this.uploadInfo("/download/get-addons", {}, (data) => {
                for(let addon in data)
                {

                    this.addons.push({"id": addon, "url": data[addon]["url"],  "name": data[addon]["name"] });
                }

            })
        },

        locales: {
            ru: {
                    'Addons': 'Дополнения'


            }
        }

    }
</script>

<style></style>

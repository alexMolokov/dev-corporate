<template>
    <div class="v-user-cabinet-ver1" id="main-user-page">
        <user-menu/>



        <div id="modal-list">


        </div>

    </div>

</template>

<script type="text/ecmascript-6">
    const userMenu = require('../components/userMenu.vue');

    export default {
        name: 'documents',
        components: {
            "user-menu": userMenu
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

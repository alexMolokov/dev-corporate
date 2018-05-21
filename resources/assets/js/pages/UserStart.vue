<template>
    <div class="v-user-cabinet-ver1" id="main-user-page">
        <user-menu/>
        <router-view></router-view>
    </div>

</template>

<script type="text/ecmascript-6">
    const userMenu = require('../components/userMenu.vue');

    export default {
        name: 'UserStart',
        data(){
            return {
                
            }
        },
        components: {
            "user-menu": userMenu
        }

    }
</script>

<style>
    .v-user-cabinet-ver1 .partner-menu .partner-menu__item {
        flex-grow: 1;
    }

    .v-user-cabinet-ver1 .partner-menu .partner-menu__item:last-child {
        flex-grow: 5;
    }
    .flex-row .user-card:last-child {
        flex-grow: 1.5;
    }
</style>

<template>
    <div id="user-tickets-page">
        <ticket-list></ticket-list>

    </div>

</template>

<script type="text/ecmascript-6">
    let userMenu = require('../components/userMenu.vue');
     const ticketList = () => System.import('../components/tickets/ticketList.vue');

    export default {
        name: 'tickets',
        components: {
            "user-menu": userMenu,
            "ticket-list": ticketList
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

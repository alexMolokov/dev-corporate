<template>
    <div id="user-tickets-page">
        <ticket-list></ticket-list>

    </div>

</template>

<script>
    let userMenu = require('../components/userMenu.vue');
     const ticketList = require('../components/tickets/ticketList.vue');

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

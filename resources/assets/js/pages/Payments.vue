<template>
    <div id="user-payments-page">
        <payment-list></payment-list>
    </div>

</template>

<script type="text/ecmascript-6">
    let userMenu = require('../components/userMenu.vue');
    const paymentList = require('../components/payments/paymentList.vue');

    export default {
        name: 'payments',
        components: {
            "user-menu": userMenu,
            "payment-list": paymentList
        },
        computed: {

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



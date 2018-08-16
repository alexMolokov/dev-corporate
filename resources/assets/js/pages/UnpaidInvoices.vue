<template>
    <div id="user-payments-page">
        <unpaid-invoices></unpaid-invoices>
    </div>

</template>

<script type="text/ecmascript-6">
    let userMenu = require('../components/userMenu.vue');
    const unpaidInvoices = require('../components/payments/unpaidInvoicesList.vue');

    export default {
        name: 'payments',
        components: {
            "user-menu": userMenu,
            "unpaid-invoices": unpaidInvoices
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



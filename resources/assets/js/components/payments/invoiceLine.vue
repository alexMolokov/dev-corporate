<template>
    <div>
        <a :href="'shop/get-invoice/' + rowData['invoice_id']" target="_blank">{{rowData["invoice_id"]}}</a>
    </div>
</template>
<script>
    export default {
        props: {
            rowData: {
                type: Object,
                required: true
            }
        },
        methods: {

        }
    }
</script>

<style>

</style>
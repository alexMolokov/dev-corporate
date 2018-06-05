<template>
    <div>
        <router-link :to='{name : "ticket", params: {ticketNumber: rowData["ticketNumber"]}}'>{{rowData["ticketNumber"]}}</router-link>
    </div>
</template>
<script>
    export default {
        props: {
            rowData: {
                type: Object,
                required: true
            },
            rowIndex: {
                type: Number
            }
        },
        methods: {

        }
    }
</script>

<style>

</style>
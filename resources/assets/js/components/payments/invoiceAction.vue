<template>
    <div class="unpaid-action">
        <a href="#" @click.prevent.stop="ok(rowData['id'])"><span class="glyphicon glyphicon-ok"></span></a>
        <a href="#" @click.prevent.stop="cancel(rowData['id'])"><span class="glyphicon glyphicon-remove"></span></a>
        <a :href="'shop/get-invoice/' + rowData['id']" target="_blank"><span class="glyphicon glyphicon-print"></span></a>
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
                cancel: function(invoice_id)
                {
                    this.$parent.fireEvent("cancel-invoice", invoice_id);
                },
                ok: function(invoice_id)
                {
                    this.$parent.fireEvent("confirm-invoice", invoice_id);
                }
        }
    }
</script>

<style scoped="" lang="scss">
    .unpaid-action a {
        display: inline-block;
        margin-right: 15px;
    }
</style>
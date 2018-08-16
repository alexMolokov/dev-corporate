<template>
    <div>
        <section id="header-payments">
            <h2 v-translate>Unpaid invoices</h2>
        </section>
        <div class="table-responsive" style="border-top: 2px solid #f5f5f5;">
            <vuetable ref="vuetable" http-method="post"
                      :api-url="url"
                      :fields="fields"
                      :css="css"
                      :delete-row="deleteRow"
                      track-by="login"
            @vuetable:load-success="dataLoaded" @vuetable:cancel-invoice="cancelInvoice" @vuetable:confirm-invoice="confirmInvoice"></vuetable>
        </div>
        <error-inform :err="err" :state="state"></error-inform>
        <form-confirm-invoice v-if="showFormConfirmInvoice" @close="showFormConfirmInvoice = false" :invoice_id="currentInvoice" @confirm-invoice="invoiceDelete"></form-confirm-invoice>
        <form-cancel-invoice v-if="showFormCancelInvoice" @close="showFormCancelInvoice = false" :invoice_id="currentInvoice" @cancel-invoice="invoiceDelete"></form-cancel-invoice>
    </div>
</template>

<script>
    import Vuetable from '../vipole-table.vue';
    import ajaxform from '../../mixins/ajax-form.vue';
    import errorInform from '../../mixins/error-inform.vue';
    import {STATES} from  '../../mixins/states';
    const formConfirmInvoice = () => System.import('../formConfirmInvoice.vue');
    const formCancelInvoice = () => System.import('../formCancelInvoice.vue');

    export default {
        components: {
            Vuetable,
            "error-inform": errorInform,
            "form-confirm-invoice": formConfirmInvoice,
            "form-cancel-invoice": formCancelInvoice
        },
        data () {
            return {
                url: "/shop/invoices/unpaid/?lang=" + this.$store.state.lang,
                showFormConfirmInvoice:false,
                showFormCancelInvoice:false,
                currentInvoice: "",
                deleteRow: {},
                fields: [
                    {
                        name: 'id',
                        title: "#",
                        sortField: 'id'
                    },
                    {
                        name: "date",
                        title: this.t("Date"),
                        sortField: 'date_int'
                    },
                    {
                        name: "amount",
                        title: this.t("Amount"),
                        sortField: 'amount'
                    },
                    {
                        name: "currency",
                        title: this.t("Currency"),
                        sortField: 'currency'
                    },
                    {
                        name: "__component:InvoiceAction",
                        title: this.t("Action"),
                        sortField: 'id'
                    },

                    {
                        name: "date_int",
                        visible: false
                    },
                ],
                css: {
                    tableClass: "ui selectable celled stackable attached table vipole-team-admin",
                    loadingClass: 'loading',
                    ascendingIcon: 'glyphicon glyphicon-chevron-up vipole-team-admin__sort',
                    descendingIcon: 'glyphicon glyphicon-chevron-down vipole-team-admin__sort ',
                    detailRowClass: 'vuetable-detail-row',
                    handleIcon: 'grey sidebar icon',
                    sortableIcon: 'sortable-hidden'
                }
            }
        },
        mixins: [ajaxform],
        locales: {
            ru: {
                    'Unpaid invoices': "Неоплаченные счета",
                    'Amount': "Сумма",
                    'Currency': "Валюта",
                    'Date': "Дата",
                    'Action': 'Действие'
            }
        },
        methods: {
            dataLoaded(response)
            {
                let data = JSON.parse(response.request.response);

                if(!data.status)
                {
                    this.state = STATES.ERROR;
                    this.err.common = [];
                    this.err.common.push(data.message)
                }
            },
            cancelInvoice(invoice_id){
                    this.currentInvoice = invoice_id;
                    this.showFormCancelInvoice = true;
            },
            confirmInvoice(invoice_id){
                this.currentInvoice = invoice_id;
                this.showFormConfirmInvoice = true;

            },
            invoiceDelete(){
                this.deleteRow = {
                    "key": 'id',
                    "value": this.currentInvoice
                };
            }
        }
    }
</script>


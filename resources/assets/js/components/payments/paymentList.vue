<template>
    <div>
        <section id="header-payments">
            <h2 v-translate>Payments</h2>
        </section>
        <div class="table-responsive" style="border-top: 2px solid #f5f5f5;">
            <vuetable ref="vuetable" http-method="post"
                      :api-url="url"
                      :fields="fields"
                      :css="css"
                      track-by="login"
            @vuetable:load-success="dataLoaded"></vuetable>
        </div>
        <error-inform :err="err" :state="state"></error-inform>

    </div>
</template>

<script>
    import Vuetable from '../vipole-table.vue';
    import ajaxform from '../../mixins/ajax-form.vue';
    import errorInform from '../../mixins/error-inform.vue';
    import {STATES} from  '../../mixins/states';

    export default {
        components: {
            Vuetable,
            "error-inform": errorInform,
        },
        data () {
            return {
                url: "/shop/payments?lang=" + this.$store.state.lang,
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
                        name: "__component:InvoiceLine",
                        title: this.t("Invoice"),
                        sortField: 'invoice_id'
                    },
                    {
                        name: "date_int",
                        visible: false
                    },
                    {
                        name: "invoice_id",
                        visible: false
                    }

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
                    'Payments': "Платежи",
                    'Amount': "Сумма",
                    'Currency': "Валюта",
                    'Invoice': "Счет"
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
            }
        }
    }
</script>


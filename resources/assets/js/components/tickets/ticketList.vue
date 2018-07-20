<template>
    <div>
        <form-add-ticket  v-if="showFormAddTicket" @close="showFormAddTicket = false"></form-add-ticket>

        <section id="header-tickets">
            <h2 v-translate>My Tickets</h2>
        </section>
        <section id="tickets">
            <div>
                <div class="flex-row">
                    <div class="ticket__add">
                        <button class="btn btn-blue" v-translate @click="showFormAddTicket = true">Add Ticket</button>
                    </div>
                </div>
            </div>
        </section>
        <div class="table-responsive">
            <vuetable ref="vuetable" http-method="post"
                      :api-url="url"
                      :fields="fields"
                      :css="css"
                      track-by="login"
            ></vuetable>
        </div>

    </div>
</template>

<script>
    import Vuetable from '../vipole-table.vue';
    const FormAddTicket  = () => System.import('./formAddTicket.vue');

    export default {
        components: {
            Vuetable,
            FormAddTicket
        },
        data () {
            return {
                showFormAddTicket: false,
                url: "/ticket/list?lang=" + this.$store.state.lang,
                fields: [
                    {
                        name: '__component:TicketLine',
                        title: "#",
                        sortField: 'ticketNumber'
                    },
                    {
                        name: "date",
                        title: this.t("Date"),
                        sortField: 'date_int'
                    },
                    {
                        name: "department",
                        title: this.t("Department"),
                        sortField: 'department'
                    },
                    {
                        name: "theme",
                        title: this.t("Theme"),
                        sortField: 'theme'
                    },
                    {
                        name: "status",
                        title: this.t("Status"),
                        sortField: 'status'
                    },
                    {
                        name: "lastUpdate",
                        title: this.t("Last Updated"),
                        sortField: 'lastUpdate_int'
                    },
                    {
                        name: "lastUpdate_int",
                        visible: false
                    },
                    {
                        name: "date_int",
                        visible: false
                    },
                    {
                        name: "ticketNumber",
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
        locales: {
            ru: {
                    'My Tickets': "Мои тикеты",
                    'Status': "Статус",
                    'Last Updated': "Последнее изменение",
                    'Theme': "Тема",
                    "Department": "Отдел",
                    "Date": "Дата",
                    "Add Ticket": "Добавить тикет"
            }
        },
        methods: {

        }
    }
</script>

<style scoped="">
    .ticket__add {
        margin-bottom: 0px;
        text-align: right;
    }

    #tickets {
        background-color: #f5f5f5;
        padding: 10px;
    }
</style>

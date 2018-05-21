<template>
    <div>
        <div class="flex-row flex_user_card">
            <div class="user-card">
                <div class="head flex-row">
                    <div><div class="user-card_icon user-card_profile" v-translate>Profile</div></div>
                 </div>

                <div class="info">
                    <div class="info_section">
                        <div>
                            <div class="info-head" v-translate>Customer ID</div>
                            <div class="info-value">{{user.id}}</div>
                        </div>
                        <div>
                            <div class="info-head" v-translate>Company</div>
                            <div class="info-value"><span>{{user.name}}</span> <a href="#"><span aria-hidden="true" class="glyphicon glyphicon-pencil blue"></span></a>
                            </div>
                        </div>
                        <div>
                            <div class="info-head" v-translate>Password</div>
                            <div class="info-value"><span>**************</span> <a href="#"><span aria-hidden="true" class="glyphicon glyphicon-pencil blue"></span></a>
                            </div>
                        </div>

                    </div>
                    <div class="info_section">
                        <div>
                            <div class="info-head"><span v-translate>Primary contact</span>  <a href="#" class="ml-10"><span class="glyphicon glyphicon-pencil blue" aria-hidden="true"></span></a></div>
                            <div class="group-attr">
                                <div class="info-value">
                                    <span v-translate>Full name:</span> <span style="margin-left: 5px">{{user.primary.lastName}} {{user.primary.firstName}}</span>
                                </div>
                                <div class="info-value top-10">
                                    <span v-translate>Job title:</span> <span>{{user.primary.jobTitle}}</span>
                                </div>
                                <div class="info-value top-10">
                                    <span v-translate>Email:</span> <span>{{user.primary.email}}</span>
                                </div>
                            </div>
                        </div>
                   </div>

                </div>
            </div>



            <div class="user-card">
                <div class="head flex-row">
                    <div><div class="user-card_icon user-card_balance" v-translate>Contacts</div></div>
                 </div>
                <div class="info">
                    <div class="info_section">
                        <div>
                            <div class="info-head"><span v-translate>Billing details</span>  <a href="#" class="ml-10"><span class="glyphicon glyphicon-pencil blue" aria-hidden="true"></span></a></div>
                            <div class="group-attr">
                                <div class="info-value">
                                    <span v-translate>Address:</span> <span style="margin-left: 5px">{{user.billing.address}}</span>
                                </div>
                                <div class="info-value top-10">
                                    <span v-translate>Phone:</span> <span>{{user.billing.phone}}</span>
                                </div>
                                <div class="info-value top-10">
                                    <span v-translate>Full name:</span> <span>{{user.billing.lastName}} {{user.billing.firstName}}</span>
                                </div>
                                <div class="info-value top-10">
                                    <span v-translate>Email:</span> <span>{{user.billing.email}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info_section">
                        <div>
                            <div class="info-head"><span v-translate>Technical contact</span>  <a href="#" class="ml-10"><span class="glyphicon glyphicon-pencil blue" aria-hidden="true"></span></a></div>
                            <div class="group-attr">
                                <div class="info-value">
                                    <span v-translate>Full name:</span> <span style="margin-left: 5px">{{user.tech.lastName}} {{user.tech.firstName}}</span>
                                </div>
                                <div class="info-value top-10">
                                    <span v-translate>Job title:</span> <span>{{user.tech.jobTitle}}</span>
                                </div>
                                <div class="info-value top-10">
                                    <span v-translate>Email:</span> <span>{{user.tech.email}}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>





        <div id="modal-list">


        </div>

    </div>

</template>

<script type="text/ecmascript-6">
    import { mapState } from 'vuex'
    const userMenu = require('../components/userMenu.vue');

    export default {
        name: 'login',
        data(){
            return {
                
            }
        },
        components: {
            "user-menu": userMenu
        },
        computed: mapState({
            user: state => state.user
        }),
        methods: {

        },
        locales: {
            ru: {
                'Profile': 'Профиль',
                'Company': 'Компания',
                'Primary contact': 'Основной контакт',
                'Full name:': 'Имя:',
                'Job title:': 'Должность:',
                'Password': 'Пароль:',
                'Customer ID': "ID Клиента",
                'Address:': 'Адрес:',
                'Technical contact': 'Технический контакт',
                'Phone:': 'Телефон:',
                'Contacts': 'Контакты',
                'Billing details': 'Платежная информация',
                'My Account': 'Мой аккаунт',
                'Tickets': 'Тикеты',
                'Documents': 'Документы',


            }
        }

    }
</script>

<style>
    .group-attr .info-value span:last-child {
        margin-left: 10px;
    }
    .group-attr .info-value span:first-child {
        color: #666;
    }
    .info-head .glyphicon-pencil {
        font-size: 12px;
        display: inline-block;
        margin-left: 10px;
    }

    .v-user-cabinet-ver1 .partner-menu .partner-menu__item {
        flex-grow: 1;
    }

    .v-user-cabinet-ver1 .partner-menu .partner-menu__item:last-child {
        flex-grow: 5;
    }
    .flex-row .user-card:last-child {
        flex-grow: 1.5;
    }
</style>

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
                            <div class="info-value"><span>{{user.name}}</span> <a href="#" @click.prevent.stop="showFormChangeCompanyName = true"><span aria-hidden="true" class="glyphicon glyphicon-pencil blue"></span></a>
                            </div>
                        </div>
                        <div>
                            <div class="info-head" v-translate>Password</div>
                            <div class="info-value"><span>**************</span> <a href="#"  @click.prevent.stop="showFormChangePassword = true"><span aria-hidden="true" class="glyphicon glyphicon-pencil blue"></span></a>
                            </div>
                        </div>

                    </div>
                    <div class="info_section">
                        <div>
                            <div class="info-head"><span v-translate>Primary contact</span>  <a href="#" class="ml-10" @click.prevent.stop="showFormChangeMainContact=true"><span class="glyphicon glyphicon-pencil blue" aria-hidden="true"></span></a></div>
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
                            <div class="info-head"><span v-translate>Billing details</span>  <a href="#" class="ml-10" @click.prevent.stop="showFormChangeDetails = true"><span class="glyphicon glyphicon-pencil blue" aria-hidden="true"></span></a></div>
                            <div class="group-attr">
                                <div class="info-value">
                                    <span v-translate>Address:</span> <span style="margin-left: 5px">{{user.billing.address}}</span>
                                </div>
                                <div class="info-value top-10">
                                    <span v-translate>Phone:</span> <span>{{user.billing.phone}}</span>
                                </div>
                                <div class="info-value top-10">
                                    <span v-translate>Email:</span> <span>{{user.billing.email}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info_section">
                        <div>
                            <div class="info-head"><span v-translate>Technical contact</span>  <a href="#"  @click.prevent.stop="showFormChangeTechContact = true"class="ml-10"><span class="glyphicon glyphicon-pencil blue" aria-hidden="true"></span></a></div>
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

        <div class="flex-row flex_user_card server-license-info" v-if="isLoaded">
            <div class="user-card">
                <div class="head flex-row">
                    <div><div class="user-card_profile"><span v-translate>Software and services</span> <router-link :to="{name: 'shop', params:{'makeDeal':'new'}}" class="btn btn-blue btn-middle" v-translate>New Order</router-link></div>  </div>
                </div>
                <div class="product-license">
                    <div v-translate>Product/License</div>
                </div>


                <div v-for="server in getServers">
                    <div class="flex-row server-info" >
                        <div>
                            <div class="server-info-name">{{server.name}}</div>
                            <div class="server-info-id"><span v-translate>Server ID</span><span>{{server.id}}</span> </div>
                            <div><span v-translate>Certificate</span>
                                <span  v-if="!server.hasCertificateRequest"><a href="#" @click.prevent.stop="showFormCertificateRequest = true; currentServer = server.id" v-translate>Upload request</a></span>
                                <span v-if="server.hasCertificate"><a :href="'/servers/certificate/download/' + server.id" target="_blank">Download</a></span>
                            </div>
                            <div v-if="!server.hasLicenseRequest"><span v-translate>License</span>  <a href="#" @click.prevent.stop="showFormLicenseRequest = true; currentServer = server.id" v-translate>Upload request</a></div>
                            <div><span v-translate>Release</span>  <span>{{server.release}}</span></div>
                            <div><span v-translate>OS</span>  <span>{{server.os}}</span></div>
                            <div><span v-translate>Server modules</span> <span v-if="server.serverModules.length == 0">no</span><span v-else>{{server.serverModules.join(",")}}</span></div>
                            <div><span v-translate>Added</span>  <span>{{server.getAdded()}}</span></div>
                        </div>
                        <div class="server-info-add-license">
                            <router-link :to="{name: 'shop', params:{'makeDeal':'new-license', 'server': server.id}}" v-translate>New licence</router-link>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <th class="blue" v-translate>User Licenses</th>
                            <th v-translate>Users</th>
                            <th v-translate>Valid till</th>
                            <th v-translate>Status</th>
                            <th>&nbsp;</th>
                            </thead>
                            <tbody>
                            <tr v-for="(license, i)  in server.licenses">
                                <td>
                                    <div class="license-key"><span>{{i+1}} <span v-translate>License key</span>:</span> <a target="_blank" :href="'/servers/license/download/' + license.id"  v-if="server.hasLicenseRequest && license.signed" v-translate>download</a></div>
                                    <div class="license-number"><span>ID:</span> <span>{{license.id}}</span></div>
                                    <div class="license-date"><span v-translate>Added:</span> <span>{{license.getAdded()}}</span></div>
                                </td>
                                <td>{{license.users}}</td>
                                <td>{{license.getValidTill()}}</td>
                                <td><span v-if="license.valid" v-translate>active</span><span v-else v-translate>payment required</span></td>
                                <td class="license-links">
                                    <router-link  v-if="license.getValidTill() != ''" :to="{name: 'shop', params:{'makeDeal':'renew', 'server': server.id, 'license':license.id }}" v-translate>Renew</router-link>
                                    <router-link v-if="license.valid" :to="{name: 'shop', params:{'makeDeal':'upgrade', 'server': server.id, 'license':license.id}}"  v-translate>Upgrade</router-link>
                                </td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </div>


        <div id="modal-list">
            <form-change-password v-if="showFormChangePassword" @close="showFormChangePassword = false"></form-change-password>
            <form-change-company-name  v-if="showFormChangeCompanyName" @close="showFormChangeCompanyName = false"></form-change-company-name>
            <form-change-details  v-if="showFormChangeDetails" @close="showFormChangeDetails = false"></form-change-details>
            <form-change-main-contact  v-if="showFormChangeMainContact" @close="showFormChangeMainContact = false"></form-change-main-contact>
            <form-change-tech-contact  v-if="showFormChangeTechContact" @close="showFormChangeTechContact = false"></form-change-tech-contact>
            <form-license-request  v-if="showFormLicenseRequest" @close="showFormLicenseRequest = false" :server="currentServer"></form-license-request>
            <form-certificate-request v-if="showFormCertificateRequest" @close="showFormCertificateRequest = false" :server="currentServer"></form-certificate-request>
        </div>



    </div>

</template>

<script type="text/ecmascript-6">
    import { mapState, mapGetters, mapMutations } from 'vuex'
    import {LocalServer} from "../classes/LocalServer";
    import {License} from "../classes/License";
    const ajaxform = require('../mixins/ajax-form.vue');
    const userMenu = require('../components/userMenu.vue');
    const formChangePassword  = () => System.import('../components/formChangePassword.vue');
    const formChangeCompanyName = () => System.import('../components/formChangeCompanyName.vue');
    const formChangeCompanyDetails = () => System.import('../components/formChangeDetails.vue')
    const formChangeTechContact = () => System.import('../components/formChangeTechContact.vue');
    const formChangeMainContact = () => System.import('../components/formChangeMainContact.vue');
    const formLicenseRequest = () => System.import('../components/formLicenseRequest.vue');
    const formCertificateRequest = () => System.import('../components/formCertificateRequest.vue');

    export default {
        name: 'login',
        data() {
            return {
                    currentServer: "",
                    showFormChangePassword:false,
                    showFormChangeCompanyName:false,
                    showFormChangeContact:false,
                    showFormChangeDetails:false,
                    showFormChangeTechContact:false,
                    showFormChangeMainContact:false,
                    showFormLicenseRequest:false,
                    showFormCertificateRequest: false

            }
        },
        components: {
            "user-menu": userMenu,
            "form-change-password": formChangePassword,
            "form-change-company-name": formChangeCompanyName,
            "form-change-details": formChangeCompanyDetails,
            "form-change-tech-contact":formChangeTechContact,
            "form-change-main-contact":formChangeMainContact,
            "form-license-request": formLicenseRequest,
            "form-certificate-request": formCertificateRequest,
        },
        computed: {
            ...mapState({user: state => state.user}),
            ...mapGetters("servers",["getServers", "isLoaded"])
        },
        mixins: [ajaxform],
        created()
        {
            if(!this.isLoaded)
            {
                this.uploadInfo("/servers/get-servers", {}, (data) => {
                    for(let serverId in data)
                    {
                        let server = new LocalServer(data[serverId]);

                        for(let licenseId in data[serverId]["licenses"])
                        {
                            server.addLicense(new License(data[serverId]["licenses"][licenseId]));
                        }
                        this.addServer(server);
                    }

                    this.setLoaded();
                });
            }
        },
        methods: {
            ...mapMutations("servers",["setLoaded", "addServer"]),
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
                "Software and services": "",
                "Product/License": "Сервер/Лицензия",
                "Certificate": "Сертификат",
                "Upload request": "Загрузить запрос",
                "Download": "Скачать",
                "License": "Лицензия",
                "Release": "Релиз",
                "OS": "ОС",
                "Server modules": "Модули",
                "Added": "Добавлен",
                "User Licenses": "Лицензии",
                "Users": "Пользователи",
                "Valid till": "Годен до",
                "Status": "Статус",
                "Added:": "Добавлена:",
                "Renew": "Обновить",
                "Upgrade": "Улучшить",
                "download": "Загрузить",
                "Server ID": "Сервер ID",
                "License key": "ID лицензии",
                "Software and services": "Программное обеспечение",
                "New Order": "Новый заказ",
                "New licence": "Новая лицензия",
                "active": "Активна",
                "payment required": "Требуется оплата",
            }
        }

    }
</script>

<style lang="scss" scoped="">
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

    .license-links {
        a:last-child {
            margin-top: 10px;
        }
        a:first-child {
            margin-top: 0px !important;
        }
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

    .server-info {
        padding: 10px 20px 10px 40px;

        @media (max-width: 767px)
        {
            display: block;
        }

        > div {
            margin-bottom: 0px;
        }
        >div > div {
            padding: 2px 10px;
            color:#999;

            span {
                display: inline-block;
                margin-right: 5px;
            }

            span:first-child:after {
                content: ":";
                margin-right: 5px;
            }
        }

        .server-info-name {
            color: #000;
            font-size: 18px;
            padding: 2px 0px;
        }
        .server-info-id {

        }
        .server-info-add-license {
            text-align: right;
            @media (max-width: 767px)
            {
                text-align: left;
                margin-left: 10px;
                padding: 2px 0px;
            }
        }
    }

    .server-license-info {

            .license-links {
                a {
                    display: block;
                }
            }

            .head.flex-row {
                a {margin: -3px 0 0 20px}
                >* {margin-bottom: 0px}

                @media (max-width: 600px)
                {
                    a.btn {min-width: 100px;}
                }

                @media (max-width: 400px)
                {
                    height: auto;
                    span,a {
                        display: block;
                    }
                    span {margin-bottom: 10px;}
                    a {width: 150px; margin-left: 0px;}
                }
            }
            .product-license {
                width: 100%;
                font-size: 18px;
                border-bottom: 1px solid #eee;
                color: #000;
            >div {
                padding: 10px 20px 10px 40px
            }
            }

            .table {
            th {
                font-size: 18px;
                font-weight: normal;
                color: #000;
                text-align: center;

            &:first-child {
                 text-align: left;
             }

            &.blue {
                 color: #00a0c8;
             }
            }


            tbody {

            tr {
            >td {
                text-align: center;
            &:first-child {
                 text-align: left;
             }
            }

            }

            .license-key {
            span {
                color: #000;
                font-weight: 700;
                font-size: 14px;
                padding-bottom: 5px;
            }
            a {
                font-size: 14px;
            }
            }

            .license-number, .license-date {
                color: #999;
                font-weight: 500;
                font-size: 14px;
                padding: 2px 15px;
            }


            }

            }

            .table-responsive {
                padding: 20px 0px 10px 40px
            }
    }
</style>

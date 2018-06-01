<template>
    <div id="ticket-page">
        <div>
                <h2><span v-translate>Ticket</span># {{ticketNumber}}</h2>
                <div v-if="loading" class="alert alert-warning fade in" v-translate>Loading info...</div>


              <div  v-if="!loading">
                    <section id="header-ticket">
                        <div>
                        <div class=mbb-20>
                            <h3>{{ticket.theme}}</h3>
                        </div>

                        <div class="flex-row header-ticket-info">
                            <div>
                                <div v-translate>Date</div>
                                <div>{{ticket.date}}</div>
                            </div>
                            <div>
                                <div v-translate>Department</div>
                                <div>{{ticket.department}}</div>
                            </div>
                            <div>
                                <div v-translate>Priority</div>
                                <div>Normal</div>
                            </div>
                            <div>
                                <div v-translate>Status</div>
                                <div>{{ticket.status}}</div>
                            </div>
                        </div>
                    </div>
                    </section>

                  <div class="header-ticket-buttons top-20 mbb-10">
                      <router-link :to="{name:'tickets'}" class="btn btn-blue"><span v-translate>Back</span></router-link>
                      <a href="#" @click.prevent.stop="showFormAnswer = true" class="btn btn-blue btn-primary"  v-translate>Reply</a>
                  </div>

                    <div class="articles" v-for="article in ticket.articles">
                        <div class="article">
                            <div @click="changeArticle(article.id)" style="cursor:pointer">
                                {{article.date}}  <span class="caret" v-if="currentArticle != article.id"></span>
                            </div>
                            <div v-show="currentArticle == article.id">
                                <div v-if="article.attachments.length > 0" class="attachments" v-for="attachment in article.attachments">
                                    <a :href="'/ticket/attachment/' + ticketNumber + '/' + article.id + '/' + attachment.filename " target="_blank">{{attachment.filename}} ({{attachment.size}})</a>
                                </div>
                                <div class="body">
                                    <pre>{{article.body}} </pre>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="header-ticket-buttons top-10">
                        <router-link :to="{name:'tickets'}" class="btn btn-blue"><span v-translate>Back</span></router-link>
                        <a href="#" class="btn btn-blue btn-primary" @click.prevent.stop="showFormAnswer = true" v-translate>Reply</a>
                    </div>
             </div>



        </div>
    </div>


</template>

<script type="text/ecmascript-6">
    let userMenu = require('../components/userMenu.vue');
    import ajaxform from '../mixins/ajax-form.vue';


    export default {
        name: 'ticket',
        props: {
          ticketNumber: {type: String},
        },
        mixins: [ajaxform],
        created(){
            this.uploadInfo("/ticket/get/" + this.ticketNumber, {}, (data) => {
                this.ticket = data;
                this.loading = false;
                this.currentArticle = this.ticket.articles[0].id;
            })
        },
        components: {
            "user-menu": userMenu,
        },
        data(){
            return {
                showFormAnswer: false,
                loading: true,
                currentArticle: "",
                ticket: {

                }
            }
        },
        methods: {
            changeArticle: function(id)
            {
                this.currentArticle = id;
            }
        },

        locales: {
            ru: {
                "Ticket": "Тикет",
                "Loading info...": "Загрузка информации",
                "Back": "Назад",
                "Reply": "Ответить"
            }
        }

    }
</script>

<style scoped="" lang="scss">
    .header-ticket-info {
        padding: 10px;
        border: 1px solid #eee;
        border-radius: 5px;
        background-color: #f5f5f5;
        text-align: center;

    > div {
        padding: 0 10px;
    }
    >div > div:first-child {
        font-size: 18px;
        padding: 10px 0;
    }

    >div > div:last-child {
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #eee;
        font-size: 14px;
        padding: 6px 0;
    }

    }
    .header-ticket-buttons {
        padding: 10px 0;

    a {min-width: 120px; margin-right: 10px}
    }

    .warning {
        background-color: #f0ad4e;

    }

    .articles {

        pre {
            background-color: #fff;
            border: none;
            padding-left: 0px;

        }
        >div > div:first-child {
        background-color: #f5f5f5;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        border-top: 1px solid #eee;
        font-size: 15px;
        padding: 6px;
        text-align: right;
    }

    .attacments {
    a {display: inline-block; padding: 0 10px 10px 0}

    }

    >div > div:last-child {
        background-color: #fff;
        border: 1px solid #eee;
        font-size: 15px;
        padding: 15px;
        text-align: left;
    }
    }

</style>

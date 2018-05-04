<template>
    <section class="partner-menu">
        <input id="partner-menu__checkbox" type="checkbox">
        <div>
            <div class="wrapper">
                <div class="partner-menu__item" :class="{ active: currentRoute == 'user' }"><router-link :to="{name: 'user'}" v-translate>My Account</router-link></div>
                <div class="partner-menu__item" :class="{ active: currentRoute == 'download' }"><router-link :to="{name: 'download'}">Download</router-link></div>
                <div class="partner-menu__item" :class="{ active: currentRoute == 'tickets' }"><router-link :to="{name: 'tickets'}" v-translate>Tickets</router-link></div>
                <div class="partner-menu__item" :class="{ active: currentRoute == 'documents' }"><router-link :to="{name: 'documents'}" v-translate>Documents</router-link></div>
            </div>
            <label for="partner-menu__checkbox"></label>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'userMenu',
    props: {},
    computed: {
        'currentRoute': function()
        {
            return this.$route.name;
        }
    },
    methods: {

    },
    locales: {
        ru: {
            'My Account': 'Мой аккаунт',
            'Tickets': 'Тикеты',
            'Documents': 'Документы'
        }
    }
}
</script>




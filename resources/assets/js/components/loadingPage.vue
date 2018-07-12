<template>
    <div class="alert alert-warning fade in"><slot name="loading"  v-translate>Loading info...</slot></div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'loadingPage',
    props: {},
    data(){
        return {

        }

    },

    methods: {

    },
    locales: {
        ru: {
            "Loading info...": "Загрузка информации"
        }
    }
}
</script>




<template>
    <div class="v-user-cabinet-ver1 support-body-page">
        {{edition}}
        {{id}}

body page1

    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        name: 'SupportBody',
        props: {
            edition: {type: String},
            os: {type: String},
            id: {type: String}
        },
        created(){
            alert(this.id);
            console.log('created');
        },
        data(){
            return {
                loadPage: false
            }
        },
        components: {
            //"user-menu": userMenu
        }

    }
</script>

<style lang="scss" scoped="">

</style>

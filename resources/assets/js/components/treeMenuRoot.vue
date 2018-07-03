<template>
    <span>
    <tree-menu
            class="item"
            v-for="(model, index) in model.children"
            :key="index"
            :model="model">
    </tree-menu>
    </span>
</template>


<script type="text/ecmascript-6">
    const treeMenu = require('../components/treeMenu.vue');

    export default {
        name: 'tree-menu-root',
        props: {
            model: Object
        },
        components: {
            "tree-menu": treeMenu
        },
        data: function () {
            return {
                open: false
            }
        },
        computed: {
            isFolder: function () {
                return this.model.children &&
                    this.model.children.length
            }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            }



        }
    }
</script>

<style lang="scss" scoped="">

</style>

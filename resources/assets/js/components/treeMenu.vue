<template>
          <span>
          <li v-if="!model.root"  @click="toggle(model.id)" :class="{'open': open}" style="cursor:pointer">
             <span v-if="isFolder"><span class="glyphicon glyphicon-chevron-down"></span> </span>

              <a href="#"  @click.prevent.stop="toggle(model.id)">{{ model.name }}</a>
            <ul v-show="open" v-if="isFolder">
              <tree-menu
                class="item"
                v-for="(model, index) in model.children"
                :key="index"
                :model="model"
                @clickmenu="clickMenu"
              >
              </tree-menu>
            </ul>
          </li>
        <span v-if="model.root">
        <tree-menu
                class="item"
                v-for="(model, index) in model.children"
                :key="index"
                :model="model"
                 @clickmenu="clickMenu"
                >
        </tree-menu>
        </span>
       </span>
</template>


<script type="text/ecmascript-6">
    //const userMenu = require('../components/userMenu.vue');

    export default {
        name: 'tree-menu',
        props: {
            model: Object
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
            clickMenu: function(id)
            {
                this.$emit('clickmenu', id);
             },
            toggle: function (id) {
                this.$parent.$emit('clickmenu', id);
                if (this.isFolder) {
                    this.open = !this.open
                }
            },

        }
    }
</script>

<style lang="scss" scoped="">

    .glyphicon-chevron-down {
        font-size:10px;
        font-weight: 400;
        color: #888;
        transform: rotate(270deg);

    }
    .open {
        .glyphicon-chevron-down {
            transform: rotate(0deg);
        }
    }
 </style>
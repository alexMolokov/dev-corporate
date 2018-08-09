<template>
    <section id="search-section">
        <form class="search" role="search" @submit.prevent.stop="searchQuery">
            <input id="query" class="ui-autocomplete-input" name="query" v-model="query" placeholder="SEARCH" autocomplete="off" value="" type="search">
            <input src="/static/common/img/icons/icon-search.png" width="14" height="14" type="image">
        </form>
    </section>
</template>
<script>
export default {
  name: 'form-search',
  data() {
      return {
          query: ""
      }
  },
  methods: {
      searchQuery: function()
      {
          if(this.query.trim() == "")
          {
              alert(this.t("Please enter query!"));
              return;
          }
        this.$emit("search-section:search", this.query);
      }

  },
    locales: {
        ru: {
            "Please enter query!": "Пожалуйста введите запрос!",
        }
    }
}
</script>
<style scoped>

</style>



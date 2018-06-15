<template>
    <modal-window :id="id"  @close="close" class="in"  style="display: block" :show="true">
        <div slot="title" v-translate>Get trial</div>
        <loading-inform v-bind:state="state" @close="close">
            <div slot="ok-message-redirect" v-translate>Redirecting to payment details...</div>
            <div slot="buttons"></div>
        </loading-inform>        
        <form :url="url" @submit.prevent.stop>
            <div class="row">
                  <div class="col-md-12">
                          <div class="info" v-translate>Click NEXT to get trial</div>
                  </div>
             </div>
            <error-inform v-bind:err="err" v-bind:state="state"></error-inform>
            
            <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" @click="validate" v-translate >Next</button>
            </div>
        </form>  
    </modal-window>
</template>
<script>
import modalWindow from './modalWindow.vue';
var ajaxform = require('../mixins/ajax-form.vue');
var errorInform = require('../mixins/error-inform.vue');
var loadingInform = require('../mixins/loading-inform.vue');

export default {
  name: 'form-get-trial',
  props: {

    },
  components: {
     "modal-window": modalWindow,
     "error-inform": errorInform,
     "loading-inform": loadingInform
  },    
  data () {
    return {
      id: "corporateGetTrial",
      url: "user/get-trial",
      redirect: false
     }
  },
  mixins: [ajaxform],
   locales: {
    	ru: {

         }
    },    
  methods: {
      validate: function()
      {
          let data = {};
          this.send(this.url, data);
      }
  }          
}
</script>   



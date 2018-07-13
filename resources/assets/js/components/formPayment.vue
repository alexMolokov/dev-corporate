<template>
    <modal-window :id="id"  @close="close" class="in"  style="display: block" :show="true">
        <div slot="title" v-translate>Payment options</div>
        <loading-inform v-bind:state="state" @close="close">
            <div slot="ok-message-redirect" v-translate>Redirecting to payment details...</div>
            <div slot="buttons"></div>
        </loading-inform>        
        <form :url="url" @submit.prevent.stop>
             <payment-methods @choosen="choosen"></payment-methods>
            <div class="row">
                  <div class="col-md-12">
                          <hr>
                          <div class="info" v-translate>By clicking NEXT you will be redirected to proceed with payment details</div>
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
var paymentMethods = require('./paymentMethods.vue');

export default {
  name: 'form-payment',
  props: {
      purchase: {type: Object},
    },
  components: {
     "modal-window": modalWindow,
     "error-inform": errorInform,
     "loading-inform": loadingInform,
     "payment-methods": paymentMethods,
  },    
  data () {
    return {
      id: "corporatePayment",
      payment_method: ""

     }
  },
  mixins: [ajaxform],
   locales: {
    	ru: {

         }
    },    
  methods: {
      choosen: function(data){
          this.payment_method = data.method;
      },
      validate: function()
      {

          let data = {...this.purchase, payment_method: this.payment_method};

          this.send(this.purchase.url, data, (data) => {

          });

      }
  }          
}
</script>   



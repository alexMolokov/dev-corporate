<template>
    <modal-window :id="id"  @close="close" class="in"  style="display: block" :show="true">
        <div slot="title" v-translate>Payment options</div>
        <loading-inform v-bind:state="state" @close="close" v-show="payment_method != 'wiretransfer'">
            <div slot="ok-message-redirect" v-translate>Redirecting to payment details...</div>
            <div slot="buttons"></div>
        </loading-inform>
        <loading-inform v-bind:state="state" @close="close" v-show="payment_method == 'wiretransfer'">
            <div slot="ok-message-redirect">
                <div><span v-translate>Invoice</span> #{{invoice_id}} <span  v-translate>has been created</span>.</div>
                <div style="font-size:14px; font-weight: 400;line-height: 1.5; text-align: left;" class="top-20">
                    <div><span v-translate>We have sent it to email</span> - <b>{{user.billing.email}}</b></div>
                    <div class="top-20">
                        <p v-translate>To download invoice you can:</p>
                        <ul class="square">
                            <li><span><span v-translate>Click the</span> <a :href="'/shop/get-invoice/' + invoice_id" v-translate>following link</a></span></li>
                            <li><span><span v-translate>Visit the</span> "<router-link :to="{name: 'unpaid_invoices'}"  v-translate>Unpaid invoices</router-link>" <span v-translate>page</span></span></li>
                        </ul>
                  </div>
                </div>
            </div>
            <div slot="buttons"></div>
        </loading-inform>

        <form :url="url" @submit.prevent.stop>
             <payment-methods @choosen="choosen" @forbidden="forbidden" @billingdetails="billingDetails"></payment-methods>
            <div class="row">
                  <div class="col-md-12">
                          <hr>
                          <div class="info" v-translate>By clicking NEXT you will be redirected to proceed with payment details</div>
                  </div>
             </div>
            <error-inform v-bind:err="err" v-bind:state="state"></error-inform>
            
            <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" @click="validate" v-translate :disabled="forbiddenSend">Next</button>
            </div>
        </form>  
    </modal-window>
</template>
<script>
import modalWindow from './modalWindow.vue';
import {STATES} from "../mixins/states";
import {mapState} from "vuex";
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
      payment_method: "",
      redirect: true,
      forbiddenSend: false,
      invoice_id: ""

     }
  },
 computed: {
     ...mapState({user: state => state.user})
 },
  mixins: [ajaxform],
   locales: {
    	ru: {
                "Payment options": "Выбор оплаты",
                "Redirecting to payment details...": "Перенаправляем на страницу платежной системы ...",
                "Invoice": "Счет",
                "has been created": "создан",
                "We have sent it to email": "Счет выслан на email",
                "To download invoice you can:": "Для того чтобы загрузить счет вы можете",
                "Click the": "Перейти по ",
                "following link": "нижеследующей ссылке",
                "Visit the": "Перейти на страницу",
                "page": " "

         }
    },    
  methods: {
      billingDetails: function () {
        this.$emit("billingdetails");
      },
      forbidden: function(data){
          this.forbiddenSend = data;
      },
      choosen: function(data){
          this.payment_method = data.method;
      },
      validate: function()
      {
          let data = {...this.purchase, payment_method: this.payment_method};

          this.invoice_id = "";
          if(this.payment_method == "wiretransfer")
          {

              this.send(this.purchase.url + "/invoice", data, (data) => {
                  this.state = STATES.REDIRECT;
                  this.invoice_id = data;

              }, (data) => {
                  console.log("error");
              });

          }  else {
              this.send(this.purchase.url, data, (data) => {
                  this.state = STATES.REDIRECT;
                  document.location.href = data;
              }, (data) => {
                  console.log("error");
              });
          }




      }
  }          
}
</script>

<style scoped="" lang="scss">
    ul.square {
        margin: 0px 0px;
        li{
            list-style: none;
            display: flex;

            > span {
                display: block;
                margin: 0 0 0 22px;
                line-height: 30px;
            }
        }

        li:before {
            content: "\25a0";
            color: #00a0c8;
            font-size: 15px;
            font-weight: bold;
            display: block;
            line-height: 30px;
        }
    }
</style>



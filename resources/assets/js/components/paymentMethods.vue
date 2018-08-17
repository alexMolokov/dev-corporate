<template>
<div>
    <div class="row choose_payment">
         <input type="hidden" name="payment_method"  v-model="choosen.value">
         <div class="col-xs-4 pds0" v-for="payment in payments" v-if="show(payment)">
            <div class="choose" v-bind:class="{active: payment.name == choosen.name}">

               <img v-if="payment.img" v-bind:alt="t(payment.name)" :title="t(payment.name)" v-bind:src="payment.img" class="img-responsive" @click="choose(payment)">
               <div v-if="!payment.img" v-translate @click="choose(payment)">{{ payment.name }}</div>
            </div>
        </div>
    </div>
    <div class="alert alert-danger" v-if="messageType == 'Wire transfer' && !isFillingBillingInfo">
        <span v-translate>To pay by bank transfer please complete the required fields in</span> <a href='#' @click.prevent.stop='billingDetails' v-translate>Billing details and contacts</a> <span v-translate>in your profile</span>.
    </div>
</div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  name: 'payment-methods',
  props: {
      lang: {type: String, default: "en"}

  },
  computed: {
        ...mapGetters(["isFillingBillingInfo"])
  },
  watch: {
      isFillingBillingInfo: function() {
          this.$emit("forbidden", !this.isFillingBillingInfo);
      }
  },
  data () {
    return {
            payments: [
                {name: "Bitcoin", value: "bitcoin", img: "/static/common/img/payment_methods_new/bitcoin.png"},
                {name: "Wire transfer", value: "wiretransfer", img: "/static/common/img/payment_methods_new/wiretransfer.png", check: "checkWireTransfer"},
                {name: "Visa", value: "visa_mastercard", img: "/static/common/img/payment_methods_new/visa.png"},
                {name: "American Express", value: "card", img: "/static/common/img/payment_methods_new/americanexpress.png"},
                {name: "Paypal", value: "paypal", img: "/static/common/img/payment_methods_new/paypal.png"},
                {name: "Webmoney", value: "webmoney", img: "/static/common/img/payment_methods_new/webmoney.png", lang: "ru"},
                {name: "Yandex.Money", value: "yandex", img: "/static/common/img/payment_methods_new/yandex.png", lang: "ru"},
                {name: "Qiwi", value: "qiwi", img: "/static/common/img/payment_methods_new/qiwi.png", lang: "ru"},
                {name: "Other", value: "visa_mastercard"},
                
            ],
            choosen: {
                name: "Bitcoin",
                value: "bitcoin"
            },
            messageType: ''
     }
  },
     locales: {
    	ru: {
             'Other': 'Другое',
             'Bitcoin': 'Биткойн',
             'Qiwi': 'Киви',
             "Yandex.Money": "Яндекс.Деньги",
            'Wire transfer': "Банковский перевод",
            'To pay by bank transfer please complete the required fields in': 'Для оплаты банковским переводом заполните поля формы',
            'Billing details and contacts': 'Реквизиты оплаты и контакты',
            'in your profile': 'в вашем профиле'
         }
    },
    created() {
        this.$emit("choosen", {method: this.choosen.value})
    },

    methods: {
        billingDetails: function()
        {
            this.$emit("billingdetails");
        },
        checkWireTransfer: function() {
          return  this.isFillingBillingInfo;
        },
        choose: function(payment)
        {
            if(typeof payment.check != "undefined")
            {
                if(!this[payment.check]())
                {
                    this.$emit("forbidden", true);
                    this.messageType = payment.name;
                } else {
                    this.$emit("forbidden", false);
                    this.messageType = "";
                }
            } else {
                this.$emit("forbidden", false);
                this.messageType = payment.name;
            }


            this.choosen.name = payment.name;
            this.choosen.value = payment.value;
            this.$emit("choosen", {method: this.choosen.value})
        },
        show: function(payment) {
            if(this.lang == payment.lang || typeof payment.lang == 'undefined'){
                return true;
            }
            return false;
        }
    }
}
</script>   



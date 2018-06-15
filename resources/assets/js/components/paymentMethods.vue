<template>
<div class="row choose_payment">
     <input type="hidden" name="payment_method"  v-model="choosen.value">
     <div class="col-xs-4 pds0" v-for="payment in payments" v-if="show(payment)">
        <div class="choose" v-bind:class="{active: payment.name == choosen.name}">
            
           <img v-if="payment.img" v-bind:alt="t(payment.name)" v-bind:src="payment.img" class="img-responsive" @click="choose(payment)">
           <div v-if="!payment.img" v-translate @click="choose(payment)">{{ payment.name }}</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'payment-methods',
  props: {
      lang: {type: String, default: "en"}

  },
  data () {
    return {
            payments: [
                {name: "Visa", value: "visa_mastercard", img: "/static/common/img/payment_methods_new/visa.png"},
                {name: "American Express", value: "card", img: "/static/common/img/payment_methods_new/americanexpress.png"},
                {name: "Paypal", value: "paypal", img: "/static/common/img/payment_methods_new/paypal.png"},
                {name: "Webmoney", value: "webmoney", img: "/static/common/img/payment_methods_new/webmoney.png", lang: "ru"},
                {name: "Yandex.Money", value: "yandex", img: "/static/common/img/payment_methods_new/yandex.png", lang: "ru"},
                {name: "Qiwi", value: "qiwi", img: "/static/common/img/payment_methods_new/qiwi.png", lang: "ru"},
                {name: "Bitcoin", value: "bitcoin", img: "/static/common/img/payment_methods_new/bitcoin.png"},
                {name: "Other", value: "visa_mastercard"},
                
            ],
            choosen: {
                name: "Visa",
                value: "visa_mastercard"
            }
     }
  },
     locales: {
    	ru: {
             'Other': 'Другое',
             'Bitcoin': 'Биткойн',
             'Qiwi': 'Киви',
             "Yandex.Money": "Яндекс.Деньги"
         }
    }, 
    methods: {
        choose: function(payment)
        {
            this.choosen.name = payment.name;
            this.choosen.value = payment.value;
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



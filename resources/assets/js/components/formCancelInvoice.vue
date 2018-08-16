<template>
    <modal-window :id="id"  @close="close" class="in"  style="display: block" :show="true">
        <div slot="title" v-translate>Cancel Invoice</div>
        <loading-inform :state="state" @close="close">
            <div class="window-center" slot="ok-message">
                  <div class="complete-body" v-translate>Invoice has been cancelled.</div>
                  <div class="button-close-ok"><button type="button" class="btn btn-green" v-translate @click="close">Ok</button></div>
            </div>
            <div slot="buttons"></div>
        </loading-inform>
        <form :url="url" @submit.prevent.stop>
            <div>
                <div class="row">
                    <div class="col-md-12 top-20">
                        <div><span v-translate>Do you really want cancel invoice</span> #<b>{{invoice_id}}</b>?</div>
                    </div>
                </div>
            </div>
            <error-inform :err="err" :state="state"></error-inform>
            <div class="modal-footer">
                <button  type="button" class="btn btn-primary" v-translate @click="close" v-translate>Cancel</button>
                <button  type="button" class="btn btn-primary" v-translate @click="validate" v-translate>OK</button>

            </div>
            <input type="hidden" name="invoice_id" :value="invoice_id">
        </form>
    </modal-window>
</template>


<script>

import modalWindow from './modalWindow.vue';
import ajaxform from '../mixins/ajax-form.vue';
import errorInform from '../mixins/error-inform.vue';
import loadingInform from '../mixins/loading-inform.vue';
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

export default {
  name: 'form-confirm-invoice',
  components: {
     "modal-window": modalWindow,
     "error-inform": errorInform,
     "loading-inform": loadingInform,
  },
  props: {
      invoice_id: {"type": String}
  },
  data () {
    return {
      id: "confirm-invoice",
      url: "/shop/invoice/cancel",
      redirect: false,

      files: [],
     }
  },
  mixins: [ajaxform],
  locales: {
    	ru: {
                'Cancel Invoice': 'Отмена счета',
                'Invoice has been cancelled.': 'Выставленный счет был отменен',
                "OK": "Да",
                "Cancel": "Нет",
                "Do you really want cancel invoice": "Вы действительно хотите отменить счет",
         }
    },
  methods: {
      validate: function()
      {
          this.send(this.url + "/" + this.invoice_id, {}, (data) => {
              this.$emit("cancel-invoice")
          });
      }

  }          
}
</script>

<style scoped="" lang="scss">

    .modal-footer {
        button {padding: 7px 15px;}
    }


</style>

<template>
    <modal-window :id="id"  @close="close" class="in"  style="display: block" :show="true">
        <div slot="title" v-translate>Confirm Payment</div>
        <loading-inform :state="state" @close="close">
            <div class="window-center" slot="ok-message">
                  <div class="complete-body" v-translate>Confirming file has been uploaded.</div>
                  <div class="button-close-ok"><button type="button" class="btn btn-green" v-translate @click="close">Ok</button></div>
            </div>
            <div slot="buttons"></div>
        </loading-inform>
        <form :url="url" @submit.prevent.stop>
            <div>
                <div class="row">
                    <div class="col-md-12 top-20">
                        <div v-translate>If you want to confirm the payment, you have to upload the confirming file.</div>
                        <div><span v-translate>Accepted  formats</span> - .jpg, .pdf</div>
                        <div align="center" class="top-40" style="position: relative">
                            <input type="file" id="files" ref="files" accept=".pdf,.jpg" @change="handleFileUploads()" class="inputfile">
                            <label for="files"><img src="/images/icons/icon-download.svg"><span v-translate>{{labelForFiles}}</span></label>
                        </div>
                    </div>
                </div>
            </div>
            <error-inform :err="err" :state="state"></error-inform>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary" v-translate @click="validate">Send</button>
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
  computed: {
        labelForFiles() {
            if (this.files.length > 1) {
                return this.files.length + " " + this.$translate.text("files selected");
            } else if (this.files.length == 0)
            {
                return this.$translate.text("Select file");
            }  else {
                return this.files[0].name
            }
        }
  },
  props: {
      invoice_id: {"type": String}
  },
  data () {
    return {
      id: "confirm-invoice",
      url: "/shop/invoice/confirm",
      redirect: false,

      files: [],
     }
  },
  mixins: [ajaxform],
  locales: {
    	ru: {
                'Confirming file has been uploaded.': 'Файл для подтверждения платежа успешно загружен.',
                'Confirm Payment': 'Подтвердить платеж',
                "Send": "Отправить",
                "Select file": "Выберите файл",
                "Accepted  formats": "Допустимые форматы",
                "If you want to confirm the payment, you have to upload the confirming file.": "Для подтвержения платежа загрузите подтверждающий файл."
         }
    },
  methods: {
      validate: function()
      {
          let formData = new FormData();
          let data = {"id": this.invoice_id};

          for(let key in data) formData.append(key,data[key]);

          let headers = {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          };

          if(this.files.length > 0)
          {
              for( var i = 0; i < this.files.length; i++ ){
                  let file = this.files[i];

                  formData.append('files[' + i + ']', file);
              }
          }


          this.send(this.url, formData, (data) => {
              this.$emit("confirm-invoice")
          },headers);
      },
      handleFileUploads: function()
      {
          if(typeof this.$refs.files != "undefined")
          {
              this.files = this.$refs.files.files;
          }
      }
  }          
}
</script>

<style scoped="">
    .inputfile {
        width: 100%;
        height: 100%;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: 2;
        border: 1px solid black;
    }

    .inputfile + label {
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 500;
        color: white;

        display: inline-block;
        padding: 7px 20px;
        border-radius: 3px;
        cursor: pointer;
        background-color: #00a0c8;
    }

    .inputfile + label > img {
        display: inline-block;
        margin: 0 5px 5px 5px;
        width: 20px;
        height: 20px;
        color: #fff;
    }



</style>

<template>
    <modal-window id="change-password"  @close="close" class="in"  style="display: block" :show="true" :wide="wide">
        <div slot="title" v-translate>Add Answer</div>
        <loading-inform :state="state" @close="close">
            <div class="window-center" slot="ok-message">
                  <div class="complete-body" v-translate>Answer has been added.</div>
                  <div class="button-close-ok"><button type="button" class="btn btn-green" v-translate @click="close">Ok</button></div>
            </div>
            <div slot="buttons"></div>
        </loading-inform>        
        <form :url="url" @submit.prevent.stop>
            <div>
                <div class="row">
                   <div class="col-md-12">
                       <div class="form-group top-10">
                           <label for="article_message" v-translate>Message</label> <span v-show="errors.has('message')" class="help is-danger">*{{errors.first('message')}}</span>
                           <div class="input-group">
                               <textarea name="message" id="article_message" rows="7" v-model="message"  v-validate="{ rules: { required:true, min:5}}">{{message}}</textarea>
                           </div>
                       </div>
                       <div style="position:relative">
                           <input type="file" multiple="multiple" id="files" ref="files" accept="image/*, application/pdf,application/msword,application/excel, application/zip" @change="handleFileUploads()" class="inputfile">
                           <label for="files"><img src="/images/icons/icon-download.svg"><span>{{labelForFiles}}</span></label>
                       </div>
                   </div>
               </div>
            </div>

            <error-inform :err="err" :state="state"></error-inform>
            
            
            <div class="modal-footer">
                  <button type="submit" class="btn btn-primary" v-translate @click="validate">Send</button>
            </div>
            <input type="hidden" name="ticketNumber" :value="ticketNumber">
        </form>  
        
    </modal-window>
</template>


<script>
import { Validator } from 'vee-validate';    
import modalWindow from '../modalWindow.vue';
var ajaxform = require('../../mixins/ajax-form.vue');
const errorInform = require('../../mixins/error-inform.vue');
const loadingInform = require('../../mixins/loading-inform.vue');


export default {
  name: 'form-add-ticket',
  components: {
     "modal-window": modalWindow,
     "error-inform": errorInform,
     "loading-inform": loadingInform,
  },
  props: {
      'ticketNumber': {type: String},
  },
  data () {
    return {
      id: "article-add",
      url: "/ticket/article/add",
      redirect: false,
      wide: true,
      message: "",
      files: [],
     }
  },
  computed: {
      labelForFiles() {
          if (this.files.length > 1) {
              return this.files.length + " " + this.$translate.text("files selected");
          } else if (this.files.length == 0) {
              return this.$translate.text("Select files");
          }  else {
              return this.files[0].name
          }
      }
  },
  mixins: [ajaxform],
  locales: {
    	ru: {
                'Add Answer': 'Добавить ответ',
                'Answer has been added.': 'Ответ был отправлен',
                'Message': "Сообщение",
                'Send': "Отправить",
                'Select files': "Выберите файлы",
                'files selected': "файла выбрано"

         }
    },
   methods: {
     validate: function()
     {
         let formData = new FormData();
         let data = {"ticketNumber": this.ticketNumber, "message": this.message};

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

         this.send(this.url, formData, headers);
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

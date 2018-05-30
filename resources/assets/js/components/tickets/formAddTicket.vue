<template>
    <modal-window id="change-password"  @close="close" class="in"  style="display: block" :show="true" :wide="wide">
        <div slot="title" v-translate>Add Ticket</div>
        <loading-inform :state="state" @close="close">
            <div class="window-center" slot="ok-message">
                  <div class="complete-body" v-translate>Ticket has been added.</div>
                  <div class="button-close-ok"><button type="button" class="btn btn-green" v-translate @click="close">Ok</button></div>
            </div>
            <div slot="buttons"></div>
        </loading-inform>        
        <form :url="url" @submit.prevent.stop>
            <div>
                <div class="row">
                   <div class="col-md-12">
                        <div class="form-group top-10">
                             <label for="theme" v-translate>Theme</label> <span v-show="errors.has('theme')" class="help is-danger">*{{errors.first('theme')}}</span>
                             <div class="input-group">
                                <input  v-model="theme" id="theme" name="theme" class="form-control":class="{error: errors.has('theme')}" v-validate="{ rules: { required:true, min:5}}">
                             </div>
                        </div>
                       <div class="form-group top-10">
                           <label for="theme" v-translate>Department</label> <span v-show="errors.has('department')" class="help is-danger">*{{errors.first('department')}}</span>
                           <div class="input-group">
                               <select name="department">
                                   <option v-for="obj in departments" :value="obj.key">
                                       {{ obj.value }}
                                   </option>
                               </select>
                           </div>
                       </div>
                       <div class="form-group top-10">
                           <label for="theme" v-translate>Priority</label> <span v-show="errors.has('priority')" class="help is-danger">*{{errors.first('priority')}}</span>
                           <div class="input-group">
                               <select name="priority" v-model="priority">
                                   <option v-for="obj in priorities" :value="obj.key">
                                       {{ obj.value }}
                                   </option>
                               </select>
                           </div>
                       </div>
                       <div class="form-group top-10">
                           <label for="theme" v-translate>Message</label> <span v-show="errors.has('message')" class="help is-danger">*{{errors.first('message')}}</span>
                           <div class="input-group">
                               <textarea name="message" rows="7" v-model="message"  v-validate="{ rules: { required:true, min:5}}">{{message}}</textarea>
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
  data () {
    return {
      id: "ticket-add",
      url: "/ticket/add",
      redirect: false,
      wide: true,
      theme: "",
      message: "",
      priority: "",
      department: "",
      files: [],

      priorities: [],
      departments: [],

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
                'Add Ticket': 'Добавить тикет',
                'Ticket has been added.': 'Тикет был отправлен',
                'Theme' : "Тема",
                'Department' : "Отдел",
                'Priority': "Приоритет",
                'Message': "Сообщение",
                'Send': "Отправить",
                'Select files': "Выберите файлы",
                'files selected': "файла выбрано"

         }
    },
    created(){
        this.uploadInfo("/ticket/queues-priorities", {}, (data) => {
            this.priorities = data.priorities;
            this.departments = data.queues;
            this.priority =  data.defaultQueue;
            this.department =  data.defaultPriority;
        });
    },
  methods: {
     validate: function()
     {
         let formData = new FormData();
         let data = {"priority": this.priority, "department": this.department, "theme": this.theme, "message": this.message};
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

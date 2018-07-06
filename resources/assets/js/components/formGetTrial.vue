<template>
    <modal-window :id="id"  @close="close" class="in"  style="display: block" :show="true" :wide="true">
        <div slot="title" v-translate>Get trial</div>
        <div class="loading-info" v-if="state == states.LOADING">
            <div class="window-center">
                <div><div class="processing_text" v-translate>Loading...</div></div>
            </div>
        </div>
        <div :style="{ visibility: visible, display: display}">
            <h3 v-translate>What's next?</h3>
            <ol>
                <li>
                    <router-link :to="{name:'download'}">Download the VIPole Enterprise installation files</router-link>
                    <span>and additional components for the selected server platform</span>.
                </li>
                <li><router-link :to="{name:'documents'}">Review the installation instructions</router-link>
                    <span>and complete the necessary installation steps</span>.
                </li>
                <li v-translate>During the installation, generate a license request file and upload it to your profile page to get the license file.</li>
                <li v-translate>Apply the license file and complete the installation process on your server.</li>
            </ol>
            <p>
                <span>If you have any questions while installing or using VIPole Enterprise or client applications</span>,
                <router-link :to="{name:'tickets'}">create a support ticket</router-link>
                <span>so we can help you promptly</span>.
            </p>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="redirectTo">Ok</button>
            </div>
        </div>
        <form :url="url" @submit.prevent.stop>
            <error-inform v-bind:err="err" v-bind:state="state"></error-inform>
            
            <div class="modal-footer" v-if="visible == 'hidden'">
                    <button type="submit" class="btn btn-primary" @click="validate" v-translate id="next_get_trial" style="visibility: hidden">Next</button>
            </div>
        </form>
    </modal-window>
</template>
<script>
import modalWindow from './modalWindow.vue';
import {STATES} from "../mixins/states";
var ajaxform = require('../mixins/ajax-form.vue');
var errorInform = require('../mixins/error-inform.vue');
var loadingInform = require('../mixins/loading-inform.vue');
import {mapMutations } from 'vuex'
import {LocalServer} from "../classes/LocalServer";
import {License} from "../classes/License";

export default {
  name: 'form-get-trial',
  props: {
        choice: {type: Object},
        basket: {type: Map}
  },
  computed:{
      display(){
          if(this.state == this.states.ERROR) return "none";
          return "block";
      }
  },
  components: {
     "modal-window": modalWindow,
     "error-inform": errorInform,
     "loading-inform": loadingInform
  },    
  data () {
    return {
      id: "corporateGetTrial",
      url: "servers/get-trial",
      redirect: false,
      visible: "hidden",
      states: STATES
     }
  },
  mounted(){
      document.getElementById('next_get_trial').click();
  },
  mixins: [ajaxform],
   locales: {
    	ru: {
           "What's next?": "Что дальше?",
            "Download the VIPole Enterprise installation files": "Скачайте установочные файлы VIPole Enterprise",
            "and additional components for the selected server platform":" и дополнительные компоненты для выбранной серверной платформы",
            "Review the installation instructions":"Изучите инструкцию по установке",
            "and complete the necessary installation steps":"и выполните необходимые этапы установки",
            "During the installation, generate a license request file and upload it to your profile page to get the license file.": "В ходе установки сгенерируйте файл запроса лицензии и загрузите его в личный кабинет для получения файл лицензии.",
            "Apply the license file and complete the installation process on your server.":"Активируйте файл лицензии и завершите процесс установки на вашем сервере.",
            "If you have any questions while install ing or using VIPole Enterprise or client applications":"Если при установке или использовании VIPole Enterprise у вас возникают вопросы, мы сможем оперативно вам помочь, если вы сообщите нам о проблеме",
            "create a support ticket":"создав обращение в службу поддержки",
            "so we can help you promptly":"",
            "Loading...": "Загрузка..."
         }
    },    
  methods: {
      ...mapMutations("servers", ["addServer", "cleanServers"]),
      redirectTo: function(){
          this.$router.push({name: "userpage"})
      },
      validate: function()
      {
          let basketProducts = [];
          for(let key of this.basket.keys())
          {
              basketProducts.push(key);
          }

          let data = {os: this.choice.os, server: this.choice.server, basket: basketProducts };

          this.send(this.url, data, (data) => {
              this.visible = "visible";
              this.cleanServers();
              for(let serverId in data)
              {
                  let server = new LocalServer(data[serverId]);

                  for(let licenseId in data[serverId]["licenses"])
                  {
                      server.addLicense(new License(data[serverId]["licenses"][licenseId]));
                  }
                  this.addServer(server);
              }

          });
      }
  }          
}
</script>   



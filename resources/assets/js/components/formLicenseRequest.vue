<template>
    <modal-window :id="id"  @close="close" class="in"  style="display: block" :show="true">
        <div slot="title" v-translate>License request</div>
        <loading-inform :state="state" @close="close">
            <div class="window-center" slot="ok-message">
                  <div class="complete-body" v-translate>License request has been uploaded.</div>
                  <div class="button-close-ok"><button type="button" class="btn btn-green" v-translate @click="close">Ok</button></div>
            </div>
            <div slot="buttons"></div>
        </loading-inform>
        <form :url="url" @submit.prevent.stop>
            <div>
                <div class="row">
                    <div class="col-md-12 top-20">
                        <div align="center">
                            <input type="file"  id="files" ref="files" accept=".req" @change="handleFileUploads()" class="inputfile">
                            <label for="files"><img src="/images/icons/icon-download.svg"><span v-translate>{{labelForFiles}}</span></label>
                        </div>
                    </div>
                </div>
            </div>
            <error-inform :err="err" :state="state"></error-inform>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary" v-translate @click="validate">Send</button>
            </div>
            <input type="hidden" name="server" :value="server">
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
  name: 'form-license-request',
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
                return this.$translate.text("Select license file request");
            }  else {
                return this.files[0].name
            }
        },
      ...mapState("servers", ["serversMap"])
  },
  props: {
    server: {"type": String}
  },
  data () {
    return {
      id: "license-request",
      url: "/servers/license/request",
      redirect: false,

      files: [],
     }
  },
  mixins: [ajaxform],
  locales: {
    	ru: {
                'License request has been uploaded.': 'Запрос лицензии успешно загружен',
                'License request': 'Запрос лицензии'
         }
    },
  methods: {
      ...mapMutations("servers",["updateServer"]),
      validate: function()
      {
          let formData = new FormData();
          let data = {"server": this.server};

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

          let server = this.serversMap.get(this.server);

          this.send(this.url, formData, (data) => {
              server.hasLicenseRequest = true;
              this.updateServer(server);
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

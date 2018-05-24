<template>
    <modal-window id="change-name"  @close="close" class="in"  style="display: block" :show="true">
        <div slot="title" v-translate>Change company name</div>
        <loading-inform :state="state" @close="close">
            <div class="window-center" slot="ok-message">
                  <div class="complete-body" v-translate>Company name has been changed.</div>
                  <div class="button-close-ok"><button type="button" class="btn btn-green" v-translate @click="close">Ok</button></div>
            </div>
            <div slot="buttons"></div>
        </loading-inform>        
        <form :url="url" @submit.prevent.stop>
            <div>
                <div class="row">
                   <div class="col-md-12">
                        <div class="form-group  top-10">
                          <label for="company" v-translate>Company</label> <span v-show="errors.has('name')" class="help is-danger">*{{errors.first('name')}}</span>
                          <div class="input-group">
                          <input  v-model="name"  id="company" name="name" class="form-control" :class="{error: errors.has('name')}" v-validate="'required|min:3'">
                          </div>
                        </div>

                       <div class="form-group  top-10">
                           <label for="password" v-translate>Password</label> <span v-show="errors.has('password')" class="help is-danger">*{{errors.first('password')}}</span>
                           <div class="input-group">
                               <input :type="type_input" v-model="password"  name="password" class="form-control" :class="{error: errors.has('password')}" v-validate="'required'">
                               <a href="#" class="input-group-addon" @click.prevent.stop="togglePassword('type_input')"></a>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            <error-inform :err="err" :state="state"></error-inform>
            <div class="modal-footer">
                  <button type="submit" class="btn btn-primary" v-translate @click="validate">Next</button>
            </div>
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
  name: 'form-change-company-name',
  computed: {
        ...mapState({
            companyName: state => state.user.name
        })
  },
  mounted(){
      this.name = this.companyName;
  },
  components: {
     "modal-window": modalWindow,
     "error-inform": errorInform,
     "loading-inform": loadingInform,
  },
  data () {
    return {
      id: "change-name",
      url: "/user/company/change",
      redirect: false,
      password: '',
      name: '',
      type_input: "password"
     }
  },
  mixins: [ajaxform],
  locales: {
    	ru: {
                'Password': 'Пароль',
                'Company': 'Компания',
                'Next': 'Далее',
                'Company name has been changed.': 'Название компании было изменено.',
                'Change company name': 'Изменить название компании'
         }
    },    
  methods: {
      ...mapMutations([
          'setCompanyName'
      ]),
     togglePassword: function(type){
       this.type_input = (this.type_input_current == 'password')? 'text' : 'password';
     },

     validate: function()
     {
         let data = {"name": this.name, "password": this.password};
         this.send(this.url, data, () => {
                this.setCompanyName({"name": this.name});
         });
     }
     
  }          
}
</script>   



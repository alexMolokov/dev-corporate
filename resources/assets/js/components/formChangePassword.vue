<template>
    <modal-window id="change-password"  @close="close" class="in"  style="display: block" :show="true">
        <div slot="title" v-translate>Change password</div>
        <loading-inform :state="state" @close="close">
            <div class="window-center" slot="ok-message">
                  <div class="complete-body" v-translate>Your password has been changed.</div>
                  <div class="button-close-ok"><button type="button" class="btn btn-green" v-translate @click="close">Ok</button></div>
            </div>
            <div slot="buttons"></div>
        </loading-inform>        
        <form :url="url" @submit.prevent.stop>
            <div>
                <div class="row">
                   <div class="col-md-12">
                        <div class="form-group top-10">
                             <label for="old_password" v-translate>Current password</label> <span v-show="errors.has('password')" class="help is-danger">*{{errors.first('password')}}</span>
                             <div class="input-group">
                                <input :type="type_input_current" v-model="password"  name="password" class="form-control":class="{error: errors.has('password')}">
                                 <a href="#" class="input-group-addon" @click.prevent.stop="togglePassword('type_input_current')"></a>
                             </div>
                        </div>

                        <div class="form-group  top-10">    
                          <label for="password" v-translate>New Password</label> <span v-show="errors.has('new_password')" class="help is-danger">*{{errors.first('new_password')}}</span>
                          <div class="input-group">
                          <input :type="type_input_new" v-model="new_password"  name="new_password" class="form-control" :class="{error: errors.has('new_password')}" v-validate="{ rules: { required:true,min:6}}">
                                <a href="#" class="input-group-addon" @click.prevent.stop="togglePassword('type_input_new')"></a>
                          </div>
                        </div>

                         <div class="form-group top-10">    
                          <label for="check_password" v-translate>Repeat new password</label> <span v-show="errors.has('check_password')" class="help is-danger">*{{errors.first('check_password')}}</span>
                            <div class="input-group">
                          <input :type="type_input_repeat" v-model="check_password"  name="check_password" class="form-control" :class="{error: errors.has('check_password')}"  v-validate="{ rules: {required:true,min:6, is: new_password }}">
                                 <a href="#" class="input-group-addon" @click.prevent.stop="togglePassword('type_input_repeat')"></a>
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
import { Validator } from 'vee-validate';    
import modalWindow from './modalWindow.vue';
var ajaxform = require('../mixins/ajax-form.vue');
const errorInform = require('../mixins/error-inform.vue');
const loadingInform = require('../mixins/loading-inform.vue');


export default {
  name: 'form-change-password',
  components: {
     "modal-window": modalWindow,
     "error-inform": errorInform,
     "loading-inform": loadingInform,
  },
  data () {
    return {
      id: "change-password",
      url: "/user/password/change",
      redirect: false,

      // current password
      password: '',
      // new password
      new_password: '',
      // repeated password
      check_password: '',
      
      // password status checked or no
      type_input_current: "password",
      type_input_new: "password",
      type_input_repeat: "password",
      
     }
  },
  mixins: [ajaxform],
  locales: {
    	ru: {
                'Change password': 'Смена пароля',
                'Your password has been changed.': 'Ваш пароль был изменен',
                'Current password': 'Текущий пароль',
                'New Password': 'Новый Пароль',
                'Repeat new password': 'Повторить новый пароль',
                'Password not valid': 'Неверный пароль',
                'Next': 'Далее'
         }
    },    
  methods: {
     togglePassword: function(type){
         if(type == 'type_input_current')
         {
             this.type_input_current = (this.type_input_current == 'password')? 'text' : 'password';
         }
         else if(type == 'type_input_new')
         {
             this.type_input_new = (this.type_input_new == 'password')? 'text' : 'password';
         }
         else if(type == 'type_input_repeat')
         {
             this.type_input_repeat = (this.type_input_repeat == 'password')? 'text' : 'password';
         }
     },
     reload: function(){
         document.location.reload(true);
     },
     validate: function()
     {
         let data = {"new_password": this.new_password, "password": this.password, "check_password": this.check_password};
         this.send(this.url, data);
     }
     
  }          
}
</script>   



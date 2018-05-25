<template>
    <modal-window :id="id"  @close="close" class="in"  style="display: block" :show="true">
        <div slot="title" v-translate>Change Contact</div>
        <loading-inform :state="state" @close="close">
            <div class="window-center" slot="ok-message">
                  <div class="complete-body" v-translate>Contact has been changed.</div>
                  <div class="button-close-ok"><button type="button" class="btn btn-green" v-translate @click="close">Ok</button></div>
            </div>
            <div slot="buttons"></div>
        </loading-inform>        
        <form :url="url" @submit.prevent.stop>
            <input type="hidden" name="type" :value="type">
            <div>
                <div class="row">
                   <div class="col-md-12">
                        <div class="form-group  top-10">
                          <label for="firstName" v-translate>First Name</label> <span v-show="errors.has('firstName')" class="help is-danger">*{{errors.first('firstName')}}</span>
                          <div class="input-group">
                          <input  v-model="firstName"  name="firstName" class="form-control" :class="{error: errors.has('firstName')}" v-validate="{ rules: { required:true, min:3}}">
                          </div>
                        </div>
                       <div class="form-group  top-10">
                           <label for="lastName" v-translate>Last Name</label> <span v-show="errors.has('lastName')" class="help is-danger">*{{errors.first('lastName')}}</span>
                           <div class="input-group">
                               <input  v-model="lastName"  name="lastName" class="form-control" :class="{error: errors.has('lastName')}" v-validate="{ rules: { required:true, min:3}}">
                           </div>
                       </div>
                       <div class="form-group  top-10">
                           <label for="jobTitle" v-translate>Job title</label> <span v-show="errors.has('job_title')" class="help is-danger">*{{errors.first('job_title')}}</span>
                           <div class="input-group">
                               <input  v-model="jobTitle"  name="jobTitle" class="form-control" :class="{error: errors.has('jobTitle')}" v-validate="{ rules: { required:true, min:3}}">
                           </div>
                       </div>

                       <div class="form-group  top-10">
                           <label for="email" v-translate>Email</label> <span v-show="errors.has('email')" class="help is-danger">*{{errors.first('email')}}</span>
                           <div class="input-group">
                               <input  v-model="email"  name="email" class="form-control" :class="{error: errors.has('email')}" v-validate="{ rules: { required:true, email:true}}">
                           </div>
                       </div>

                       <div class="form-group  top-10">
                           <label for="password" v-translate>Password</label> <span v-show="errors.has('password')" class="help is-danger">*{{errors.first('password')}}</span>
                           <div class="input-group">
                               <input :type="type_input" v-model="password"  name="password" class="form-control" :class="{error: errors.has('password')}" v-validate="{ rules: { required:true, min:6}}">
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
            <input type="hidden" name="id" v-model="contact_id">
        </form>  
        
    </modal-window>
</template>


<script>
    import ajaxform from '../mixins/ajax-form.vue';
    import errorInform from '../mixins/error-inform.vue';
    import modalWindow from './modalWindow.vue';
    import loadingInform from '../mixins/loading-inform.vue';
    import {mapState} from 'vuex';
    import {mapMutations} from 'vuex';

export default {
  name: 'form-change-contact',
  components: {
     "modal-window": modalWindow,
     "error-inform": errorInform,
     "loading-inform": loadingInform,
  },
    computed: {
        ...mapState({
            primary: state => state.user.primary
        })
    },
    mounted(){
        this.firstName = this.primary.firstName;
        this.lastName = this.primary.lastName;
        this.jobTitle = this.primary.jobTitle;
        this.email= this.primary.email;
        this.contact_id = this.primary.id;
    },

  data () {
    return {
      id: "change-contact",
      url: "/user/contact/change",
      redirect: false,
      type_input: "password",
      password: '',
      type: "main",
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      contact_id: '',
     }
  },
  mixins: [ajaxform],
  locales: {
    	ru: {
                'Password': 'Пароль',
                'First Name': 'Имя',
                'Last Name': 'Фамилия',
                'Job title': 'Должность',
                'Next': 'Далее',
                'Change Contact': "Изменить контакт",
                'Contact has been changed.': 'Контакт был изменен.'
         }
    },    
  methods: {
      ...mapMutations(['setContact']),
     togglePassword: function(type){
       this.type_input = (this.type_input_current == 'password')? 'text' : 'password';
     },
     validate: function()
     {
         let data = {
             "id": this.contact_id,
             "email": this.email,
             "jobTitle": this.jobTitle,
             "firstName": this.firstName,
             "lastName": this.lastName,
             "password": this.password,
             "type": this.type
         };

         this.send(this.url, data, () => {
                this.setContact(data);
         });
     }

     
  }          
}
</script>   



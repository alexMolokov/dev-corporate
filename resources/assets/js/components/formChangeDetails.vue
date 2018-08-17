<template>
    <modal-window :id="id"  @close="close" class="in"  style="display: block" :show="true">
        <div slot="title" v-translate>Change company info</div>
        <loading-inform :state="state" @close="close">
            <div class="window-center" slot="ok-message">
                  <div class="complete-body" v-translate>Company info has been changed.</div>
                  <div class="button-close-ok"><button type="button" class="btn btn-green" v-translate @click="close">Ok</button></div>
            </div>
            <div slot="buttons"></div>
        </loading-inform>
        <form :url="url" @submit.prevent.stop>
            <div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group  top-10">
                            <label for="address" v-translate>Address</label> <span v-show="errors.has('address')" class="help is-danger">*{{errors.first('address')}}</span>
                            <div class="input-group">
                                <input  v-model="address"  id="address" name="address" class="form-control" :class="{error: errors.has('address')}" v-validate="'required|min:5'">
                            </div>
                        </div>
                        <div class="form-group  top-10">
                            <label for="address" v-translate>City</label> <span v-show="errors.has('city')" class="help is-danger">*{{errors.first('city')}}</span>
                            <div class="input-group">
                                <input  v-model="city"  id="city" name="city" class="form-control" :class="{error: errors.has('city')}" v-validate="'required|min:3'">
                            </div>
                        </div>
                        <div class="form-group  top-10">
                            <label for="address" v-translate>State</label> <span v-show="errors.has('state')" class="help is-danger">*{{errors.first('state')}}</span>
                            <div class="input-group">
                                <input  v-model="areaState"  id="state" name="state" class="form-control" :class="{error: errors.has('state')}" v-validate="'min:3'">
                            </div>
                        </div>
                        <div class="form-group  top-10">
                            <label for="address" v-translate>Country</label> <span v-show="errors.has('country')" class="help is-danger">*{{errors.first('country')}}</span>
                            <div class="input-group">
                                <input  v-model="country"  id="country" name="country" class="form-control" :class="{error: errors.has('country')}" v-validate="'required|min:3'">
                            </div>
                        </div>
                        <div class="form-group  top-10">
                            <label for="address" v-translate>Zip code</label> <span v-show="errors.has('zip')" class="help is-danger">*{{errors.first('zip')}}</span>
                            <div class="input-group">
                                <input  v-model="zip"  id="zip" name="zip" class="form-control" :class="{error: errors.has('zip')}" v-validate="'required|min:3'">
                            </div>
                        </div>

                        <div class="form-group  top-10">
                            <label for="detail_phone" v-translate>Phone</label> <span v-show="errors.has('phone')" class="help is-danger">*{{errors.first('phone')}}</span>
                            <div class="input-group">
                                <input  v-model="phone"  id="detail_phone" name="phone" class="form-control" :class="{error: errors.has('phone')}" v-validate="{ rules: { required:true, min:10}}">
                            </div>
                        </div>

                        <div class="form-group  top-10">
                            <label for="detail_email" v-translate>Email</label> <span v-show="errors.has('email')" class="help is-danger">*{{errors.first('email')}}</span>
                            <div class="input-group">
                                <input  v-model="email"  id="detail_email" name="email" class="form-control" :class="{error: errors.has('email')}" v-validate="{ rules: { required:true, email:true}}">
                            </div>
                        </div>

                        <div class="form-group  top-10">
                            <label for="detail-password" v-translate>Password</label> <span v-show="errors.has('password')" class="help is-danger">*{{errors.first('password')}}</span>
                            <div class="input-group">
                                <input :type="type_input" id="detail-password" v-model="password"  name="password" class="form-control" :class="{error: errors.has('password')}" v-validate="'required'">
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
    import ajaxform from '../mixins/ajax-form.vue';
    import errorInform from '../mixins/error-inform.vue';
    import modalWindow from './modalWindow.vue';
    import loadingInform from '../mixins/loading-inform.vue';
    import {mapState} from 'vuex';
    import {mapMutations} from 'vuex';


export default {
  name: 'form-change-details',
  components: {
     "modal-window": modalWindow,
     "error-inform": errorInform,
     "loading-inform": loadingInform,
  },
  computed:{
      ...mapState({
          'billing': (state) => state.user.billing
      })
   },
  mounted(){
    this.address = this.billing.address;
    this.email = this.billing.email;
    this.phone = this.billing.phone;
    this.country = this.billing.country;
    this.city = this.billing.city;
    this.areaState = this.billing.state;
    this.zip = this.billing.zip;

  },
  data () {
    return {
        id: "change-details",
        url: "/user/company-details/change",
        redirect: false,
        address: '',
        phone: '',
        email: '',
        city: '',
        areaState: '',
        country: '',
        zip: '',
        password: '',
        type_input: "password"
     }
  },
  mixins: [ajaxform],
  locales: {
    	ru: {
                'Change company info': 'Изменить данные о компании',
                'Company info has been changed.': 'Информация о компании была изменена',
                'Password': 'Пароль',
                'Address': 'Адрес',
                'Next': 'Далее',
                "City": 'Город',
                'State': 'Область',
                'Country': 'Страна',
                'Zip code': 'Индекс',
                'Phone': 'Телефон'
         }
    },    
  methods: {
      ...mapMutations(['setDetails']),
      togglePassword: function(type)
      {
          this.type_input = (this.type_input == 'password')? 'text' : 'password';
      },

      validate: function()
      {
          let data = {
              "address": this.address,
              "email": this.email,
              "phone": this.phone,
              "password": this.password,
              "city": this.city,
              "country": this.country,
              "state": this.areaState,
              "zip": this.zip,
          };
          this.send(this.url, data, () => {
              this.setDetails(data);
          });
      }

  }          
}
</script>   



<script>
import {STATES} from "./states";
import {HTTP_CODES} from "./httpCodes";

export default {
    name: 'ajaxform',
    props: {
        show: {type: Boolean, default: false},
        //заlang: {type: String, default: 'en'}
    },
    data() {
    return {
        id: '',
        args: {},
        state: STATES.START,
        err: {validation:[], common: []},
        redirect: false,
        url: '',
        data: {}
        }
    },
    locales: {
        ru: {
            'Internal Server Error': 'Ошибка сервера. Попробуйте позднее.',
        }
    },
    methods: {
        uploadInfo:  function(url, data, success, headers = {})
        {
            Object.assign(data, {lang: this.$store.state.lang});
            window.axios.post(url, data, headers).then(({data}) =>
            {
                if(data.status)
                {
                    success(data.data);
                }
            });
        },
        send: function(url, data, success)
        {
            Object.assign(data, {lang: this.$store.state.lang});

            this.state = STATES.START;
            this.$validator.errors.clear();

            this.$validator.validateAll().then(result => {
                    if(result)
                    {
                        this.state = STATES.LOADING;
                        return window.axios.post(url, data)
                    }
           }
            ).then(({data: response}) => {
                  if(!response.status)
                  {
                      this.state = STATES.ERROR;
                      this.err.common = [];

                      if(response.message !== undefined && response.message !== '')
                      {
                          this.err.common.push(response.message);
                      }

                      for (let key in response.data)
                      {
                          this.$validator.errors.add(key,response.data[key]);
                      }

                  }

                if(response.status)
                {
                    this.state = STATES.ANSWER;
                    if(typeof  success == 'function')
                    {
                        success(response.data);
                    }
                 }

            }, ({response}) => {
                if(response.status == HTTP_CODES.UnprocessableEntity)
                {
                    this.state = STATES.ERROR;
                    let data = JSON.parse(response.request.response);
                    for (let key in data)
                    {
                        this.$validator.errors.add(key,response.data[key][0]);
                    }
                }
                else if(response.status == HTTP_CODES.Unauthenticated)
                {
                    this.$store.commit("logout");
                }
                else if(response.status == HTTP_CODES.FileNotFound)
                {
                    this.state = STATES.ERROR;
                    this.err.common = [];
                    this.err.common.push('Url not found')
                }

            }).catch(() => {
                    /*this.state = STATES.ERROR;
                    this.err.common = [];
                    this.err.common.push('Internal Server Error');*/
                    console.log("error");
            });

        },
        close: function()
        {
            this.state = STATES.START;
            this.err = {validation:[], common: []};
            this.clean();
            this.$emit('close');
        },
        clean: function()
        {
            $('#' + this.id).find("input[type='text']").val('');
            $('#' + this.id).find("input[type='password']").val('');
            $('#' + this.id).find("textarea").val('');
        },
    }

}
</script>



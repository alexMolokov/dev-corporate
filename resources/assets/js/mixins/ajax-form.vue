<script>
export default {
    name: 'ajaxform',
    props: {
        show: {type: Boolean, default: false},
        lang: {type: String, default: 'en'}
    },
    data() {
    return {
        id: '',
        args: {},
        err: {validation:[], common: []},
        redirect: false
        }
    },
    locales: {
        ru: {
            'Internal Server Error': 'Ошибка сервера. Попробуйте позднее.',
        }
    },
    methods: {
        validate: function()
        {
            let $result = this.$validator.validateAll();

            console.log($result);
                this.$validator.validateAll().then(result => {
                if (result) {
                    console.log("ok");
                }
                }).catch(() => {
                    console.log("error");
                });

        }


    }

}
</script>



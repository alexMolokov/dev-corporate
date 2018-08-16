<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
    import TicketLine from './tickets/ticketLine.vue';
    import InvoiceLine from './payments/invoiceLine.vue';
    import InvoiceAction from './payments/invoiceAction.vue';

    export default {
        components: {
            TicketLine,
            InvoiceLine,
            InvoiceAction
        },
        mixins:[Vuetable],
        props: ['deleteRow'],
        locales: {
            ru: {
                'admin':'Администратор1',
                'user':'Пользователь',
                'active':'Активный',
                'suspended':'Блокирован'
            }
        },
        watch: {
            deleteRow: function(row) { // watch it
                let key = row['key'];
                let value = row['value'];
                if(typeof key == "undefined" || typeof value == "undefined") return;


                let tableData =  this.tableData;
                this.tableData.forEach(function(item,i,arr){
                    if(item[key] == value)
                    {
                        tableData.splice(i,1);
                    }
                })
            },

            dataReload: {
                handler: function() {
                    this.dataChangeFunction(this)
                }
            },
            dataChange: {
                handler: function() {
                    let len = this.dataChange.length;

                    for(let i = 0; i < len; i++)
                    {
                        let action =   this.dataChange[i].action;
                        let login = this.dataChange[i].login;
                        let obj = this;

                        if(action == "addUser" )
                        {
                            this.tableData.push(this.dataChange[i]);
                            return;
                        }

                        let funcT = this.t;

                        this.tableData.forEach(function(item,i,arr){
                            if(item.login == login)
                            {
                                if(action == "unsetAdmin") arr[i].role = funcT("user");
                                if(action == "setAdmin") arr[i].role = funcT("admin");
                                if(action == "blockUser") arr[i].status = funcT("suspended");
                                if(action == "unblockUser") arr[i].status = funcT("active");
                                obj.unselectId(item.login);
                                obj.$emit('vuetable:checkbox-toggled', false, item);

                                if(action == "expelUser" || action == "deleteUser")
                                {
                                    arr.splice(i,1);
                                }
                            }
                        })

                    }
                },
                deep: true
            }
        },
        computed: {
            token: function() {
                return this.$root.getToken;
            }
        },
        methods: {
            loadSuccess (response) {
                this.fireEvent('load-success', response)

                let body = this.transform(response.data)

                this.tableData = this.getObjectValue(body, this.dataPath, null)
                this.tablePagination = this.getObjectValue(body, this.paginationPath, null)

                if (this.tablePagination === null) {
                    this.warn('vuetable: pagination-path "' + this.paginationPath + '" not found. '
                        + 'It looks like the data returned from the sever does not have pagination information '
                        + "or you may have set it incorrectly.\n"
                        + 'You can explicitly suppress this warning by setting pagination-path="".'
                    )
                }

                this.$nextTick(function() {
                    this.fixHeader()
                    this.fireEvent('pagination-data', this.tablePagination)
                    this.fireEvent('loaded')
                })
            },

          orderBy (field, event) {
              if ( ! this.isSortable(field) ) return

              this.singleColumnSort(field);

              let paramSort = {
                  "direction": this.sortOrder[0].direction,
                  "field": this.sortOrder[0].sortField,
              }

              this.tableData.sort((a,b) => {
                 if(paramSort.direction == "asc")
                        return a[paramSort.field] > b[paramSort.field];
                  if(paramSort.direction == "desc")
                      return a[paramSort.field] < b[paramSort.field];
              });
            }

        }
    }
</script>
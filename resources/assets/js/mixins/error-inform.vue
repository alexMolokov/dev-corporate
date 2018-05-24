<template>
        <div class="error-block" v-if="showError">
            <div class="alert alert-danger fade in">
                <div v-for="er in err.validation" class="top-10">
                    {{er.name}} - {{er.description}}
                </div>
                <div v-for="er in err.common" class="top-10"><div  v-html class="top-10" >{{er}}</div></div>
            </div>    
       </div>

          
</template>

<script>
import {STATES} from './states';

export default {
  name: 'error-inform',
  props: {
        state: {type: Number, default: STATES.START},
        err: {type: Object, default: () => ({validation:[], common: []})}
    },
  data () {
    return {
        
     }
  },
  computed: {
      showError: function() {
         return  (this.err.validation.length > 0 || this.err.common.length > 0) && this.state == STATES.ERROR
      }
  }
}
</script>   



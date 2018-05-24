<template>
    <div>
        <div class="loading-info" v-if="state == STATES.LOADING">
            <div class="window-center">
                <div><div class="processing_text" v-translate>Loading...</div></div>
            </div>
        </div>
        <div class="ok-message" v-if="state == STATES.ANSWER">
            <div class="window-center">
                <div class="complete-body">
                    <div class="complete-body_text">
                        <slot name="ok-message"></slot>
                    </div>
                </div>
            </div>
            <slot name="buttons"><div class="button-close"><button type="button" class="btn btn-green" v-translate @click="close">Ok</button></div></slot>
        </div>

        <div class="ok-message" v-if="state == STATES.REDIRECT">
            <div class="window-center">
                <div class="complete-body">
                    <div class="complete-body_text">
                        <slot name="ok-message-redirect"></slot>
                    </div>
                </div>
            </div>
        </div>

        <div class="ok-message" v-if="state == STATES.RELOAD">
            <div class="window-center">
                <div class="complete-body">
                    <div class="complete-body_text">
                        <slot name="ok-message-reload"></slot>
                    </div>
                </div>
            </div>
            <slot name="buttons-reload"></slot>
        </div>
    </div>
</template>



<script>
import {STATES} from "./states";

export default {
  name: 'loading-inform',
  props: {
        state: {type: Number, default: STATES.START},
  },
  data(){
      return {
          STATES: STATES
      }
  },
  locales: {
    	ru: {
                'Loading...': 'Отправляем запрос...',
        }
  },
  methods: {
      close: function() {
          this.$emit('close');
      }
  }
}
</script>   



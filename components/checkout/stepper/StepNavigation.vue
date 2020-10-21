<template>
  <div class="step-navigation-container d-flex justify-start align-center">
    <v-btn
      v-if="!hideContinue"
      color="primary"
      class="mr-2"
      @click="onContinueClicked"
    >
      {{ $t('checkout.continue') }}
    </v-btn>

    <v-btn v-if="!hideBack" @click="onBackClicked">
      {{ $t('checkout.back') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    hideContinue: {
      type: Boolean,
      required: false,
      default: false,
    },
    hideBack: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    onContinueClicked() {
      this.$emit('continue-clicked')
    },

    onBackClicked() {
      this.$emit('back-clicked')
    },
  },
})
</script>

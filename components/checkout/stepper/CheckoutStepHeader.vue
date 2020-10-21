<template>
  <div
    class="stepper-step-label-container d-flex align-center"
    :class="{
      'justify-space-between': !labelOnly,
      'justify-center': labelOnly,
    }"
  >
    <h6
      class="text-uppercase text-subtitle-2 text-md-h6 font-weight-medium"
      :class="{ 'text-center': labelOnly }"
    >
      {{ label }}
    </h6>

    <v-btn v-if="!labelOnly" color="primay" text @click="onBtnChangeClicked">
      {{ $t('checkout.change') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
    labelOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
    step: {
      type: Number,
      required: false,
      default: 1,
    },
  },

  methods: {
    onBtnChangeClicked() {
      this.$emit('change-clicked', this.step)
    },
  },
})
</script>

<style lang="scss" scoped>
.stepper-step-label-container {
  width: 100%;
}
</style>

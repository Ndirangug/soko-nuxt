<template>
  <div
    class="order-summary-shipping-container d-flex justify-space-between align-center"
  >
    <p
      class="text-subtitle-2 font-weight-regular text-md-body-2 text-capitalize"
    >
      {{ $t('cart.shipping') }}
    </p>

    <p
      v-if="shippingFee !== null"
      class="text-subtitle-2 font-weight-regular text-md-body-2 text-capitalize"
    >
      {{ new Intl.NumberFormat('en-US').format(shippingFee) }}
    </p>
    <p
      v-else
      class="text-caption text-md-subtitle-2 grey--text text--darken-1 font-italic"
    >
      {{ $t('cart.not_calculated') }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    shippingFee: {
      type: Number,
      required: false,
      default: null,
    },
  },
})
</script>

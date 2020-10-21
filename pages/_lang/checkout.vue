<template>
  <div
    class="checkout-root-container d-flex flex-column flex-md-row justify-start align-center justify-md-space-between align-md-start px-2 px-md-6 px-lg-8"
  >
    <div
      class="stepper-container mr-md-6"
      :style="{ width: $vuetify.breakpoint.mdAndUp ? '70%' : '100%' }"
    >
      <CheckoutStepper />
    </div>

    <div
      v-if="$vuetify.breakpoint.mdAndUp"
      class="order-summary-container"
      :style="{ width: $vuetify.breakpoint.mdAndUp ? '30%' : '' }"
    >
      <CheckoutOrderSummary />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'checkout',
})
</script>

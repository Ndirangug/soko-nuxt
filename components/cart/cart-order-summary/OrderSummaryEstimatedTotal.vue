<template>
  <div
    class="order-summary-estimated-total-container d-flex justify-space-between align-center"
  >
    <p class="text-subtitle-2 text-md-body-1 text-capitalize font-weight-bold">
      {{ $t('cart.estimated_total') }}
    </p>
    <p class="text-subtitle-2 text-md-body-1 font-weight-bold">
      {{ new Intl.NumberFormat('en-US').format(estimatedTotal) }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    estimatedTotal: {
      type: Number,
      required: true,
    },
  },
})
</script>

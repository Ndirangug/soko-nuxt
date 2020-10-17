<template>
  <div
    class="order-summary-subtotal-container d-flex justify-space-between align-center"
  >
    <p class="text-subtitle-1 text-md-body-2 text-capitalize">
      {{ $t('cart.subtotal') }}
    </p>
    <p class="text-subtitle-1 text-md-body-2">
      {{ new Intl.NumberFormat('en-US').format(subtotal) }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    subtotal: {
      type: Number,
      required: true,
    },
  },
})
</script>

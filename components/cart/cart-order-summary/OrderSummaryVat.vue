<template>
  <div
    class="order-summary-vat-container d-flex justify-space-between align-center"
  >
    <p class="text-subtitle-2 text-md-body-2 font-italic text-uppercase">
      {{ $t('cart.vat') }}
    </p>
    <p class="text-subtitle-2 text-md-body-2 text-capitalize">
      {{ new Intl.NumberFormat('en-US').format(vat) }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    vat: {
      type: Number,
      required: true,
    },
  },
})
</script>

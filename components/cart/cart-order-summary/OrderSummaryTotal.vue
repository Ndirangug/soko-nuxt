<template>
  <div
    class="order-summary-total-container d-flex justify-space-between align-center"
  >
    <p
      class="text-subtitle-1 text-md-body-1 text-capitalize font-weight-bold mb-0"
    >
      {{ $t('cart.total') }}
    </p>
    <p class="text-subtitle-1 text-md-body-1 font-weight-bold mb-0">
      {{ new Intl.NumberFormat('en-US').format(total) }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
})
</script>

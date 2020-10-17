<template>
  <div
    class="order-summary-voucher-amount-container d-flex justify-space-between align-start"
  >
    <div class="label">
      <p class="text-subtitle-2 text-md-body-2 mb-0">
        {{ $t('cart.voucher_amount') }}
      </p>

      <p
        v-if="discount !== null"
        class="text-subtitle-2 text-md-body-2 font-weight-light font-italic mb-0"
      >
        (
        {{ discount }} {{ $t('cart.discount_on_order_amount') }}
        )
      </p>
    </div>

    <div class="amount text-subtitle-2 text-md-body-2">
      (
      {{ new Intl.NumberFormat('en-US').format(voucherAmount) }}
      )
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    discount: {
      type: String,
      required: true,
    },
    voucherAmount: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.label {
  p {
    &:first-of-type {
      &:first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>

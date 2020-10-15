<template>
  <div
    class="cart-summary-container d-flex flex-column justify-start align-center px-4 py-8 elevation-10"
  >
    <h3 class="text-h6 text-md-h5 font-weight-medium text-uppercase">
      {{ $t('cart.order_summary') }}
    </h3>

    <v-divider class="title-divider mt-4 mb-3" />

    <div class="subtotal d-flex justify-space-between align-center full-width">
      <p class="text-subtitle-2 text-md-body-1 text-capitalize">
        {{ $t('cart.subtotal') }}
      </p>
      <p class="text-subtitle-2 text-md-body-1">{{ subtotal }}</p>
    </div>

    <div class="vat d-flex justify-space-between align-center full-width">
      <p class="text-subtitle-2 text-md-body-1 font-italic text-uppercase">
        {{ $t('cart.vat') }}
      </p>
      <p class="text-subtitle-2 text-md-body-1 text-capitalize">{{ vat }}</p>
    </div>

    <div class="shipping d-flex justify-space-between align-center full-width">
      <p class="text-subtitle-2 text-md-body-1 text-capitalize">
        {{ $t('cart.shipping') }}
      </p>
      <p class="text-subtitle-2 text-md-body-1 font-italic">
        {{ $t('cart.not_calculated') }}
      </p>
    </div>

    <v-divider class="section-divider" />

    <div class="estimated-total d-flex justify-center align-start full-width">
      <p
        class="text-subtitle-2 text-md-body-1 text-capitalize font-weight-medium"
      >
        {{ $t('cart.estimated_total') }}
      </p>
      <p class="text-subtitle-2 text-md-body-1 font-weight-medium">
        {{ estimatedTotal }}
      </p>
    </div>

    <div
      class="voucher-input d-flex flex-column justify-center align-stretch full-width"
    >
      <p class="text-caption vocher-query text-md-subtitle-2 font-italic">
        {{ $t('cart.do_you_have_voucher') }}
      </p>

      <v-text-field filled full-width>
        <template v-slot:placeholder>
          <div class="text-capitalize">{{ $t('cart.enter_code') }}</div>
        </template>
      </v-text-field>

      <v-btn tile color="primary" class="align-self-end">
        {{ $t('cart.apply') }}
      </v-btn>
    </div>

    <div
      class="voucher-amount d-flex justify-space-between align-start full-width"
    >
      <div class="label">
        <p>{{ $t('cart.voucher_amount') }}</p>
        <p>{{ discount }} {{ $t('cart.discount_on_order_amount') }}</p>
      </div>
      <div class="amount">
        {{ voucherAmount }}
      </div>
    </div>

    <v-divider class="section-divider" />

    <div class="total d-flex justify-space-between align-center full-width">
      <p class="text-subtitle-2 text-md-body-1 text-capitalize">
        {{ $t('cart.total') }}
      </p>
      <p class="text-subtitle-2 text-md-body-1">{{ total }}</p>
    </div>

    <div
      class="shipping-fees-alert d-flex justify-center align-center full-width"
    >
      <p class="text-caption text-md-subtitle-2 mb-0 font-italic">
        {{ $t('cart.shipping_fees_not_yet_calculated') }}
      </p>
    </div>

    <div class="checkout-btn d-flex justify-center align-center full-width">
      <v-btn tile outlined color="primary">
        <span class="mr-2 mr-sm-4 mr-md-2 mr-lg-4">
          {{ $t('cart.proceed_to_checkout') }}
        </span>
        <v-icon> {{ icons.chevronRight }} </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      icons: {
        chevronRight: mdiChevronRight,
      },
    }
  },
  computed: {
    subtotal(): number {
      return 100000
    },
    vat(): number {
      return 13500
    },
    estimatedTotal(): number {
      return this.subtotal + this.vat
    },
    voucherAmount(): number {
      return 5000
    },
    total(): number {
      return this.subtotal - this.voucherAmount
    },
    discount(): string {
      return '5%'
    },
  },
})
</script>

<style lang="scss" scoped>
.cart-summary-container {
  background-color: white;

  .voucher-input {
    .voucher-query {
      &:first-letter {
        text-transform: uppercase;
      }
    }
  }

  .title-divider {
    border-color: $green-primary;
    border-width: 2px 0 0 0;
  }

  .section-divider {
    border-color: #707070b4;
    border-width: 2px 0 0 0;
  }

  .full-width {
    width: 100%;
  }
}
</style>

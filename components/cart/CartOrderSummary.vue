<template>
  <div
    class="cart-summary-container d-flex flex-column justify-start align-center px-4 px-lg-6 pt-12 pb-9"
    :class="{
      'bg-grey': $vuetify.breakpoint.smAndDown,
      'elevation-10': $vuetify.breakpoint.mdAndUp,
    }"
  >
    <h3
      v-if="$vuetify.breakpoint.mdAndUp"
      class="text-subtitle-2 text-md-h6 font-weight-bold text-uppercase"
    >
      {{ $t('cart.order_summary') }}
    </h3>

    <v-divider
      v-if="$vuetify.breakpoint.mdAndUp"
      class="title-divider mt-4 mb-3 full-width"
    />

    <div class="subtotal full-width">
      <OrderSummarySubtotal :subtotal="subtotal" />
    </div>

    <div class="vat full-width">
      <OrderSummaryVat :vat="vat" />
    </div>

    <div class="shipping full-width">
      <OrderSummaryShipping />
    </div>

    <v-divider class="section-divider full-width mt-n1 mb-2" />

    <div class="estimated-total full-width">
      <OrderSummaryEstimatedTotal :estimated-total="estimatedTotal" />
    </div>

    <div
      class="voucher-section d-flex flex-column justify-center align-stretch full-width"
    >
      <OrderSummaryVoucherInput class="mb-7" :voucher.sync="voucher" />
      <OrderSummaryVoucherAmount
        :discount="discount"
        :voucher-amount="voucherAmount"
      />
    </div>

    <v-divider class="section-divider full-width my-2 my-md-4" />

    <div class="total full-width mb-4 mb-md-6">
      <OrderSummaryTotal :total="total" />
    </div>

    <div class="shipping-fees-not-calculated-alert full-width">
      <ShippingFeesNotCalculatedAlert />
    </div>

    <div
      class="checkout-btn d-flex justify-center align-center full-width mt-10"
    >
      <v-btn tile outlined color="primary" @click="proceedToCheckout">
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
import { Voucher } from '~/types/types'

export default Vue.extend({
  data(): { [keys: string]: any; voucher: Voucher | null } {
    return {
      icons: {
        chevronRight: mdiChevronRight,
      },
      voucher: null,
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
      let amount = 0

      if (this.voucher !== null && this.voucher !== undefined) {
        amount =
          this.voucher.discount.discountType === 'PERCENTAGE'
            ? this.estimatedTotal * (this.voucher.discount.amount / 100) // calculate percentage discount on estimatedTotal
            : this.estimatedTotal - this.voucher.discount.amount
      }

      return amount
    },
    total(): number {
      return this.estimatedTotal - this.voucherAmount
    },
    discount(): string {
      return this.voucher !== null ? this.voucher.description : ''
    },
  },

  methods: {
    proceedToCheckout() {
      // TODO implement this
      this.$router.push(this.localePath('/checkout'))
    },
  },
})
</script>

<style lang="scss" scoped>
.cart-summary-container {
  background-color: white;

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

.bg-grey {
  background-color: $grey-background !important;
}
</style>

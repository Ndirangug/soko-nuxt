<template>
  <div class="checkout-order-summary-container px-2 px-sm-8 pa-md-5 pa-lg-8">
    <h3
      v-if="$vuetify.breakpoint.mdAndUp"
      class="text-subtitle-2 text-md-h6 font-weight-bold text-uppercase"
    >
      {{ $t('checkout.your_order') }}
      (
      {{ itemsCount }}
      {{ $t('checkout.items') }}
      )
    </h3>

    <v-divider
      v-if="$vuetify.breakpoint.mdAndUp"
      class="title-divider mt-2 full-width"
    />

    <div class="cart-items-summary py-3">
      <CheckoutCartItemsSummary
        :class="{ 'elevation-1': $vuetify.breakpoint.smAndDown }"
      />
    </div>

    <v-divider class="section-divider full-width mt-4 mt-md-n1 mb-4 mb-md-2" />

    <div class="subtotal full-width">
      <OrderSummarySubtotal :subtotal="subtotal" />
    </div>

    <div class="vat full-width">
      <OrderSummaryVat :vat="vat" />
    </div>

    <div class="shipping full-width">
      <OrderSummaryShipping :shipping-fee="shippingFee" />
    </div>

    <v-divider class="section-divider full-width mt-1 mt-md-n1 mb-3 mb-md-2" />

    <div class="estimated-total full-width">
      <OrderSummaryEstimatedTotal :estimated-total="estimatedTotal" />
    </div>

    <div
      class="voucher-section d-flex flex-column justify-center align-stretch full-width mt-1"
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

    <div
      v-if="shippingFee == null"
      class="shipping-fees-not-calculated-alert full-width"
    >
      <ShippingFeesNotCalculatedAlert />
    </div>

    <div
      class="modify-cart-btn d-flex justify-center align-center full-width mt-10"
    >
      <v-btn tile text color="primary" :to="localePath('/cart')">
        <span class="mr-2 mr-sm-4 mr-md-2 mr-lg-4">
          {{ $t('checkout.modify_cart') }}
        </span>
        <v-icon> {{ icons.edit }} </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiPencil } from '@mdi/js'
import { CartItem, Voucher } from '~/types/types'
import { cartStore } from '~/store'
import { EventBus } from '~/utils/event-bus'

export default Vue.extend({
  data(): { [keys: string]: any; voucher: Voucher | null } {
    return {
      icons: {
        edit: mdiPencil,
      },
      voucher: null,
      shippingFee: null,
    }
  },

  computed: {
    subtotal(): number {
      let priceSum = 0

      this.cartItems.forEach((cartItem) => {
        priceSum += cartItem.product.price * cartItem.quantity
      })

      return priceSum
    },
    vat(): number {
      let vatSum = 0

      this.cartItems.forEach((cartItem) => {
        vatSum += Math.round(
          (cartItem.product.vat / 100) *
            (cartItem.product.price * cartItem.quantity)
        )
      })

      return vatSum
    },
    estimatedTotal(): number {
      const shipping =
        this.shippingFee !== null && this.shippingFee !== undefined
          ? this.shippingFee
          : 0
      console.log(this.shippingFee)
      console.log(shipping)

      return this.subtotal + this.vat + shipping
    },
    voucherAmount(): number {
      let amount = 0

      if (this.voucher !== null) {
        amount =
          this.voucher.discount.discountType === 'PERCENTAGE'
            ? this.estimatedTotal * (this.voucher.discount.amount / 100) // calculate percentage discount on estimatedTotal
            : this.voucher.discount.amount
      }

      return amount
    },
    total(): number {
      return this.estimatedTotal - this.voucherAmount
    },
    discount(): string {
      return this.voucher !== null ? this.voucher.description : ''
    },

    cartItems(): CartItem[] {
      return cartStore.cartItems
    },

    itemsCount(): number {
      return cartStore.cartItemsCount
    },
  },

  mounted() {
    EventBus.$on('update:shipping-fee', (value: number) => {
      this.shippingFee = value
    })
  },
})
</script>

<style lang="scss" scoped>
.checkout-order-summary-container {
  background-color: white;
  width: 100%;

  .title-divider {
    border-color: $green-primary;
    border-width: 2px 0 0 0;
  }

  .section-divider {
    border-color: #707070b4;
    border-width: 2px 0 0 0;
  }
}
</style>

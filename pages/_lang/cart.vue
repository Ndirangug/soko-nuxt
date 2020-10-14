<template>
  <div
    class="cart-root-container d-flex flex-column justify-start align-stretch"
  >
    <div class="top-banner bg-grey">
      <CartBanner />
    </div>

    <div class="cart-section bg-grey px-1 px-sm-8 px-md-16 pt-12 pb-10">
      <div class="top-nav">
        <CartBackButton :text="$t('cart.back_to_shopping')" />
      </div>

      <div class="the-cart my-4 my-sm-6 my-md-8">
        <TheCart />
      </div>

      <div class="bottom-nav">
        <CartBackButton :text="$t('cart.continue_shopping')" />
      </div>
    </div>

    <div class="recently-viewed"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { cartStore } from '~/store'

export default Vue.extend({
  data() {
    return {}
  },
  computed: {
    cartItems() {
      return cartStore.cartItems
    },
    cartItemsCount() {
      return cartStore.cartItemsCount
    },
  },

  layout: 'cart',
})
</script>

<style lang="scss" scoped>
.bg-grey {
  background-color: $grey-background;
}
</style>

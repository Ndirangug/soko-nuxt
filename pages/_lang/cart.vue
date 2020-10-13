<template>
  <div
    class="cart-root-container d-flex flex-column justify-start align-stretch"
  >
    <div class="top-banner">
      <CartBanner />
    </div>

    <div class="top-nav"></div>
    <div class="the-cart"></div>
    <div class="bottom-nav"></div>
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

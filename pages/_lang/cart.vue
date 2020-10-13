<template>
  <div
    class="cart-root-container d-flex flex-column justify-start align-stretch"
  >
    <div class="top-banner bg-grey">
      <CartBanner />
    </div>

    <div class="top-nav bg-grey"></div>
    <div class="the-cart bg-grey"></div>
    <div class="bottom-nav bg-grey"></div>
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

.top-nav {
  height: 200px;
}
</style>

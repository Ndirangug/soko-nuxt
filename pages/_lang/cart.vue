<template>
  <div>
    <h1>Cart</h1>
    <div v-for="(cartItem, i) in cartItems" :key="i">
      <p>{{ i }}</p>
      {{ cartItem }}
    </div>
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
})
</script>

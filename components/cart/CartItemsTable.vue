<template>
  <div
    class="cart-items-table-container d-flex flex-column justify-start align-center"
  >
    <div class="table-layout">
      <v-simple-table class="cart-items-table">
        <thead>
          <tr>
            <th
              class="text-body-1 text-capitalize font-weight-medium black--text"
            >
              {{ $t('cart.items') }}
            </th>
            <th
              class="text-body-1 text-capitalize font-weight-medium black--text"
            >
              {{ $t('cart.quantity') }}
            </th>
            <th
              class="text-body-1 text-capitalize font-weight-medium black--text"
            >
              {{ $t('cart.unit_price') }}
            </th>
            <th
              class="text-body-1 text-capitalize font-weight-medium black--text"
            >
              {{ $t('cart.total') }}
            </th>
          </tr>
        </thead>

        <tbody>
          <CartItemRow
            v-for="(cartItem, i) in cartItems"
            :key="i"
            :cart-item="cartItem"
          />
        </tbody>
      </v-simple-table>
    </div>

    <!-- <div v-else class="cards-layout"></div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { cartStore } from '~/store'
export default Vue.extend({
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

<style lang="scss" scoped>
.cart-items-table-container {
  .cart-items-table {
    background-color: $grey-background;
  }
}
</style>

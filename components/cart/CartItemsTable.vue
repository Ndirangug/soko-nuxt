<template>
  <div
    class="cart-items-table-container d-flex flex-column justify-start align-center"
  >
    <div class="table-layout">
      <v-container class="cart-items-table">
        <div class="header">
          <v-row>
            <v-col
              class="text-body-1 text-capitalize font-weight-bold black--text"
              cols="12"
              md="7"
            >
              {{ $t('cart.items') }}
              {{ `(${cartItemsCount})` }}
            </v-col>
            <v-col
              v-if="$vuetify.breakpoint.mdAndUp"
              class="text-body-1 text-capitalize font-weight-bold black--text text-center ml-n2"
              cols="auto"
              md="1"
            >
              {{ $t('cart.quantity') }}
            </v-col>
            <v-col
              v-if="$vuetify.breakpoint.mdAndUp"
              class="text-body-1 text-capitalize font-weight-bold black--text text-center"
              cols="auto"
              md="2"
            >
              {{ $t('cart.unit_price') }}
              {{ `(${$t('currency')})` }}
            </v-col>
            <v-col
              v-if="$vuetify.breakpoint.mdAndUp"
              class="text-body-1 text-capitalize font-weight-bold black--text text-center"
              cols="auto"
              md="2"
            >
              {{ $t('cart.total') }}
              {{ `(${$t('currency')})` }}
            </v-col>
          </v-row>
        </div>

        <v-divider class="divider" />

        <div class="body">
          <CartItemRow
            v-for="(cartItem, i) in cartItems"
            :key="i"
            :cart-item="cartItem"
          />
        </div>
      </v-container>
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

  .divider {
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 2px 0 0 0;
  }
}
</style>

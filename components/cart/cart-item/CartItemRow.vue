<template>
  <div>
    <div class="cart-item-row-container py-5">
      <v-row class="crt-itea-info-row">
        <v-col class="product-summary-cell flex-wrap" cols="12" md="7">
          <CartItemSummary
            :product="cartItem.product"
            :configurable-options="cartItem.configurableOptions"
            :total-cost="totalCost"
          />
        </v-col>

        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          class="quantity justify-center align-center"
          cols="auto"
          md="1"
        >
          <CartItemQuantityInput :quantity="quantity" />
        </v-col>

        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          class="unit-price justify-center align-center"
          cols="auto"
          md="2"
        >
          <CartItemUnitPrice :unit-price="cartItem.product.price" />
        </v-col>

        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          class="total justify-center align-center"
          cols="auto"
          md="2"
        >
          <CartItemTotalCost :total-cost="totalCost" />
        </v-col>
      </v-row>

      <v-row class="cart-item-actions-row">
        <CartItemActions :quantity="quantity" />
      </v-row>
    </div>

    <v-divider inset class="divider mt-0 mt-sm-0 mt-md-0" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { CartItem } from '~/types/types'

export default Vue.extend({
  props: {
    cartItem: {
      type: Object,
      required: true,
    } as PropOptions<CartItem>,
  },

  data() {
    return {
      quantity: this.cartItem.quantity,
    }
  },

  computed: {
    totalCost(): number {
      return this.quantity * this.cartItem.product.price
    },
  },
})
</script>

<style lang="scss" scoped>
.cart-item-row-container {
  .product-summary-cell {
    height: max-content;
  }
}

.divider {
  border-color: #a09a9ab0;
  border-width: 2px 0 0 0;
}
</style>

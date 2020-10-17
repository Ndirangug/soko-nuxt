<template>
  <div
    class="the-cart-container d-flex flex-column justify-start align-stretch flex-md-row justify-md-space-between align-md-start"
  >
    <div class="cart-items-table" :style="{ width: `${cartItemsWidth}%` }">
      <CartItemsTable />
    </div>

    <div class="cart-summary" :style="{ width: `${cartSummaryWidth}%` }">
      <CartOrderSummary />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    cartItemsWidth(): number {
      let width = 0

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          width = 70
          break
        case 'lg':
          width = 70
          break
        case 'md':
          width = 70
          break
        case 'sm':
          width = 100
          break
        case 'xs':
          width = 100
          break
        default:
          width = 70
          break
      }
      return width
    },

    cartSummaryWidth(): number {
      let width = 0

      // @ts-ignore
      if (this.$vuetify.breakpoint.mdAndUp) {
        width = Math.floor(100 - this.cartItemsWidth)
      } else {
        width = 100
      }
      return width
    },
  },
})
</script>

<style lang="scss" scoped>
.the-cart-container {
  width: 100%;
}
</style>

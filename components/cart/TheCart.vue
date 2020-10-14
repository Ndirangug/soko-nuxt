<template>
  <div
    class="the-cart-container d-flex flex-column justify-start align-center flex-md-row justify-md-center align-md-center"
  >
    <div class="cart-items-table">
      <CartItemsTable />
    </div>

    <div class="cart-summary">
      <CartSummary />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped></style>

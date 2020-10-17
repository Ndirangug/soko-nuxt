<template>
  <div class="cart-unit-price-container d-flex justify-center align-center">
    {{ new Intl.NumberFormat('en-US').format(unitPrice) }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    unitPrice: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.cart-unit-price-container {
  height: 100%;
}
</style>

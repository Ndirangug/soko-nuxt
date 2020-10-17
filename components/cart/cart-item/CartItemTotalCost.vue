<template>
  <div
    class="cart-item-total-cost-container d-flex justify-center align-center"
  >
    {{ new Intl.NumberFormat('en-US').format(totalCost) }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    totalCost: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.cart-item-total-cost-container {
  height: 100%;
}
</style>

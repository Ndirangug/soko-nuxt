<template>
  <!--TODO use an input component -->
  <div class="cart-quantity-container d-flex justify-center align-center">
    {{ quantity }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    quantity: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.cart-quantity-container {
  height: 100%;
}
</style>

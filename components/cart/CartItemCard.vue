<template>
  <div></div>
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
})
</script>

<style lang="scss" scoped></style>

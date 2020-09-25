<template>
  <div>
    <h1>Product Details</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    productID(): number {
      const idFromQueryParams: number =
        this.$route.query.id !== undefined &&
        !isNaN(parseInt(this.$route.query.id.toString()))
          ? parseInt(this.$route.query.id.toString())
          : 0

      return idFromQueryParams
    },
  },

  layout: 'product-details',
})
</script>

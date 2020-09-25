<template>
  <div>
    <h1>Product Details</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductDetails from '~/apollo/queries/product_details.graphql'
import { ProductDetailsQueryVariables } from '~/types/types'

export default Vue.extend({
  // @ts-ignore
  apollo: {
    productDetails: {
      query: ProductDetails,
      prefetch: true,
      variables(): ProductDetailsQueryVariables {
        return {
          // @ts-ignore
          productID: this.productID,
        }
      },
    },
  },
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

<template>
  <div id="product-reviews" class="product-reviews-container">
    <h1>Reviews</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ProductReviewsQueryVariables } from '~/types/types'
import { ProductReviews } from '~/apollo/queries/product_reviews.graphql'

export default Vue.extend({
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  // @ts-ignore
  apollo: {
    productDetails: {
      query: ProductReviews,
      prefetch: true,
      variables(): ProductReviewsQueryVariables {
        return {
          // @ts-ignore
          productID: parseInt(this.productId),
          sentiment: ['critical'],
          stars: [4, 5],
          sort: 'POSITIVE_FIRST',
          pagination: { start: 1, first: 30 },
        }
      },
    },
  },
})
</script>

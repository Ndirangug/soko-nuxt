<template>
  <div id="product-reviews" class="product-reviews-container pt-3 pt-md-4">
    <v-skeleton-loader v-if="$apollo.loading" type="image" />
    <div v-else>
      <div class="flex-container d-flex justify-center align-center flex-wrap">
        <div class="overall-rating">
          <OverrallRatingSummary
            :overall-rating="productDetails.productOverallRating"
          />
        </div>

        <div class="reviews">
          <ReviewsPanel :reviews="productDetails.productReviews" />
        </div>
      </div>
    </div>
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

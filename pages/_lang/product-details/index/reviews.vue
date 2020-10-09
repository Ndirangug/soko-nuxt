<template>
  <div id="product-reviews" class="product-reviews-container pt-6 pt-md-8">
    <v-skeleton-loader v-if="$apollo.loading" type="image" />
    <div v-else>
      <div
        class="flex-container d-flex flex-column flex-md-row justify-center align-center align-md-start"
      >
        <div
          class="overall-rating mb-8 mb-md-0"
          :style="{ 'max-width': $vuetify.breakpoint.mdAndUp ? '35%' : '100%' }"
        >
          <OverrallRatingSummary
            :overall-rating="productDetails.productOverallRating"
          />
        </div>

        <v-divider
          v-if="$vuetify.breakpoint.mdAndUp"
          class="divider mx-8"
          vertical
        />

        <div
          class="reviews"
          :style="{ 'max-width': $vuetify.breakpoint.mdAndUp ? '65%' : '100%' }"
        >
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

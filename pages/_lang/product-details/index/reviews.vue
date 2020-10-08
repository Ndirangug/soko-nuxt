<template>
  <div id="product-reviews" class="product-reviews-container pt-3 pt-md-4">
    <v-skeleton-loader v-if="$apollo.loading" type="image" />
    <div v-else>
      <div class="flex-container d-flex justify-center align-center flex-wrap">
        <div
          class="overrall-rating d-flex flex-column justify-center align-center"
        >
          <p class="text-body-2 text-md-body-1">
            {{ $t('productDetails.reviews.overrall_rating') }}
          </p>
          <p class="text-h1">
            {{ productDetails.productOverallRating.overallScore }}
          </p>
          <p class="text-caption">{{ $t('productDetails.reviews.out_of') }}</p>
          <div class="star-rating"></div>
          <p>
            {{ productDetails.productOverallRating.numberOfRatings }}
            {{ $t('productDetails.reviews.label') }}
          </p>
          <div class="progress-bars"></div>
        </div>
        <div
          class="reviews d-flex flex-column justify-center align-center"
        ></div>
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

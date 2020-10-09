<template>
  <div
    class="review-list-item-container d-flex flex-column align-start justify-center"
  >
    <div class="customer-review">
      <CustomerReview :customer-review="customerReviewSegment" />
    </div>

    <div class="review-reply align-self-end">
      <ReviewReply :reply="review.reply" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProductReview } from '~/types/types'
import { CustomerReviewSegment } from '~/types/ui'

export default Vue.extend({
  props: {
    review: {
      type: Object,
      required: true,
    } as PropOptions<ProductReview>,
  },

  computed: {
    customerReviewSegment(): CustomerReviewSegment {
      return {
        productReviewId: this.review.productReviewId,
        customer: this.review.customer,
        date: this.review.date,
        starRating: this.review.starRating,
        reviewMessage: this.review.reviewMessage,
      }
    },
  },
})
</script>

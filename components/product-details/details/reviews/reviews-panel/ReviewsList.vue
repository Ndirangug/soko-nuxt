<template>
  <div
    class="reviews-list-container d-flex flex-column justify-center align-center"
  >
    <ReviewsListItem
      v-for="(review, i) in reviews"
      :key="i"
      class="mb-6"
      :review="review"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ProductReview } from '~/types/types'

export default Vue.extend({
  props: {
    reviews: {
      type: Array as PropType<Array<ProductReview>>,
      required: true,
    },
  },
})
</script>

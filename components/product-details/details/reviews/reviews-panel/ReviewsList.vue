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
import Vue from 'vue'
export default Vue.extend({
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
})
</script>

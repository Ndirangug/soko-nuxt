<template>
  <div class="reviews-container d-flex flex-column justify-center align-center">
    <div class="filter-chips">
      <ReviewsFilterChips @update:filters="onUpdateFilters($event)" />
    </div>

    <div class="sort-by align-self-end mt-8 mb-6">
      <ReviewsSortBy />
    </div>

    <div class="reviews-list">
      <ReviewsList :reviews="reviews" />
    </div>
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

  methods: {
    onUpdateFilters(filters: string[]) {
      console.log(filters)
    },
  },
})
</script>

<style lang="scss" scoped>
.reviews-container {
  .filter-chips {
    max-width: 115%;
  }
}
</style>

<template>
  <div class="reviews-container d-flex flex-column justify-center align-center">
    <div class="fillter-chips">
      <ReviewsFilterChips @update:filters="onUpdateFilters($event)" />
    </div>

    <div class="sort-by align-self-end">
      <ReviewsSortBy />
    </div>

    <div class="reviews-list">
      <ReviewsList :reviews="reviews" />
    </div>
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

  methods: {
    onUpdateFilters(filters: string[]) {
      console.log(filters)
    },
  },
})
</script>

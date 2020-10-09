<template>
  <div class="review-list-item-container"></div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProductReview } from '~/types/types'

export default Vue.extend({
  props: {
    review: {
      type: Object,
      required: true,
    } as PropOptions<ProductReview>,
  },
})
</script>

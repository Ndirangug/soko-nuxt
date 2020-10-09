<template>
  <div
    class="review-reply-container ml-8 ml-md-166 pa-4 d-flex flex-column justify-center align-center"
  >
    <div class="review-reply-header d-flex justify-space-between align-center">
      <p class="seller-name mr-2">{{ reply.seller.sellerName }}</p>
      <p class="date">
        <!-- {{ new Intl.DateTimeFormat('en-GB').format(reply.date) }} -->
        {{ reply.date }}
      </p>
    </div>

    <div class="review-reply-content">
      <p class="text-body-1">{{ reply.replyMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProductReviewReply } from '~/types/types'

export default Vue.extend({
  props: {
    reply: {
      type: Object,
      required: true,
    } as PropOptions<ProductReviewReply>,
  },
})
</script>

<style lang="scss" scoped>
.review-reply-container {
  background-color: $green-accent;

  .review-reply-header {
    width: 100%;
  }
}
</style>

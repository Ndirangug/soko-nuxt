<template>
  <div
    class="review-reply-container ml-10 ml-md-16 pa-4 d-flex flex-column justify-center align-center"
  >
    <div
      class="review-reply-header d-flex justify-space-between align-center mb-4 flex-wrap"
    >
      <p class="seller-name mr-2 mb-0 text-subtitle-1 font-weight-medium">
        {{ reply.seller.sellerName }}
      </p>
      <p class="date mb-0 text-subtitle-2 text-sm-subtitle-1">
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

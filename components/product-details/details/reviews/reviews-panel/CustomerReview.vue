<template>
  <div class="customer-review-container d-flex justify-center align-start">
    <div class="avatar mr-6">
      <v-avatar :size="avatarSize">
        <v-img :src="customerReview.customer.avatarUrl" />
      </v-avatar>
    </div>

    <div class="content d-flex flex-column justify-start align-start">
      <div
        class="customer-name text-body-1 font-weight-medium text-sm-h6 mb-1 mb-sm-2"
      >
        <p class="mb-0">
          {{ customerReview.customer.firstName }}
          {{ customerReview.customer.lastName }}
        </p>
      </div>

      <div
        class="rating-date d-flex justify-start align-center flex-wrap mb-2 mb-sm-2 mr-6 mr-md-6s"
      >
        <div class="star-rating mr-4 mr-sm-8">
          <v-rating
            background-color="grey"
            color="yellow accent-2"
            readonly
            dense
            :small="$vuetify.breakpoint.xs"
            :value="customerReview.starRating"
          />
        </div>

        <div class="date text-subtitle-2 text-sm-subtitle-1">
          <p class="mb-0">
            {{
              new Intl.DateTimeFormat('en-GB', {
                dateStyle: 'short',
                timeStyle: 'medium',
                hour12: true,
              }).format($dayjs(customerReview.date).toDate())
            }}
          </p>
        </div>
      </div>

      <div class="message text-body-1">
        <p>{{ customerReview.reviewMessage }}</p>
      </div>
    </div>

    <div class="menu-icon"></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { CustomerReviewSegment } from '~/types/ui'

export default Vue.extend({
  props: {
    customerReview: {
      type: Object,
      required: true,
    } as PropOptions<CustomerReviewSegment>,
  },

  computed: {
    avatarSize(): number {
      let size = 0

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          size = 48
          break
        case 'lg':
          size = 48
          break
        case 'md':
          size = 48
          break
        case 'sm':
          size = 48
          break
        case 'xs':
          size = 48
          break
        default:
          size = 48
          break
      }

      return size
    },
  },
})
</script>

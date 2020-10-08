<template>
  <div
    class="overrall-rating-container d-flex flex-column justify-center align-center"
  >
    <p class="text-body-2 text-md-body-1">
      {{ $t('productDetails.reviews.overrall_rating') }}
    </p>
    <p class="text-h1">
      {{ overallRating.overallScore }}
    </p>
    <p class="text-caption">{{ $t('productDetails.reviews.out_of') }}</p>
    <div class="star-rating">
      <v-rating
        background-color="grey"
        color="yellow accent-2"
        readonly
        dense
        :small="$vuetify.breakpoint.smAndDown"
        :value="overallRating.overallScore"
      />
    </div>
    <p>
      {{ overallRating.numberOfRatings }}
      {{ $t('productDetails.reviews.label') }}
    </p>
    <div class="progress-bars"></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProductOverallRating } from '~/types/types'

export default Vue.extend({
  props: {
    overallRating: {
      type: Object,
      required: true,
    } as PropOptions<ProductOverallRating>,
  },
})
</script>

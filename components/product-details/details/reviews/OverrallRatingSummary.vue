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

    <div
      class="progress-bars d-flex flex-column-reverse justify-center align-center"
    >
      <div class="progress d-flex justify-center align-center">
        <p class="progress-label">1</p>
        <v-progress-linear
          class="progress-progress-bar"
          background-color="accent"
          color="primary"
          rounded
          height="8"
          :value="fiveStar"
        />
      </div>

      <div class="progress d-flex justify-center align-center">
        <p class="progress-label">2</p>
        <v-progress-linear
          class="progress-progress-bar"
          background-color="accent"
          color="primary"
          rounded
          height="8"
          :value="fourStar"
        />
      </div>

      <div class="progress d-flex justify-center align-center">
        <p class="progress-label">3</p>
        <v-progress-linear
          class="progress-progress-bar"
          background-color="accent"
          color="primary"
          rounded
          height="8"
          :value="threeStar"
        />
      </div>

      <div class="progress d-flex justify-center align-center">
        <p class="progress-label">4</p>
        <v-progress-linear
          class="progress-progress-bar"
          background-color="accent"
          color="primary"
          rounded
          height="8"
          :value="twoStar"
        />
      </div>

      <div class="progress d-flex justify-center align-center">
        <p class="progress-label">5</p>
        <v-progress-linear
          class="progress-progress-bar"
          background-color="accent"
          color="primary"
          rounded
          height="8"
          :value="oneStar"
        />
      </div>
    </div>
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

  computed: {
    fiveStar(): number {
      return Math.floor(
        (this.overallRating.fiveStar / this.overallRating.numberOfRatings) * 100
      )
    },
    fourStar(): number {
      return Math.floor(
        (this.overallRating.fourStar / this.overallRating.numberOfRatings) * 100
      )
    },
    threeStar(): number {
      return Math.floor(
        (this.overallRating.threeStar / this.overallRating.numberOfRatings) *
          100
      )
    },
    twoStar(): number {
      return Math.floor(
        (this.overallRating.twoStar / this.overallRating.numberOfRatings) * 100
      )
    },
    oneStar(): number {
      return Math.floor(
        (this.overallRating.oneStar / this.overallRating.numberOfRatings) * 100
      )
    },
  },
})
</script>

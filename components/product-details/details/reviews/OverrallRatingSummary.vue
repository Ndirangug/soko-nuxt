<template>
  <div
    class="overrall-rating-container d-flex flex-column justify-center align-center"
  >
    <p class="text-body-2 text-sm-body-1 text-capitalize font-weight-medium">
      {{ $t('productDetails.reviews.overrall_rating') }}
    </p>

    <p class="text-h1 font-weight-medium mb-0">
      {{ overallRating.overallScore }}
    </p>

    <p class="text-subtitle-1 mb-0">
      {{ $t('productDetails.reviews.out_of') }}
    </p>

    <div class="star-rating mt-1 mb-1">
      <v-rating
        background-color="grey"
        color="yellow accent-2"
        readonly
        dense
        :small="$vuetify.breakpoint.xs"
        :value="overallRating.overallScore"
      />
    </div>

    <p class="text-subtitle-2 font-weight-regular">
      {{ overallRating.numberOfRatings }}
      {{ $t('productDetails.reviews.label') }}
    </p>

    <div
      class="progress-bars d-flex flex-column justify-center align-center mt-5"
    >
      <div class="progress d-flex justify-center align-center">
        <p class="progress-label mb-0 mr-5">5</p>
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
        <p class="progress-label mb-0 mr-5">4</p>
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
        <p class="progress-label mb-0 mr-5">3</p>
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
        <p class="progress-label mb-0 mr-5">2</p>
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
        <p class="progress-label mb-0 mr-5">1</p>
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

<style lang="scss" scoped>
.progress-progress-bar {
  min-width: 150px;
}
</style>

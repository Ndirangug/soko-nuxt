<template>
  <div class="d-flex align-center justify-sm-end flex-wrap">
    <div class="star-rating mr-2 mr-md-1">
      <v-rating
        background-color="grey"
        color="yellow accent-2"
        readonly
        dense
        :small="$vuetify.breakpoint.smAndDown"
        :value="product.productOverallRating.overallScore"
      />
    </div>
    <div class="label">
      <nuxt-link
        to="#"
        class="text-capitalize text-decoration-none"
        :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }"
      >
        {{ product.productOverallRating.numberOfRatings }}
        {{ $t('product_details.customer_reviews') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProductOverallRating } from '~/types/types'

interface ProductRatingsSegment {
  productOverallRating: ProductOverallRating
}

export default Vue.extend({
  props: {
    productRatingsSegment: {
      type: Object,
      required: true,
    } as PropOptions<ProductRatingsSegment>,
  },

  computed: {
    product(): ProductRatingsSegment {
      return {
        productOverallRating: this.productRatingsSegment.productOverallRating,
      }
    },
  },
})
</script>

// unsccoped so that it overrides default vuetify styles
<style lang="scss">
.star-rating {
  .v-rating {
    button {
      padding: 0 !important;
    }
  }
}
</style>

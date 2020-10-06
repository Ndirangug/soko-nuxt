<template>
  <div class="product-details-container">
    <div class="product-images">
      <v-skeleton-loader v-if="$apollo.loading" type="image" />
      <ProductDetailsCarousel
        v-else
        :images="productDetails.images"
        :thumbnails="productDetails.thumbnails"
      />
    </div>

    <v-scroll-x-transition>
      <div
        class="product-summary"
        :class="[
          topOffSet,
          { 'position-initial': $vuetify.breakpoint.smAndDown },
        ]"
      >
        <v-skeleton-loader v-if="$apollo.loading" type="image" />
        <ProductSummary v-else :product="productDetails" />
      </div>
    </v-scroll-x-transition>

    <div class="details">
      <DetailsTabs :product-id="productDetails.productID" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ProductDetailsSummary } from '~/apollo/queries/product_details_summary.graphql'
import { ProductDetailsSummaryQueryVariables } from '~/types/types'
import { IsLoadingMixin } from '~/components/mixins/Loading'

export default Vue.extend({
  mixins: [IsLoadingMixin],
  // @ts-ignore
  apollo: {
    productDetails: {
      query: ProductDetailsSummary,
      prefetch: true,
      variables(): ProductDetailsSummaryQueryVariables {
        return {
          // @ts-ignore
          productID: this.productID,
        }
      },
    },
  },

  computed: {
    productID(): number {
      const idFromQueryParams: number =
        this.$route.query.id !== undefined &&
        !isNaN(parseInt(this.$route.query.id.toString()))
          ? parseInt(this.$route.query.id.toString())
          : 0

      return idFromQueryParams
    },

    topOffSet(): string {
      // @ts-ignore
      return `top-${this.$vuetify.breakpoint.name}`
    },
  },

  layout: 'product-details',
  middleware: ['product-details'],
})
</script>

<style lang="scss" scoped>
.product-details-container {
  .product-summary {
    position: relative;
    right: 5vw;
    float: right;
  }

  .top-xl {
    top: -55vw;
  }
  .top-lg {
    top: -57vw;
  }
  .top-md {
    top: -59vw;
  }
  .top-sm {
    top: -57vw;
  }

  .position-initial {
    position: initial;
    float: none;
    width: 100%;
  }
}
</style>

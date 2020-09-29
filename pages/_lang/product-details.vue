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
    <div
      class="product-summary"
      :class="[topOffSet, { 'position-initial': $vuetify.breakpoint.xs }]"
    >
      <ProductSummary />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductDetails from '~/apollo/queries/product_details.graphql'
import { ProductDetailsQueryVariables } from '~/types/types'

export default Vue.extend({
  // @ts-ignore
  apollo: {
    productDetails: {
      query: ProductDetails,
      prefetch: true,
      variables(): ProductDetailsQueryVariables {
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
    top: -55vw;
  }
  .top-md {
    top: -56vw;
  }
  .top-sm {
    top: -57vw;
  }
  .top-xs {
  }

  .position-initial {
    position: initial;
  }
}
</style>

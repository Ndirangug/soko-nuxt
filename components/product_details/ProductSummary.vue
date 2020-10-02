// FIXME Content overflowing on screen size md, restyle xl screenSize
<template>
  <v-sheet
    class="product-summary-container px-6 py-6 px-sm-10 py-sm-10 px-md-6 py-md-3"
    :max-height="$vuetify.breakpoint.mdAndUp ? sheetHeight : ''"
    :width="$vuetify.breakpoint.mdAndUp ? sheetWidth : ''"
  >
    <div
      class="root-flex-container d-flex flex-column justify-center align-start"
    >
      <div
        class="summary fill-width d-flex flex-column justify-start align-start"
      >
        <ProductSummaryBreadCrumbs
          :product-title="product.title"
          :product-id="product.productID"
        />

        <div
          class="product-title mt-1 mt-md-1 mt-lg-2 mb-2 mb-sm-1 mb-md-1 mb-lg-4"
        >
          <ProductSummaryTitle :product-title="product.title" />
        </div>

        <div
          class="price-reviews fill-width d-flex flex-column flex-sm-row justify-sm-space-between align-sm-center flex-sm-wrap"
        >
          <div class="price mr-4">
            <ProductSummaryPrice
              :product-price-segment="{
                price: product.price,
                discount: product.discount,
              }"
            />
          </div>
          <div
            class="reviews mt-n5 mt-sm-8 mt-md-n3 mb-3 mb-md-1 mt-lg-0 mb-lg-n6"
          >
            <ProductSummaryReviews
              :product-ratings-segment="{
                productOverallRating: product.productOverallRating,
              }"
            />
          </div>
        </div>
      </div>

      <v-divider class="divider" />

      <div
        class="seller-and-shipping-info d-flex flex-column justify-start align-stretch mt-3 mt-md-1 font-weight-regular"
        :class="{ 'text-subtitle-2': $vuetify.breakpoint.smAndDown }"
      >
        <div class="seller-info">
          <ProductSummarySellerInfo
            :product-seller-info-segment="{
              brand: product.brand,
              seller: product.seller,
            }"
          />
        </div>
        <div class="shipping-info">
          <ProductSummaryShippingInfo
            :dispatch-location="product.seller.dispatchLocation"
          />
        </div>
      </div>

      <div
        class="configure fill-width mt-6 mt-sm-6 mt-md-4 mt-lg-8 mb-md-2 mb-lg-0"
      >
        <Configurables :configurables="product.configurables" />
      </div>

      <div class="quantity-input">
        <QuantityInput />
      </div>

      <div class="summary-actions fill-width">
        <SummaryActions />
      </div>

      <div class="share fill-width mt-10 mt-md-5 mt-lg-10 justify-self-end">
        <ShareProduct />
      </div>

      <div class="tags fill-width mt-2">
        <ProductTags :tags="product.tags" />
      </div>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Product } from '~/types/types'

export default Vue.extend({
  props: {
    product: {
      type: Object,
      required: true,
    } as PropOptions<Product>,
  },

  computed: {
    sheetHeight(): string {
      let height = ''
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          height = '50vw'
          break
        case 'lg':
          height = '54vw'
          break
        case 'md':
          height = '56vw'
          break
        default:
          break
      }
      return height
    },

    sheetWidth(): string {
      let width = ''
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          width = '50vw'
          break
        case 'lg':
          width = '50vw'
          break
        case 'md':
          width = '52vw'
          break
        case 'sm':
          width = '50vw'
          break
        case 'xs':
          width = '50vw'
          break
        default:
          break
      }
      return width
    },
  },
})
</script>

<style lang="scss" scoped>
.product-summary-container {
  background-color: $grey-background-transparent;

  .divider {
    border-color: rgba(0, 0, 0, 0.32) !important;
    width: 100%;
  }

  .seller-and-shipping-info {
    width: 100%;
  }

  .fill-width {
    width: 100%;
  }
}
</style>

<template>
  <div class="seller-info-container">
    <div class="brand text-capitalize my-1">
      <p>
        {{ $t('productDetails.brand') + ':' }}
        <nuxt-link
          class="text-decoration-none"
          :to="localePath(`/products/browse-products?brand=${product.brand}`)"
        >
          {{ product.brand }}
        </nuxt-link>
      </p>
    </div>

    <div
      class="seller d-flex flex-column flex-lg-row align-start align-lg-center justify-center justify-lg-space-between flex-lg-wrap my-1"
    >
      <p class="mr-2">
        <span class="text-capitalize">
          {{ $t('productDetails.seller') + ':' }}
        </span>

        <nuxt-link
          class="text-decoration-none text-capitalize"
          :to="localePath(`/sellers/?id=${product.seller.sellerID}`)"
        >
          {{ product.seller.sellerName }}
        </nuxt-link>
        |
        <nuxt-link
          :to="
            localePath(
              `/products/browse-products?seller=${product.seller.sellerID}`
            )
          "
        >
          <span class="text-sentence">
            {{ $t('productDetails.similar_from') }}
          </span>

          <span class="text-capitalize">
            {{ product.seller.sellerName }}
          </span>
        </nuxt-link>
      </p>

      <p>
        <span class="text-capitalize mt-1 mt-md-0">
          {{ $t('productDetails.seller_score') + ':' }}
        </span>

        {{
          new Intl.NumberFormat('en-US', { style: 'percent' }).format(
            product.seller.sellerScore
          )
        }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Seller } from '~/types/types'

interface ProductSellerInfoSegment {
  brand: string
  seller: Seller
}

export default Vue.extend({
  props: {
    productSellerInfoSegment: {
      type: Object,
      required: true,
    } as PropOptions<ProductSellerInfoSegment>,
  },

  computed: {
    product(): ProductSellerInfoSegment {
      return {
        brand: this.productSellerInfoSegment.brand,
        seller: this.productSellerInfoSegment.seller,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.seller-info-container {
  p {
    margin-bottom: 0;
  }
}

.text-sentence {
  @include sentence-case();
}
</style>

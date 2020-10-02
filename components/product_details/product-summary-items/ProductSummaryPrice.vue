<template>
  <div class="price-container">
    <div v-if="percentageDiscountPresent" class="price-before-discount">
      <v-badge offset-x="-0.6vw" offset-y="1.3vw" color="accent" tile>
        <div slot="badge" class="black--text font-weight-medium">
          {{ `-${product.discount.amount}%` }}
        </div>

        <p
          class="grey--text text-decoration-line-through ma-0"
          :class="{ 'text-body-2': $vuetify.breakpoint.smAndDown }"
        >
          {{ $t('currency') }}
          {{
            new Intl.NumberFormat('en-US', {
              style: 'decimal',
              maximumFractionDigits: 0,
            }).format(priceBeforeDiscount)
          }}
        </p>
      </v-badge>
    </div>

    <div class="price-after-discount">
      <p class="primary--text text-h5 text-md-h4 text-lg-h3 font-weight-bold">
        {{ $t('currency') }}
        {{
          new Intl.NumberFormat('en-US', {
            style: 'decimal',
            maximumFractionDigits: 0,
          }).format(productPrice)
        }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProductDiscountMixin } from '~/components/mixins/ProductDiscount'
import { Discount } from '~/types/types'

interface ProductPriceSegment {
  price: number
  discount: Discount
}

export default Vue.extend({
  mixins: [ProductDiscountMixin],
  props: {
    productPriceSegment: {
      type: Object,
      required: true,
    } as PropOptions<ProductPriceSegment>,
  },

  computed: {
    // we use a computed property instead of directly accessing the prop for compatibility
    // with mixin ProductDiscountMixin. It depends on a 'product' property being available in the cocmponent.
    // The mixin provides computed properties  'percentageDiscountPresent(true/false)' 'priceBeforeDiscount' 'priceAfterDiscount'
    //  and 'productPrice' which is a wrapper that lets you easily access already computed price, already
    // checked for discount presence
    //
    // Also just for convenience so we can say like 'product.price' in the template
    product(): ProductPriceSegment {
      return {
        price: this.productPriceSegment.price,
        discount: this.productPriceSegment.discount,
      }
    },
  },
})
</script>

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
      <v-skeleton-loader v-if="$apollo.loading" type="image" />
      <DetailsTabs v-else :product-id="productDetails.productID" />
    </div>

    <div class="pair-it-up-with pt-8 pt-md-8">
      <v-skeleton-loader v-if="$apollo.loading" type="image" />
      <PairItUpWith v-else :product-id="parseInt(productDetails.productID)" />
    </div>

    <div class="more-from-this-seller pt-8 pt-md-8">
      <v-skeleton-loader v-if="$apollo.loading" type="image" />
      <MoreFromThisSeller
        v-else
        :product-id="parseInt(productDetails.productID)"
        :seller-name="productDetails.seller.sellerName"
        :seller-id="parseInt(productDetails.seller.sellerID)"
      />
    </div>

    <div class="sponsored pt-8 pt-md-8">
      <v-skeleton-loader v-if="$apollo.loading" type="image" />
      <v-skeleton-loader v-if="$apollo.loading" type="image" />
      <Sponsored :product-id="parseInt(productDetails.productID)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ProductDetailsSummary } from '~/apollo/queries/product_details_summary.graphql'
import { ProductDetailsSummaryQueryVariables } from '~/types/types'
import { IsLoadingMixin } from '~/components/mixins/Loading'
import { EventBus } from '~/utils/event-bus'

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
          productId: this.productID,
        }
      },
    },
  },

  data() {
    return {
      customerInput: {
        configurables: {},
        quantity: 0,
      },
    }
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

  mounted() {
    // @ts-ignore
    EventBus.$on('update:configurable', this.onUpdateConfigurables)
    // @ts-ignore
    EventBus.$on('update:quantity', this.onUpdateQuantity)
    // @ts-ignore
    EventBus.$on('add-to-cart', this.onAddToCart)
  },

  methods: {
    onUpdateConfigurables(configurable: { [key: string]: string }) {
      // @ts-ignore
      this.customerInput.configurables = {
        // @ts-ignore
        ...this.customerInput.configurables,
        ...configurable,
      }
    },
    onUpdateQuantity(quantity: number) {
      // @ts-ignore
      this.customerInput.quantity = quantity
    },
    onAddToCart() {
      console.log('add to cart')
      // @ts-ignore
      console.log(this.customerInput)

      // const configurableOptions: ConfigurableOption[] = []

      // // @ts-ignore
      // for (const key in this.customerInput.configurables) {
      //   configurableOptions.push({
      //     // @ts-ignore
      //     name: this.customerInput.configurables[key],
      //     // @ts-ignore
      //     configurable: { configurableType: key },
      //   })
      // }

      // const cartItem: CartItem = {
      //   // @ts-ignore
      //   cartItemId: null,
      //   customer: { customerID: authStore.customer.customerID },
      //   // @ts-ignore
      //   product: { productID: this.productID },
      //   configurableOptions,
      //   dateAddedToCart: new Date(Date.now()),
      //   // @ts-ignore
      //   quantity: this.customerInput.quantity,
      // }
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
    margin-bottom: -55vw;
  }
  .top-lg {
    top: -54vw;
    margin-bottom: -54vw;
  }
  .top-md {
    top: -53vw;
    margin-bottom: -53vw;
  }

  .position-initial {
    position: initial;
    float: none;
    width: 100%;
  }
}
</style>

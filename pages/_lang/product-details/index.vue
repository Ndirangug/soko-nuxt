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
import {
  ProductDetailsSummaryQueryVariables,
  AddToCartMutationVariables,
  ConfigurableInput,
} from '~/types/types'
import { IsLoadingMixin } from '~/components/mixins/Loading'
import { EventBus } from '~/utils/event-bus'
import { authStore, cartStore } from '~/store'
import { AddToCart } from '~/apollo/mutations/add_to_cart.graphql'

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
      addingToCart: false,
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

  watch: {
    addingToCart(value: boolean) {
      EventBus.$emit('update:adding-to-cart', value)
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

    async onAddToCart() {
      // @ts-ignore
      this.addingToCart = true
      const configuration: ConfigurableInput[] = []

      // @ts-ignore
      for (const key in this.customerInput.configurables) {
        // @ts-ignore
        configuration.push({
          configurableName: key,
          // @ts-ignore
          customerPreferrence: this.customerInput.configurables[key],
        })
      }

      console.log(configuration)

      const detailsToSend: AddToCartMutationVariables = {
        item: {
          customerId:
            authStore.customer.customerID !== undefined
              ? authStore.customer.customerID
              : 0,
          // @ts-ignore
          productId: parseInt(this.productDetails.productID),
          configuration,
        },
      }

      let result

      try {
        // @ts-ignore
        result = await this.$apollo.mutate({
          mutation: AddToCart,
          variables: detailsToSend,
        })

        if (result.data.addItemToCart !== undefined) {
          cartStore.addToCart(result.data.addItemToCart)
        } else {
          console.log("couldn't add to cart")
        }
      } catch (error) {
        console.log(error)
      }

      // @ts-ignore
      this.addingToCart = false
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

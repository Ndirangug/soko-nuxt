<template>
  <div class="cart-recently-viewed-container">
    <ProductsSuggestionsSliderRow
      :title="$t('productSuggestions.recently_viewed')"
      :description="$t('productSuggestions.recently_viewed_tip')"
      :products="recentlyViewed"
      :loading="$apollo.loading"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { RecentlyViewed } from '~/apollo/queries/recently_viewed.graphql'
import { authStore } from '~/store'
import {
  Product,
  ProductView,
  RecentlyViewedQueryVariables,
} from '~/types/types'

export default Vue.extend({
  // @ts-ignore
  apollo: {
    customer: {
      query: RecentlyViewed,
      prefetch: true,
      variables(): RecentlyViewedQueryVariables {
        return {
          customerId:
            authStore.customer.customerID !== undefined
              ? authStore.customer.customerID
              : 0,
          startDate: new Date(Date.now()),
          endDate: new Date(Date.now()),
          sort: 'NEWEST_FIRST',
        }
      },
    },
  },

  computed: {
    recentlyViewed(): Product[] {
      const products: Product[] = []

      // @ts-ignore
      if (!this.$apollo.loading) {
        // @ts-ignore
        this.customer.viewedProducts.forEach((productView: ProductView) => {
          products.push(productView.product)
        })
      }

      return products
    },
  },
})
</script>

<style lang="scss" scoped>
.cart-recently-viewed-container {
  width: 100%;
}
</style>

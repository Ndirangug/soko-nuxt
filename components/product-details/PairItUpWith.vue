<template>
  <div class="pair-it-up-with-container">
    <ProductsSuggestionsSliderRow
      :title="$t('productSuggestions.recently_viewed')"
      :description="$t('productSuggestions.recently_viewed_tip')"
      :products="productDetails.pairItUpWith"
      :loading="$apollo.loading"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PairItUpWith } from '~/apollo/queries/pair_it_up_with.graphql'
import { authStore } from '~/store'
import { PairItUpWithQueryVariables } from '~/types/types'

export default Vue.extend({
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },

  // @ts-ignore
  apollo: {
    productDetails: {
      query: PairItUpWith,
      prefetch: true,
      variables(): PairItUpWithQueryVariables {
        return {
          customerId:
            authStore.customer.customerID !== undefined
              ? authStore.customer.customerID
              : 0,
          // @ts-ignore
          productId: this.productId,
        }
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.pair-it-up-with-container {
  width: 100%;
}
</style>

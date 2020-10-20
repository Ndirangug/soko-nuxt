<template>
  <div class="sponsored-container">
    <ProductsSuggestionsSliderRow
      :title="$t('productSuggestions.sponsored')"
      :description="$t('productSuggestions.sponsored_tip')"
      :products="sponsored"
      :loading="$apollo.loading"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Sponsored } from '~/apollo/queries/sponsored.graphql'
import { authStore } from '~/store'
import { SponsoredQueryVariables } from '~/types/types'

export default Vue.extend({
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },

  // @ts-ignore
  apollo: {
    sponsored: {
      query: Sponsored,
      prefetch: true,
      variables(): SponsoredQueryVariables {
        return {
          sponsoredContext: {
            customerId:
              authStore.customer.customerID !== undefined
                ? authStore.customer.customerID
                : 0,
            // @ts-ignore
            productId: this.productId,
          },
        }
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.sponsored-container {
  width: 100%;
}
</style>

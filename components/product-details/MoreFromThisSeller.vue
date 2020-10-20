<template>
  <div class="more-from-this-seller-container">
    <ProductsSuggestionsSliderRow
      :title="$t('productSuggestions.more_from_this_seller')"
      :products="productDetails.moreFromSameSeller"
      :loading="$apollo.loading"
    >
      <template v-slot:description>
        <p class="description pb-0 text-body-2 text-md-body-1">
          <span class="text-sentence">
            {{ $t('productSuggestions.love') }}
            <nuxt-link
              :to="localePath(`/seller?id=${sellerId}`)"
              class="seller-link"
            >
              {{ sellerName }}
            </nuxt-link>
            ?
          </span>

          <span class="text-sentence">
            {{ $t('productSuggestions.here_is_more') }}
          </span>
        </p>
      </template>
    </ProductsSuggestionsSliderRow>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MoreFromSameSeller } from '~/apollo/queries/more_from_same_seller.graphql'
import { MoreFromSameSellerQueryVariables } from '~/types/types'

export default Vue.extend({
  props: {
    productId: {
      type: Number,
      required: true,
    },
    sellerName: {
      type: String,
      required: true,
    },
    sellerId: {
      type: Number,
      required: true,
    },
  },

  // @ts-ignore
  apollo: {
    productDetails: {
      query: MoreFromSameSeller,
      prefetch: true,
      variables(): MoreFromSameSellerQueryVariables {
        return {
          // @ts-ignore
          productId: this.productId,
        }
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.more-from-this-seller-container {
  width: 100%;
}

.text-sentence {
  @include sentence-case();
}
</style>

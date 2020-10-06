<template>
  <div class="details-root-container px-md-16 pt-16 pb-16">
    <v-tabs centered grow>
      <v-tab
        class="tab-button"
        :to="localePath('/product-details/description')"
      >
        {{ $t('productDetails.description') }}
      </v-tab>

      <v-tab class="tab-button" :to="localePath('/product-details/reviews')">
        {{ $t('productDetails.reviews') }}
      </v-tab>

      <v-tab
        class="tab-button"
        :to="localePath('/product-details/shipping-and-returns')"
      >
        {{ $t('productDetails.shipping_and_returns') }}
      </v-tab>
    </v-tabs>

    <nuxt-child :product-id="productId" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      activeTab: null,
    }
  },
})
</script>

<style lang="scss" scoped>
.details-root-container {
  width: 100%;
  background-color: $grey-background;

  .tab-button {
    background-color: $grey-background;
  }
}
</style>

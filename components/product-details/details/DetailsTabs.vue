<template>
  <div class="details-root-container px-sm-8 px-md-16 pt-md-16 pb-16">
    <div class="px-lg-16 pt-lg-8">
      <v-tabs centered grow show-arrows center-active>
        <v-tab
          class="tab-button text-overline text-md-button"
          :to="localePath('/product-details/description')"
        >
          {{ $t('productDetails.description') }}
        </v-tab>

        <v-tab
          class="tab-button text-overline text-md-button"
          :to="localePath('/product-details/reviews')"
        >
          {{ $t('productDetails.reviews') }}
        </v-tab>

        <v-tab
          class="tab-button text-overline text-md-button"
          :to="localePath('/product-details/shipping-and-returns')"
        >
          {{ $t('productDetails.shipping_and_returns') }}
        </v-tab>
      </v-tabs>

      <nuxt-child class="px-6" :product-id="productId" />
    </div>
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

<style lang="scss">
.v-slide-group__prev,
.v-slide-group__next {
  background-color: $grey-background;
}
</style>

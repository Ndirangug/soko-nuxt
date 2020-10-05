<template>
  <div>
    <v-tabs v-model="activeTab" grow centered>
      <v-tab :to="localePath('/product-details/description')">
        {{ $t('productDetails.description') }}
      </v-tab>
      <v-tab :to="localePath('/product-details/reviews')">
        {{ $t('productDetails.reviews') }}
      </v-tab>
      <v-tab :to="localePath('/product-details/shipping-and-returns')">
        {{ $t('productDetails.shipping_and_returns') }}
      </v-tab>
    </v-tabs>

    <nuxt-child />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      activeTab: null,
    }
  },
})
</script>

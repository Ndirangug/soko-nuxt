<template>
  <div>
    <v-tabs v-model="activeTab" grow centered>
      <v-tab>{{ $t('product_details.description') }}</v-tab>
      <v-tab>{{ $t('product_details.reviews') }}</v-tab>
      <v-tab>{{ $t('product_details.shipping_and_returns') }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab">
      <v-tab-item> 1</v-tab-item>
      <v-tab-item> 2</v-tab-item>
      <v-tab-item>3 </v-tab-item>
    </v-tabs-items>
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

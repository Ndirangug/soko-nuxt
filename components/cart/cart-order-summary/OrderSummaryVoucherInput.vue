<template>
  <div
    class="order-summary-voucher-input-container d-flex flex-column justify-center align-stretch"
  >
    <p
      class="voucher-query text-caption text-md-subtitle-2 font-weight-regular font-italic mb-1"
    >
      {{ $t('cart.do_you_have_voucher') }}
    </p>

    <v-text-field filled full-width>
      <template v-slot:label>
        <div class="text-capitalize">{{ $t('cart.enter_code') }}</div>
      </template>
    </v-text-field>

    <v-btn tile color="primary" class="align-self-end px-2 px-md-4">
      {{ $t('cart.apply') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.order-summary-voucher-input-container {
  .voucher-query {
    &:first-letter {
      text-transform: uppercase;
    }
  }
}
</style>

<style lang="scss">
.order-summary-voucher-input-container {
  .v-messages {
    min-height: 4px;
  }
}
</style>

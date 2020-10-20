<template>
  <div
    class="cart-root-container d-flex flex-column justify-start align-stretch"
  >
    <div class="top-banner bg-grey">
      <CartBanner />
    </div>

    <div class="cart-section bg-grey px-1 px-sm-8 px-md-6 px-lg-16 pt-12 pb-10">
      <div class="top-nav">
        <CartBackButton :text="$t('cart.back_to_shopping')" />
      </div>

      <div class="the-cart my-4 my-sm-6 my-md-8">
        <TheCart />
      </div>

      <div class="bottom-nav">
        <CartBackButton :text="$t('cart.continue_shopping')" />
      </div>
    </div>

    <div class="recently-viewed pt-8 pt-md-8">
      <CartRecentlyViewed />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'cart',
})
</script>

<style lang="scss" scoped>
.bg-grey {
  background-color: $grey-background;
}
</style>

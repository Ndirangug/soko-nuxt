<template>
  <div>
    <div
      class="subscribe d-flex justify-center align-center flex-column px-2 pt-8 pb-3 pt-md-16 pb-md-10 px-md-16"
    >
      <h2 class="text-capitalize text-h4 text-md-h3">
        {{ $t('subscribe.subscribe') }}
      </h2>
      <p class="text-center mt-4 mb-2 px-1 px-md-4">
        {{ $t('subscribe.subscribe_tip') }}
      </p>
      <Subscribe />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.subscribe {
  width: 100%;
  background-color: $white;
  background: url('/footer/subscribe/background.jpg');
  background-size: cover;
  background-position: center;
}
.footer {
  background-color: $black;
  width: 100%;
}
</style>

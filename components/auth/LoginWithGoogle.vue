<template>
  <div>
    <v-btn
      class="btn"
      elevation="6"
      color="white"
      rounded
      :x-large="this.$vssWidth > 600 ? true : false"
    >
      <v-img
        class="icon"
        contain
        src="/auth/Google__G__Logo.svg"
        max-height="25px"
        max-width="25px"
      />
      {{ $t('auth.google_login') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'

export default Vue.extend({
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
})
</script>

<style lang="scss" scoped>
.btn {
  font-size: 1vw;
  text-transform: capitalize;
  max-width: 280px;

  .icon {
    margin-right: 1vw;
  }
}

// phones <  screen <= tablets
@media only screen and (max-width: $tablet_max_px) and (min-width: $phone_max_px) {
  .btn {
    font-size: 1.8vw;
  }
}

// screen <= phone
@media screen and (max-width: $phone_max_px) {
  .btn {
    font-size: 3.5vw;
    font-weight: 400;
  }
}
</style>

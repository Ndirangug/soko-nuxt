<template>
  <div>
    <v-btn
      class="btn white--text"
      color="#1778F2"
      elevation="6"
      rounded
      :x-large="this.$vssWidth > 600 ? true : false"
    >
      <v-icon size="35" color="white" class="icon">
        {{ icons.facebook }}
      </v-icon>
      {{ $t('auth.facebook_login') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiFacebook } from '@mdi/js'
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'

export default Vue.extend({
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data() {
    return {
      icons: {
        facebook: mdiFacebook,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.btn {
  font-size: 1vw;
  text-transform: capitalize;
  max-width: 280px;

  button {
    min-width: 0;
  }

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

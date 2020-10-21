<template>
  <v-app class="check-layout-root">
    <CheckoutAppBar />

    <div
      class="back-button ml-0 ml-sm-4 ml-md-6 ml-lg-12"
      :class="[`back-button-mt-${$vuetify.breakpoint.name}`]"
    >
      <v-btn :small="$vuetify.breakpoint.smAndDown" text @click="goBack">
        <v-icon class="mr-1">{{ icons.back }} </v-icon>

        <span>{{ $t('checkout.back') }}</span>
      </v-btn>
    </div>

    <h1
      class="text-h6 text-md-h4 text-capitalize font-weight-medium ml-4 ml-sm-6 ml-md-8 ml-lg-16 mt-2 mb-4 mt-md-8 mb-md-8"
    >
      {{ $t('checkout.secure_checkout') }}
    </h1>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiArrowLeft } from '@mdi/js'

export default Vue.extend({
  data() {
    return {
      icons: {
        back: mdiArrowLeft,
      },
    }
  },

  methods: {
    goBack() {
      this.$router.back()
    },
  },
})
</script>

<style lang="scss" scoped>
.check-layout-root {
  background: $grey-background;
}

.back-button-mt-xl {
  margin-top: 5vw;
}

.back-button-mt-lg {
  margin-top: 5vw;
}

.back-button-mt-md {
  margin-top: 7vw;
}

.back-button-mt-sm {
  margin-top: 12vw;
}

.back-button-mt-xs {
  margin-top: 24vw;
}
</style>

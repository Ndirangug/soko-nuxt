<template>
  <v-app class="check-layout-root">
    <CheckoutAppBar />

    <div class="back-button pl-3 pl-sm-6 pl-md-8 pl-lg-16">
      <v-btn text @click="goBack">
        <v-icon>{{ icons.back }} </v-icon>
      </v-btn>

      <span>{{ $t('checkout.back') }}</span>
    </div>

    <h1
      class="text-h6 text-md-h4 font-weight-medium pl-3 pl-sm-6 pl-md-8 pl-lg-16 my-4 my-md-8"
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

.back-button {
  margin-top: 3vw;
}
</style>

<template>
  <v-app-bar
    :dense="$vuetify.breakpoint.mdAndUp"
    absolute
    class="checkout-app-bar-container px-md-8 py-md-0"
    :min-height="$vuetify.breakpoint.smAndDown ? '75' : ''"
  >
    <v-toolbar-title>
      <GreenWhiteLogo
        :classes="['text-h5', 'text-md-h4', 'font-weight-bold']"
      />
    </v-toolbar-title>

    <v-spacer v-if="$vuetify.breakpoint.smAndUp" />

    <nuxt-link
      v-if="$vuetify.breakpoint.smAndUp"
      class="shipping-and-returns-link text-capitalize text-caption text-md-subtitle-1 font-weight-medium text-decoration-none mx-2"
      :to="localePath('/help-center/shipping-and-returns')"
    >
      {{ $t('checkout.shipping_policy') }},
      {{ $t('checkout.fees') }}
      {{ $t('checkout.and') }}
      {{ $t('checkout.returns') }}
    </nuxt-link>

    <v-spacer />

    <div
      class="help d-flex flex-column flex-md-row align-end justify-center justify-md-space-around align-md-center"
    >
      <div class="d-flex justify-space-around align-centers">
        <v-icon class="mx-2" color="black"> {{ icons.support }}</v-icon>

        <p
          class="font-weight-medium mb-0 text-caption text-md-subtitle-1 text-sentence"
        >
          {{ $t('checkout.need_help') }}
        </p>
      </div>

      <p
        class="font-weight-medium mb-0 text-caption text-md-subtitle-1 d-flex flex-column flex-md-row align-end justify-center justify-md-start align-md-center"
      >
        <span class="text-sentence">
          <span> {{ $t('checkout.call') }} </span>
          <a href="`tel:${phoneNumber}`" class="text-decoration-none">
            {{ phoneNumber }}
          </a>
        </span>

        <span class="text-sentence">
          <span> {{ $t('checkout.or') }} </span>
          <nuxt-link
            class="text-decoration-none"
            :to="localePath('/help-center/contact')"
          >
            {{ $t('checkout.use_the_online_chat') }}
          </nuxt-link>
        </span>
      </p>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { mdiFaceAgent } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      icons: {
        support: mdiFaceAgent,
      },
      phoneNumber: this.$t('help.phone_number'),
    }
  },
})
</script>

<style lang="scss" scoped>
.checkout-app-bar-container {
  background: $grey-background;

  .help {
    .text-sentence {
      @include sentence-case();
    }
  }
}
</style>

<style lang="scss">
.v-toolbar__content {
  height: 100% !important;
}
</style>

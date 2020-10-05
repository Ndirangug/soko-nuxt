<template>
  <div>
    <div
      v-if="!$vuetify.breakpoint.md"
      class="shipping mt-6 pa-4 pa-md-3 pa-lg-3 shipping-smAndDown"
      :class="{ 'shipping-smAndDown': $vuetify.breakpoint.smAndDown }"
    >
      <h6
        class="text-sentence"
        :class="{
          'text-subtitle-2': $vuetify.breakpoint.smAndDown,
          'text-body-1 ': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <span class="text-sentence">
          {{ $t('productDetails.shipping_from') }}
        </span>
        <span class="font-italic grey--text text--darken-2">
          {{ dispatchLocation }}
        </span>
        <span id="delivery-icon" class="ml-2">
          <v-icon :small="$vuetify.breakpoint.smAndDown" dark>
            {{ icons.delivery }}
          </v-icon>
        </span>
      </h6>

      <p class="text-body-2 text-sentence mt-3">
        {{ $t('productDetails.for') }}
        <nuxt-link to="#" class="text-decoration-none">
          {{ $t('productDetails.shipping_details') }}
        </nuxt-link>
        {{ $t('productDetails.and_expected_delivery_times_see') }}
        <nuxt-link to="#" class="text-decoration-none">
          {{ $t('productDetails.shipping_and_returns_policy') }}
        </nuxt-link>
      </p>
      <p></p>
    </div>
    <div
      v-else
      class="shipping-md align-self-end mt-n8 d-flex justify-end align-center"
    >
      <h6 class="text-body-1 mr-2">
        <v-hover v-slot:default="{ hover }">
          <v-fade-transition>
            <nuxt-link
              to="#"
              class="text-capitalize grey--text text--darken-2 font-italic"
              :class="{ 'text-decoration-none': !hover }"
            >
              {{ $t('productDetails.shipping_details') }}
            </nuxt-link>
          </v-fade-transition>
        </v-hover>
      </h6>
      <span id="delivery-icon">
        <v-icon dark>
          {{ icons.delivery }}
        </v-icon>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiTruckDeliveryOutline } from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  props: {
    dispatchLocation: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        delivery: mdiTruckDeliveryOutline,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.shipping-smAndDown {
  background: $light-background-darker;
  border-radius: 1vw;

  h6 {
    font-size: 1vw;
  }
}

#delivery-icon {
  background-color: $black;
  border-radius: 10vw;
  padding: 0.5vw;
}

.text-sentence {
  @include sentence-case();
}
</style>

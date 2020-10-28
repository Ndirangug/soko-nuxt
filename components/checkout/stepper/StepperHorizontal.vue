<template>
  <div class="checkout-stepper-container">
    <v-stepper v-model="model" alt-labels>
      <v-stepper-header>
        <v-stepper-step
          :complete-icon="icons.complete"
          class="address-header"
          :class="{ 'ml-n8': $vuetify.breakpoint.xs }"
          :complete="model > 1"
          step="1"
        >
          <CheckoutStepHeader
            label-only
            :label="$t('checkout.delivery_adddress')"
          />
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete-icon="icons.complete"
          class="delivery-method-header"
          :complete="model > 2"
          step="2"
        >
          <CheckoutStepHeader
            label-only
            :label="$t('checkout.delivery_method')"
          />
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete-icon="icons.complete"
          class="payment-method-header"
          :class="{ 'mr-n8': $vuetify.breakpoint.xs }"
          :complete="done"
          step="3"
        >
          <CheckoutStepHeader
            label-only
            :label="$t('checkout.payment_method')"
          />
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content class="address-content" step="1">
          <ChooseAddressStep />

          <StepNavigation hide-back @continue-clicked="onContinueClicked" />
        </v-stepper-content>

        <v-stepper-content class="delivery-method-content" step="2">
          <ChooseDeliveryMethodStep />

          <StepNavigation
            @continue-clicked="onContinueClicked"
            @back-clicked="onBackClicked"
          />
        </v-stepper-content>

        <v-stepper-content class="payment-method-content" step="3">
          <ChoosePaymentMethodStep />

          <StepNavigation hide-continue @back-clicked="onBackClicked" />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import { mdiCash, mdiCheck, mdiMapMarker, mdiPackage } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      model: 1,
      done: false,
      icons: {
        complete: mdiCheck,
        address: mdiMapMarker,
        delivery: mdiPackage,
        payment: mdiCash,
      },
    }
  },

  methods: {
    onContinueClicked() {
      this.model++
    },

    onBackClicked() {
      this.model--
    },
  },
})
</script>

<style lang="scss" scoped>
.checkout-stepper-container {
  width: 100%;
}
</style>

<style lang="scss">
@media only screen and (max-width: 959px) {
  .v-stepper:not(.v-stepper--vertical) .v-stepper__label {
    display: unset !important;
    max-width: 20px;
  }
}
</style>

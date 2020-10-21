<template>
  <div class="checkout-stepper-container">
    <v-stepper v-model="model" vertical>
      <v-stepper-step
        :complete-icon="icons.complete"
        class="address-header"
        :complete="model > 1"
        step="1"
      >
        <CheckoutStepHeader
          :step="1"
          :label="$t('checkout.delivery_adddress')"
          @change-clicked="onChangeClicked($event)"
        />
      </v-stepper-step>

      <v-stepper-content class="address-content" step="1">
        <ChooseAddressStep />

        <StepNavigation hide-back @continue-clicked="onContinueClicked" />
      </v-stepper-content>

      <v-stepper-step
        :complete-icon="icons.complete"
        class="delivery-method-header"
        :complete="model > 2"
        step="2"
      >
        <CheckoutStepHeader
          :step="2"
          :label="$t('checkout.delivery_method')"
          @change-clicked="onChangeClicked($event)"
        />
      </v-stepper-step>

      <v-stepper-content class="delivery-method-content" step="2">
        <ChooseDeliveryMethodStep />

        <StepNavigation
          @continue-clicked="onContinueClicked"
          @back-clicked="onBackClicked"
        />
      </v-stepper-content>

      <v-stepper-step
        :complete-icon="icons.complete"
        class="payment-method-header"
        :complete="done"
        step="3"
      >
        <CheckoutStepHeader
          :step="3"
          :label="$t('checkout.payment_method')"
          @change-clicked="onChangeClicked($event)"
        />
      </v-stepper-step>

      <v-stepper-content class="payment-method-content" step="3">
        <ChoosePaymentMethodStep />

        <StepNavigation hide-continue @back-clicked="onBackClicked" />
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import { mdiCheck } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      model: 1,
      done: false,
      icons: {
        complete: mdiCheck,
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

    onChangeClicked(step: number) {
      this.model = step
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
.v-stepper__label {
  width: 100%;
}
</style>

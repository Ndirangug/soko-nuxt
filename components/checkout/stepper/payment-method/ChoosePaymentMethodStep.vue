<template>
  <div class="choose-payment-method-step-container">
    <RadioGroupOptions
      :radio-options="radioOptions"
      :selected-option.sync="selectedOption"
    >
      <template #content0>
        <div class="pay-online-description">
          <PaymentMethodDetails
            :disabled="!payOnilneChosen"
            payment-option="PAY_ONLINE"
            :payment-methods="payOnineMethods"
          />
        </div>
      </template>

      <template #content1>
        <div class="pay-on-delivery-description">
          <PaymentMethodDetails
            :disabled="!payOnDeilveryChosen"
            payment-option="PAY_ON_DELIVERY"
            :payment-methods="payOnDeliveryMethods"
          />
        </div>
      </template>
    </RadioGroupOptions>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PaymentOptions } from '~/types/enums'
import { PaymentMethodBadge, RadioOption } from '~/types/ui'

export default Vue.extend({
  data() {
    return {
      selectedOption: '',
    }
  },
  computed: {
    radioOptions(): RadioOption[] {
      return [
        {
          label: this.$t('checkout.pay_online').toString(),
          value: PaymentOptions.PAY_ONLINE,
        },
        {
          label: this.$t('checkout.pay_on_delivery').toString(),
          value: PaymentOptions.PAY_ON_DELIVERY,
        },
      ]
    },

    payOnilneChosen(): boolean {
      return this.selectedOption === PaymentOptions.PAY_ONLINE
    },

    payOnDeilveryChosen(): boolean {
      return this.selectedOption === PaymentOptions.PAY_ON_DELIVERY
    },

    payOnineMethods(): PaymentMethodBadge[] {
      return [
        { src: '/payment-icons/lipa_na_mpesa.png', alt: 'lipa na mpesa' },
        { src: '/payment-icons/mc_vrt_rev.svg', alt: 'mastercard' },
        { src: '/payment-icons/visa.svg', alt: 'visa' },
      ]
    },
    payOnDeliveryMethods(): PaymentMethodBadge[] {
      return [
        { src: '/payment-icons/lipa_na_mpesa.png', alt: 'lipa na mpesa' },
        { src: '/payment-icons/mc_vrt_rev.svg', alt: 'mastercard' },
        { src: '/payment-icons/visa.svg', alt: 'visa' },
        { src: '/payment-icons/Money_Flat_Icon.svg', alt: 'cash' },
      ]
    },
  },
})
</script>

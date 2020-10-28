<template>
  <div class="payment-method-details-container">
    <p
      class="text-sentence description text-subtitle-2 text-md-subtitle-1 font-weight-regular black--text"
      :class="{ 'text--disabled': disabled }"
    >
      {{ description }}
    </p>

    <div
      v-if="paymentOption == 'PAY_ONLINE'"
      class="preferred-method-notice d-flex flex-wrap"
    >
      <p
        class="text-sentence mb-0 text-subtitle-2 font-italic"
        :class="{ 'text--disabled': disabled }"
      >
        {{ $t('checkout.preferred_method') }}
      </p>

      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-btn
            small
            class="mt-n1 ml-1"
            color="success"
            icon
            v-bind="attrs"
            :disabled="disabled"
            v-on="on"
          >
            <v-icon>{{ icons.question }}</v-icon>
          </v-btn>
        </template>

        <span class="text-sentence">
          {{ $t('checkout.preferred_method_tip') }}
        </span>
      </v-tooltip>
    </div>

    <div
      v-if="paymentOption == 'PAY_ON_DELIVERY'"
      class="prepayment-alert d-flex flex-wrap"
    >
      <p
        class="text-sentence mb-0 text-subtitle-2 warning--text font-italic"
        :class="{ 'text--disabled': disabled }"
      >
        {{ $t('checkout.prepayment_tip') }}
      </p>

      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-btn
            small
            class="mt-n1 ml-1"
            color="warning"
            icon
            v-bind="attrs"
            :disabled="disabled"
            v-on="on"
          >
            <v-icon>{{ icons.question }}</v-icon>
          </v-btn>
        </template>

        <span class="text-sentence">
          {{ $t('checkout.prepayment_reason') }}
        </span>
      </v-tooltip>
    </div>

    <v-container class="payment-methods-showcase">
      <p
        class="text-sentence available-options text-subtitle-2 text-md-subtitle-1 font-weight-medium black--text mt-2 mb-1"
        :class="{ 'text--disabled': disabled }"
      >
        {{ $t('checkout.available_payment_options') }}:
      </p>

      <v-row>
        <v-col
          v-for="(paymentMethod, i) in paymentMethods"
          :key="i"
          cols="6"
          sm="4"
          md="3"
          lg="2"
        >
          <v-img
            :src="paymentMethod.src"
            :alt="paymentMethod.alt"
            class="payment-method-icon mx-2 mx-md-2 my-2 my-sm-0"
            :class="{ 'img-disabled': disabled }"
            max-height="50"
            min-height="30"
            max-width="120"
            min-width="50"
            contain
          />
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      color="primary"
      class="payment-option-action px-4 mx-auto"
      tile
      :disabled="disabled"
      >{{ action }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { mdiHelpCircleOutline } from '@mdi/js'
import Vue, { PropType } from 'vue'
import { PaymentOptions } from '~/types/enums'
import { PaymentMethodBadge } from '~/types/ui'

export default Vue.extend({
  props: {
    disabled: {
      type: Boolean,
      required: true,
    },
    paymentMethods: {
      type: Array as PropType<Array<PaymentMethodBadge>>,
      required: true,
    },
    paymentOption: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        question: mdiHelpCircleOutline,
      },
    }
  },

  computed: {
    description(): string {
      return this.paymentOption === PaymentOptions.PAY_ONLINE
        ? this.$t('checkout.pay_online_tip').toString()
        : this.$t('checkout.pay_on_delivery_tip').toString()
    },
    action(): string {
      return this.paymentOption === PaymentOptions.PAY_ONLINE
        ? this.$t('checkout.pay_now').toString()
        : this.$t('checkout.place_order').toString()
    },
  },
})
</script>

<style lang="scss" scoped>
.payment-method-details-container {
  .text-sentence {
    @include sentence-case();
  }

  .img-disabled {
    opacity: 0.5;
  }
}
</style>

<template>
  <div class="choose-delivery-method-step-container">
    <RadioGroupOptions
      :radio-options="radioOptions"
      :selected-option.sync="selectedOption"
    >
      <template #content0>
        <div class="doorstep-delivery-description">
          <ShippingOptionDetails
            v-if="homeShippingOption !== undefined"
            :shipping-option="homeShippingOption"
            :disabled="!doorstepDeilveryChosen"
          />
          <v-skeleton-loader v-else type="image" />
        </div>
      </template>

      <template #content1>
        <div class="pickup-station-delivery-description">
          <SelectPickUpStation
            :shipping-options="pickupShippingOptions"
            :selected-pickup-station.sync="selectedPickupStation"
            :disabled="!pickupStationDeilveryChosen"
          />
          <ShippingOptionDetails
            v-if="selectedPickupStation != {} && pickupStationDeilveryChosen"
            :shipping-option="selectedPickupStation"
            :disabled="!pickupStationDeilveryChosen"
          />
        </div>
      </template>
    </RadioGroupOptions>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ShippingOptions } from '~/apollo/queries/shipping_options.graphql'
import {
  DeliveryType,
  ShippingOption,
  ShippingOptionsQueryVariables,
} from '~/types/types'
import { DeliveryTypes } from '~/types/enums'
import { authStore } from '~/store'
import { RadioOption } from '~/types/ui'
import { EventBus } from '~/utils/event-bus'

type ChooseDeliverMethodData = {
  [keys: string]: any
  selectedPickupStation: ShippingOption | {}
  selectedOption: DeliveryType | ''
}

export default Vue.extend({
  // @ts-ignore
  apollo: {
    customer: {
      query: ShippingOptions,
      prefetch: true,
      variables(): ShippingOptionsQueryVariables {
        return {
          customerId:
            authStore.customer.customerID !== undefined
              ? authStore.customer.customerID
              : 0,
          addressId: 4,
        }
      },
    },
  },

  data(): ChooseDeliverMethodData {
    return {
      selectedOption: '',
      addressId: 4,
      selectedPickupStation: {},
    }
  },

  computed: {
    doorstepDeilveryChosen(): boolean {
      // @ts-ignore
      return this.selectedOption === DeliveryTypes.DOORSTEP
    },

    pickupStationDeilveryChosen(): boolean {
      // @ts-ignore
      return this.selectedOption === DeliveryTypes.PICKUP_STATION
    },

    homeShippingOption(): ShippingOption | undefined {
      let shippingOption

      // @ts-ignore
      if (!this.$apollo.loading && this.customer.addresses[0] !== undefined) {
        // by default, first entry in the returned shippingOptions array is the doorstep delivery option
        // @ts-ignore
        shippingOption = this.customer.addresses[0].shippingOptions[0]
      }

      return shippingOption
    },

    pickupShippingOptions(): ShippingOption[] {
      let options = []

      // @ts-ignore
      if (!this.$apollo.loading && this.customer.addresses[0] !== undefined) {
        // @ts-ignore
        options = this.customer.addresses[0].shippingOptions.slice(1)
      }

      return options
    },

    radioOptions(): RadioOption[] {
      return [
        {
          label: this.$t('checkout.deliver_to_home_or_office').toString(),
          value: DeliveryTypes.DOORSTEP,
        },
        {
          label: this.$t('checkout.pickup_station').toString(),
          value: DeliveryTypes.PICKUP_STATION,
        },
      ]
    },
  },

  watch: {
    addressId(value: number) {
      console.log(value)
    },

    selectedOption(value: string) {
      let fee: number | null

      switch (value) {
        case DeliveryTypes.DOORSTEP:
          fee =
            // @ts-ignore
            this.homeShippingOption !== undefined
              ? // @ts-ignore
                this.homeShippingOption.cost
              : null
          EventBus.$emit('update:shipping-fee', fee)

          break

        case DeliveryTypes.PICKUP_STATION:
          fee =
            // @ts-ignore
            this.selectedPickupStation !== {}
              ? // @ts-ignore
                this.selectedPickupStation.cost
              : null
          EventBus.$emit('update:shipping-fee', fee)

          break

        default:
          fee = null
          EventBus.$emit('update:shipping-fee', fee)
          break
      }
    },

    selectedPickupStation(value: ShippingOption | {}) {
      if (
        value !== {} &&
        // @ts-ignore
        this.selectedOption === DeliveryTypes.PICKUP_STATION
      ) {
        // @ts-ignore
        EventBus.$emit('update:shipping-fee', value.cost)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.choose-delivery-method-step-container {
  .shipping-option-title {
    @include sentence-case();
  }
}
</style>

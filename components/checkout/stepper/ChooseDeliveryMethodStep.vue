<template>
  <div class="choose-delivery-method-step-container">
    <v-radio-group v-model="model" mandatory column>
      <div class="doorstep-option">
        <v-radio color="primary" value="DOORSTEP">
          <template v-slot:label>
            <div
              class="shipping-option-title text-subtitle-2 text-md-subtitle-1 font-weight-medium"
            >
              {{ $t('checkout.deliver_to_home_or_office') }}
            </div>
          </template>
        </v-radio>

        <ShippingOptionDetails
          v-if="homeShippingOption !== undefined"
          :shipping-option="homeShippingOption"
        />
        <v-skeleton-loader v-else type="image" />
      </div>

      <div class="pickup-option">
        <v-radio color="primary" value="PICKUP_STATION">
          <template v-slot:label>
            <div
              class="shipping-option-title text-subtitle-2 text-md-subtitle-1 font-weight-medium"
            >
              {{ $t('checkout.pickup_station') }}
            </div>
          </template>
        </v-radio>

        <SelectPickUpStation
          :shipping-options="pickupShippingOptions"
          :selected-pickup-station.sync="selectedPickupStation"
        />
        <ShippingOptionDetails
          v-if="selectedPickupStation != {}"
          :shipping-option="selectedPickupStation"
        />
      </div>
    </v-radio-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ShippingOptions } from '~/apollo/queries/shipping_options.graphql'
import { ShippingOption, ShippingOptionsQueryVariables } from '~/types/types'
import { DeliveryTypes } from '~/types/enums'
import { authStore } from '~/store'

// enum DeliveryTypes {
//   DOORSTEP = 'DOORSTEP',
//   PICKUP_STATION = 'PICKUP_STATION',
// }

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

  data(): { [keys: string]: any; selectedPickupStation: ShippingOption | {} } {
    return {
      model: '',
      addressId: 4,
      selectedPickupStation: {},
    }
  },

  computed: {
    doorstepDeilveryChosen(): boolean {
      // @ts-ignore
      return this.model === DeliveryTypes.DOORSTEP
    },

    pickupStationDeilveryChosen(): boolean {
      // @ts-ignore
      return this.model === DeliveryTypes.PICKUP_STATION
    },

    homeShippingOption(): ShippingOption | undefined {
      let shippingOption

      // @ts-ignore
      if (!this.$apollo.loading) {
        // by default, first entry in the returned shippingOptions array is the doorstep delivery option
        // @ts-ignore
        shippingOption = this.customer.addresses[0].shippingOptions[0]
      }

      return shippingOption
    },

    pickupShippingOptions(): ShippingOption[] {
      let options = []

      // @ts-ignore
      if (!this.$apollo.loading) {
        // @ts-ignore
        options = this.customer.addresses[0].shippingOptions.slice(1)
      }

      return options
    },
  },

  watch: {
    addressId(value: number) {
      console.log(value)
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

<template>
  <div class="shipping-option-details-container">
    <p
      class="estimated-delivery-dates grey--text text--darken-3 text-subtitle-2 font-italic"
    >
      {{ $t('checkout.delivered_between') }}
      <span class="text-capitalize">
        {{
          new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'medium',
          }).format($dayjs(shippingOption.estimatedDeliveryDateMin).toDate())
        }}
      </span>
      {{ $t('checkout.and') }}
      <span class="text-capitalize">
        {{
          new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'medium',
          }).format($dayjs(shippingOption.estimatedDeliveryDateMax).toDate())
        }}
      </span>
    </p>

    <div v-if="isPickupOption" class="pickup-station-information">
      <p class="name mb-0">{{ shippingOption.pickupStation.name }}</p>
      <p class="phone mb-0">{{ shippingOption.pickupStation.phone }}</p>
      <p class="area mb-0">{{ shippingOption.pickupStation.area }}</p>
      <p class="location mb-0">
        {{ shippingOption.pickupStation.town }},
        {{ shippingOption.pickupStation.county }}
      </p>
    </div>

    <p
      class="description text-subtitle-2 text-md-subtitle-1 font-weight-regular"
    >
      <span v-if="isDoorStepOption" class="doorstep-description">
        {{ $t('checkout.doorstep_tip') }}
      </span>

      <span v-else class="pickup-description">
        {{ $t('checkout.pickup_tip') }}
      </span>
    </p>

    <p
      class="cost text-subtitle-2 text-md-subtitle-1 font-weight-regular primary--text"
    >
      {{ $t('currency') }} {{ shippingOption.cost }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ShippingOption } from '~/types/types'
import { DeliveryTypes } from '~/types/enums'

export default Vue.extend({
  props: {
    shippingOption: {
      type: Object,
      required: true,
    } as PropOptions<ShippingOption>,
  },

  computed: {
    isDoorStepOption(): boolean {
      return this.shippingOption.deliveryType === DeliveryTypes.DOORSTEP
    },
    isPickupOption(): boolean {
      return this.shippingOption.deliveryType === DeliveryTypes.PICKUP_STATION
    },
  },
})
</script>

<style lang="scss" scoped>
.shipping-option-details-container {
  .estimated-delivery-dates {
    @include sentence-case();
  }
}
</style>

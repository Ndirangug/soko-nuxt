<template>
  <div class="shipping-option-details-container">
    <p
      class="estimated-delivery-dates grey--text text--darken-3 text-subtitle-2 font-italic"
      :class="{ 'text--disabled': disabled }"
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

    <div
      v-if="isPickupOption"
      class="pickup-station-information text-subtitle-2 text-subtitle-md-2 font-weight-regular pa-4 pa-md-3 mb-2 mb-md-3"
      :class="{ 'text--disabled': disabled }"
    >
      <p class="name mb-1">{{ shippingOption.pickupStation.name }}</p>
      <p class="phone mb-1">{{ shippingOption.pickupStation.phone }}</p>
      <p class="area mb-1">{{ shippingOption.pickupStation.area }}</p>
      <p class="location mb-1">
        {{ shippingOption.pickupStation.town }},
        {{ shippingOption.pickupStation.county }}
      </p>
    </div>

    <p
      class="description text-subtitle-2 text-md-subtitle-1 font-weight-regular"
      :class="{ 'text--disabled': disabled }"
    >
      <span v-if="isDoorStepOption" class="doorstep-description">
        {{ $t('checkout.doorstep_tip') }}
      </span>

      <span v-else class="pickup-description">
        {{ $t('checkout.pickup_tip') }}
      </span>
    </p>

    <p
      class="cost text-subtitle-2 text-md-subtitle-1 font-weight-bold primary--text"
      :class="{ 'text--disabled': disabled }"
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
    disabled: {
      type: Boolean,
      required: true,
    },
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

  .pickup-station-information {
    background-color: $light-background-darker;
    border-radius: 1vw;
  }
}
</style>

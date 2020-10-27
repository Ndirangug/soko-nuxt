<template>
  <div class="select-pick-up-stations-container">
    <v-autocomplete
      v-model="model"
      :items="shippingOptions"
      item-text="pickupStation.name"
      item-value="pickupStation.name"
      filled
      class="input"
      dense
      label="aything"
      :disabled="disabled"
    >
      <template #label>
        <div class="text-capitalize">{{ $t('forms.pickup_station') }}</div>
      </template>

      <template #no-data>
        <div
          class="text-capitalize text-subtitle-2 text-md-subtitle-1 font-weight-regular pl-2"
        >
          {{ $t('forms.no_pickup_station') }}
        </div>
      </template>
    </v-autocomplete>
  </div>
</template>

<script lang="ts">
import Vue, { PropType, PropOptions } from 'vue'
import { ShippingOption } from '~/types/types'

export default Vue.extend({
  props: {
    shippingOptions: {
      type: Array as PropType<Array<ShippingOption>>,
      required: true,
    },
    selectedPickupStation: {
      type: Object,
      required: true,
    } as PropOptions<ShippingOption | {}>,
    disabled: {
      type: Boolean,
      required: true,
    },
  },

  data(): { [keys: string]: any; model: ShippingOption | {} } {
    return {
      model: {},
    }
  },

  watch: {
    model(value: string) {
      const shippingOption = this.shippingOptions.find(
        (shippingOption: ShippingOption) => {
          return shippingOption.pickupStation.name === value
        }
      )
      console.log(shippingOption)
      this.$emit('update:selected-pickup-station', shippingOption)
    },
  },
})
</script>

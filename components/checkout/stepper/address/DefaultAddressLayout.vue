<template>
  <div class="default-address-layout-container pa-8 pa-md-10">
    <div class="addresss">
      <p
        class="name mb-1 text-subtitle-2 text-md-subtitle-1 font-weight-medium"
      >
        {{ address.firstName }} {{ address.lastName }}
      </p>
      <p
        class="phone mb-1 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
      >
        {{ address.phone }}
      </p>
      <p
        class="area mb-1 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
      >
        {{ address.area }}
      </p>
      <p
        class="county-town mb-1 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
      >
        {{ address.town }}, {{ address.county }}
      </p>
    </div>

    <div class="additional-information mt-6">
      <h6
        class="text-sentence text-subtitle-2 text-md-subtitle-1 font-weight-regular font-italic text-decoration-underline"
        mb-2
      >
        {{ $t('checkout.additional_delivery_information') }}
      </h6>
      <p
        class="county-town mb-0 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
      >
        {{ address.additionalInformation }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { CustomerAddress } from '~/types/types'

export default Vue.extend({
  props: {
    address: {
      type: Object,
      required: true,
    } as PropOptions<CustomerAddress>,
  },
})
</script>

<style lang="scss" scoped>
.default-address-layout-container {
  background-color: $light-background-darker;
}

.text-sentence {
  @include sentence-case();
}
</style>

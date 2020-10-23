<template>
  <div class="no-address-layout-container pa-6 pa-md-8">
    <p
      class="text-sentence text-subtitle-2 text-md-body-2 font-weight-regular mb-0 pt-2 pt-md-2"
    >
      <span class="mr-1">{{ $t('checkout.no_address') }}</span>
      <v-icon dense color="black">{{ icons.sad }}</v-icon>
    </p>

    <div class="add-new-address mt-4">
      <AddNewAddressModal>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="btn-activator"
            color="primary"
            text
            v-bind="attrs"
            v-on="on"
          >
            {{ $t('checkout.add_new') }}
          </v-btn>
        </template>
      </AddNewAddressModal>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiEmoticonSadOutline } from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      icons: {
        sad: mdiEmoticonSadOutline,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.no-address-layout-container {
  background-color: $light-background-darker;

  .text-sentence {
    @include sentence-case();
  }

  .btn-activator {
    position: relative;
    left: -50%;
    transform: translate(50%, 0);
  }
}
</style>

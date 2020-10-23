<template>
  <div class="choose-address-step-container">
    <v-skeleton-loader v-if="noAddress == undefined" type="image" />
    <NoAddressLayout v-else-if="noAddress" />
    <DefaultAddressLayout v-else :address="customer.addresses[0]" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CustomerAddresses } from '~/apollo/queries/customer_addresses.graphql'
import { authStore } from '~/store'
import { CustomerAddressesQueryVariables } from '~/types/types'

export default Vue.extend({
  // @ts-ignore
  apollo: {
    customer: {
      query: CustomerAddresses,
      prefetch: true,
      variables(): CustomerAddressesQueryVariables {
        return {
          customerId:
            authStore.customer.customerID !== undefined
              ? authStore.customer.customerID
              : 0,
          defaultOnly: true,
        }
      },
    },
  },
  computed: {
    noAddress(): boolean | undefined {
      let noAddresses

      // @ts-ignore
      if (!this.$apollo.loading) {
        // @ts-ignore
        noAddresses = !this.customer.addresses.length > 0
      }

      return noAddresses
    },
  },
})
</script>

<style lang="scss" scoped></style>

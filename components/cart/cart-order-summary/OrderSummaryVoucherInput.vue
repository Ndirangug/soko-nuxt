<template>
  <div
    class="order-summary-voucher-input-container d-flex flex-column justify-center align-stretch"
  >
    <p
      class="voucher-query tex t-subtitle-2 font-weight-regular font-italic mb-1"
    >
      {{ $t('cart.do_you_have_voucher') }}
    </p>

    <v-text-field
      v-model="voucherCode"
      filled
      full-width
      :disabled="voucherApplied"
    >
      <template v-slot:label>
        <div class="text-capitalize">{{ $t('cart.enter_code') }}</div>
      </template>
    </v-text-field>

    <v-btn
      tile
      color="primary"
      class="align-self-end px-6"
      :loading="loading"
      @click="voucherApplied ? removeVoucher() : applyVoucher()"
    >
      <span v-if="!voucherApplied"> {{ $t('cart.apply') }}</span>
      <span v-else>{{ $t('cart.remove_voucher') }}</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue, { PropType, PropOptions } from 'vue'
import { CheckVoucher } from '~/apollo/queries/check_voucher.graphql'
import { CheckVoucherQueryVariables, Voucher } from '~/types/types'

export default Vue.extend({
  props: {
    produdctIds: {
      type: Array as PropType<Array<Number>>,
      required: false,
      default() {
        return []
      },
    },
    voucher: {
      type: Object,
      required: true,
    } as PropOptions<Voucher | null>,
  },
  data() {
    return {
      voucherCode: '',
      loading: false,
      voucherApplied: false,
    }
  },

  methods: {
    async applyVoucher() {
      this.loading = true
      let voucher: Voucher | null = null
      const queryVariables: CheckVoucherQueryVariables = {
        voucherCode: this.voucherCode,
      }

      try {
        // @ts-ignore
        const result = await this.$apollo.query({
          query: CheckVoucher,
          variables: queryVariables,
        })

        voucher = result.data.checkVoucher
        // TODO check if returned valid voucher
        this.updateVoucher(voucher)
      } catch (error) {
        console.log(error)
        console.log(error.message)
      } finally {
        this.loading = false
      }
    },

    removeVoucher() {
      this.updateVoucher(null)
      this.voucherCode = ''
    },

    updateVoucher(value: Voucher | null) {
      this.$emit('update:voucher', value)
      this.voucherApplied = value != null
    },
  },
})
</script>

<style lang="scss" scoped>
.order-summary-voucher-input-container {
  .voucher-query {
    &:first-letter {
      text-transform: uppercase;
    }
  }
}
</style>

<style lang="scss">
.order-summary-voucher-input-container {
  .v-messages {
    min-height: 4px;
  }
}
</style>

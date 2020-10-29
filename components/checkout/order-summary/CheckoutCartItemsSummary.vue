<template>
  <v-virtual-scroll :items="cartItems" item-height="80" max-height="350">
    <template v-slot:default="{ item }">
      <v-list-item>
        <v-list-item-avatar tile>
          <v-img :src="item.product.thumbnails[0]" max-height="80" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            class="mb-0 text-subtitle-2 text-md-subtitle-1 font-weight-regular"
          >
            {{ item.product.title }}
          </v-list-item-title>

          <v-list-item-subtitle
            class="price-quantity d-flex align-center justify-space-between"
          >
            <p
              class="price text-capitalize mb-0 text-subtitle-2 font-weight-bold"
            >
              {{ $t('currency') }}
              {{
                new Intl.NumberFormat('en-US').format(
                  item.product.price * item.quantity
                )
              }}
            </p>

            <p
              class="quantity text-capitalize mb-0 text-subtitle-2 font-weight-regular"
            >
              {{ $t('checkout.qty') }}
              <span class="text-lowercase">:</span>
              {{ item.quantity }}
            </p>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-virtual-scroll>
</template>

<script lang="ts">
import Vue from 'vue'
import { cartStore } from '~/store'
import { CartItem } from '~/types/types'

export default Vue.extend({
  computed: {
    cartItems(): CartItem[] {
      return cartStore.cartItems
    },
  },
})
</script>

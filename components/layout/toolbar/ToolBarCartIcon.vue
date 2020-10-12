<template>
  <div class="toolbar-button d-flex justify-center align-center mx-0">
    <v-badge
      color="primary"
      offset-y="20"
      :offset-x="$vuetify.breakpoint.mdAndUp ? 15 : 20"
      :content="cartItemsCount"
      overlap
      :value="cartItemsCount > 0"
    >
      <v-btn
        :dark="dark"
        icon
        :x-large="$vuetify.breakpoint.mdAndUp"
        :class="{ 'white--text': dark, 'black--text': !dark }"
        @click="onToolBarCartIconClick"
      >
        <v-icon :dark="dark" large>
          {{ icons.cart }}
        </v-icon>
      </v-btn>
    </v-badge>
    <h4
      v-show="$vuetify.breakpoint.smAndUp"
      class="text-capitalize"
      :class="{ 'white--text': dark, 'black--text': !dark }"
    >
      {{ $t('products.cart') }}
    </h4>
  </div>
</template>

<script lang="ts">
import { mdiCart } from '@mdi/js'
import Vue from 'vue'
import { cartStore } from '~/store'

export default Vue.extend({
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        cart: mdiCart,
      },
    }
  },

  computed: {
    cartItemsCount(): number {
      return cartStore.cartItemsCount
    },
  },

  methods: {
    onToolBarCartIconClick() {
      console.log('go to cart')
      // @ts-ignore
      if (this.$vuetify.breakpoint.mdAndUp) {
        console.log('prefer modal')
      } else {
        console.log('prefer route change')
        this.$router.push(this.localePath('/cart'))
      }
    },
  },
})
</script>

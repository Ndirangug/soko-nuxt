<template>
  <div class="toolbar-button d-flex justify-center align-center mx-2">
    <v-btn
      :dark="dark"
      icon
      x-large
      :class="{ 'white--text': dark, 'black--text': !dark }"
    >
      <v-icon :dark="dark" large>{{ icons.cart }}</v-icon>
    </v-btn>
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
})
</script>

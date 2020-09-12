<template>
  <div>
    <v-card class="mx-4" tile>
      <client-only>
        <v-img :src="product.thumbnails[0]" />
      </client-only>
      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-subtitle>{{ product.price }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Product } from '~/types/types'

export default Vue.extend({
  props: {
    product: {
      type: Object,
      required: true,
    } as PropOptions<Product>,
  },
})
</script>

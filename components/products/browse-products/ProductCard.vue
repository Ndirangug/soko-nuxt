<template>
  <div class="card-container">
    <v-card class="mx-4 my-4 card" tile>
      <v-img :src="product.thumbnails[0]" />

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

<style lang="scss" scoped>
.card-container {
  width: 20vw;
  height: 41vw;
  min-width: 200px;
  overflow: hidden;

  .card {
    overflow: hidden;
    width: 100%;
    height: 95%;
  }
}

// phones <  screen <= tablets
@media only screen and (max-width: $tablet_max_px) and (min-width: $phone_max_px) {
}
// screen <= phone
@media screen and (max-width: $phone_max_px) {
}
</style>

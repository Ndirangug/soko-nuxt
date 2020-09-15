<template>
  <div class="card-container">
    <v-card
      class="ma-2 ma-sm-2 ma-md-4 ma-lg-4 ma-xl-4"
      tile
      :height="cardHeight"
    >
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

  computed: {
    cardHeight() {
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 370
        case 'sm':
          return 360
        case 'md':
          return 360
        case 'lg':
          return 450
        case 'xl':
          return 400
        default:
          return 400
      }
    },
  },

  mounted() {
    // @ts-ignore
    console.log(this.$vuetify.breakpoint)
  },
})
</script>

<style lang="scss" scoped>
.card-container {
  width: 20vw;
  min-width: 180px;

  .card {
    overflow: hidden;
  }
}

// phones <  screen <= tablets
@media only screen and (max-width: $tablet_max_px) and (min-width: $phone_max_px) {
}
// screen <= phone
@media screen and (max-width: $phone_max_px) {
}
</style>

<template>
  <div class="card-container" @focus="cycle = true" @mouseover="cycle = true">
    <v-card
      class="card ma-2 ma-sm-3 mx-md-4 my-md-6 mx-lg-4 my-lg-8 mx-xl-4 my-xl-8"
      tile
      :height="cardHeight"
    >
      <div class="images">
        <v-carousel
          :continuous="true"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          :delimiter-icon="icons.dash"
          :height="carouselHeight"
        >
          <v-carousel-item
            v-for="(thumbnail, i) in product.thumbnails"
            :key="i"
          >
            <v-sheet color="grey lighten-5" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <v-img :src="thumbnail" />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>

      <v-card-title class="text-subtitle-2 text-center">
        {{ product.title }}
      </v-card-title>
      <v-card-subtitle class="text-center">{{ product.price }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script lang="ts">
import { mdiMinus } from '@mdi/js'
import Vue, { PropOptions } from 'vue'
import { Product } from '~/types/types'

export default Vue.extend({
  props: {
    product: {
      type: Object,
      required: true,
    } as PropOptions<Product>,
  },

  data() {
    return {
      icons: {
        dash: mdiMinus,
      },
      cycle: false,
    }
  },

  computed: {
    cardHeight(): number {
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 310
        case 'sm':
          return 310
        case 'md':
          return 320
        case 'lg':
          return 370
        case 'xl':
          return 370
        default:
          return 370
      }
    },
    carouselHeight(): number {
      return 0.7 * this.cardHeight
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
  min-width: 140px;

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

<!-- uncsoped-->
<style lang="scss">
.card-container {
  .card {
    .images {
      .v-carousel__controls__item {
        margin: 0 !important;
      }
    }
  }
}
</style>

<template>
  <div class="card-container" @focus="cycle = true" @mouseover="cycle = true">
    <v-card
      class="card ma-2 ma-sm-3 mx-md-4 my-md-6 mx-lg-4 my-lg-8 mx-xl-4 my-xl-8 text-center"
      tile
      :height="cardHeight"
      @mouseenter.native="showCardAction = true"
      @mouseleave.native="showCardAction = false"
    >
      <div class="add-to-saved-items">
        <v-btn
          icon
          :ripple="false"
          :small="this.$vuetify.breakpoint.name == 'sm'"
          :x-small="this.$vuetify.breakpoint.name == 'xs'"
          @click="favorited = !favorited"
        >
          <v-icon v-if="favorited" color="red">
            {{ icons.favoriteFilled }}
          </v-icon>
          <v-icon v-else color="white">
            {{ icons.favoriteOutline }}
          </v-icon>
        </v-btn>
      </div>

      <div v-if="percentageDiscountPresent" class="discount-chip">
        <v-chip
          color="red white--text text-capitalize"
          pill
          :small="this.$vuetify.breakpoint.name == 'sm'"
          :x-small="this.$vuetify.breakpoint.name == 'xs'"
        >
          {{ product.discount.amount }}% off
        </v-chip>
      </div>

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

        <div
          v-show="showCardAction"
          class="call-to-action justify-center align-center product-card-action"
        >
          <ActionAddToCart />
        </div>
      </div>

      <v-card-title class="text-subtitle-2 text-center">
        <!-- TODO Browse to product details-->
        <nuxt-link
          :to="localePath('/product-details')"
          class="text-decoration-none black--text"
        >
          {{ product.title }}
        </nuxt-link>
      </v-card-title>
      <v-card-subtitle class="text-center">{{ product.price }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script lang="ts">
import { mdiHeart, mdiHeartOutline, mdiMinus } from '@mdi/js'
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
        favoriteOutline: mdiHeartOutline,
        favoriteFilled: mdiHeart,
      },
      cycle: false,
      showCardAction: false,
      favorited: false,
    }
  },

  computed: {
    cardHeight(): number {
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 300
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
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 0.55 * this.cardHeight
        case 'sm':
          return 0.55 * this.cardHeight
        default:
          return 0.7 * this.cardHeight
      }
    },

    percentageDiscountPresent(): boolean {
      return (
        this.product.discount !== undefined &&
        this.product.discount.discountType === 'PERCENTAGE'
      )
    },
  },

  watch: {
    favorited(isFavorited: boolean) {
      // TODO on favorited change, update db
      console.log(`favorited ${isFavorited}`)
    },
  },
})
</script>

<style lang="scss" scoped>
.card-container {
  width: 20vw;
  min-width: 140px;

  .card {
    overflow: hidden;

    .discount-chip {
      z-index: 1;
      position: absolute;
      left: 5px;
      top: 10px;
      max-width: 50%;
      overflow: hidden;
    }

    .add-to-saved-items {
      z-index: 1;
      position: absolute;
      right: 5px;
      top: 5px;
    }

    .images {
      .call-to-action {
        height: 50px;
        width: 100%;
        background-color: $green-primary-transparent;
        position: relative;
        top: -50px;
        margin-bottom: -50px;
      }
    }
  }
}

// phones <  screen <= tablets
@media only screen and (max-width: $tablet_max_px) and (min-width: $phone_max_px) {
  .card-container {
    .card {
      .discount-chip {
        left: 3px;
        top: 3px;
      }

      .add-to-saved-items {
        right: 3px;
        top: 3px;
      }
    }
  }
}
// screen <= phone
@media screen and (max-width: $phone_max_px) {
  .card-container {
    .card {
      .discount-chip {
        left: 3px;
        top: 1px;
      }

      .add-to-saved-items {
        right: 3px;
        top: 1px;
      }
    }
  }
}
</style>

<!-- uncsoped-->
<style lang="scss">
.card-container {
  .v-card__text,
  .v-card__title {
    word-break: normal; /* maybe !important  */
  }
  .card {
    .images {
      .v-carousel__controls {
        z-index: 0;
        .v-carousel__controls__item {
          margin: 0 -2px !important;
        }
      }
    }
  }
}

// phones <  screen <= tablets
@media only screen and (max-width: $tablet_max_px) and (min-width: $phone_max_px) {
  .card-container {
    .card {
      .images {
        .v-carousel__controls {
          .v-carousel__controls__item {
            margin: 0 -4px !important;
          }
        }
      }
    }
  }
}

@media screen and (max-width: $phone_max_px) {
  .card-container {
    .card {
      .images {
        .v-carousel__controls {
          .v-carousel__controls__item {
            margin: 0 -2px !important;
          }
        }
      }
    }
  }
}
</style>

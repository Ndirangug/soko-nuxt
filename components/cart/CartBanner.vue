<template>
  <div class="cart-banner-container">
    <div class="poster-image">
      <v-img src="/cart/banner.jpg">
        <h1 class="text-h5 text-md-h5 text-capitalize white--text">
          {{ $t('cart.my_cart') }}
        </h1>

        <v-responsive
          :width="iconWidth"
          :height="iconWidth"
          class="cart-icon px-2 py-2 px-sm-4 py-sm-4"
        >
          <v-icon :large="$vuetify.breakpoint.smAndUp" color="white ma-auto">
            {{ icons.cart }}
          </v-icon>
        </v-responsive>
      </v-img>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiCart } from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      icons: {
        cart: mdiCart,
      },
    }
  },
  computed: {
    bannerMaxHeight() {
      return '10vw'
    },

    iconWidth() {
      let width = ''
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          width = '5vw'
          break
        case 'lg':
          width = '5vw'
          break
        case 'md':
          width = '6vw'
          break
        case 'sm':
          width = '7vw'
          break
        case 'xs':
          width = '8vw'
          break
        default:
          break
      }
      return width
    },
  },
})
</script>

<style lang="scss" scoped>
.cart-icon {
  clip-path: polygon(70% 0, 100% 39%, 93% 82%, 50% 100%, 9% 82%, 0 39%, 30% 0);
  background-color: $green-primary;
}
</style>

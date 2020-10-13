<template>
  <div id="cart-banner-container">
    <div class="poster-image">
      <!-- <v-parallax
        v-scroll="onScroll"
        class="parallax"
        :height="bannerHeight"
        src="/cart/banner.jpg"
      > -->
      <div class="parallax" :style="{ height: `${bannerHeight}px` }">
        <div class="overlay">
          <!-- :style="{ top: `${initialTop}px` }" -->
          <div
            class="page-title d-flex flex-column justify-center align-center"
            :class="[`page-title-top-${$vuetify.breakpoint.name}`]"
          >
            <h1
              class="text-h4 text-sm-h3 text-md-h2 text-capitalize white--text font-weight-regular mb-4 mb-md-6"
            >
              {{ $t('cart.my_cart') }}
            </h1>

            <div class="border-simulation">
              <v-responsive
                class="cart-icon"
                :height="iconContainerSize"
                :width="iconContainerSize"
              >
                <v-avatar
                  class="the-icon"
                  :width="iconWidth"
                  :height="iconHeight"
                >
                  <v-icon :x-large="$vuetify.breakpoint.mdAndUp" color="white">
                    {{ icons.cart }}
                  </v-icon>
                </v-avatar>
              </v-responsive>
            </div>
          </div>
        </div>
      </div>
      <!-- </v-parallax> -->
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
      offsetTop: 0,
    }
  },
  computed: {
    bannerHeight(): number {
      let height = 0
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          height = 400
          break
        case 'lg':
          height = 400
          break
        case 'md':
          height = 330
          break
        case 'sm':
          height = 260
          break
        case 'xs':
          height = 200
          break
        default:
          break
      }
      return height
    },

    initialTop(): number {
      let top = 0
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          top = 320
          break
        case 'lg':
          top = 320
          break
        case 'md':
          top = 255
          break
        case 'sm':
          top = 195
          break
        case 'xs':
          top = 145
          break
        default:
          break
      }
      return top
    },

    iconContainerSize(): number {
      let size = 0
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          size = 80
          break
        case 'lg':
          size = 80
          break
        case 'md':
          size = 70
          break
        case 'sm':
          size = 60
          break
        case 'xs':
          size = 60
          break
        default:
          break
      }
      return size
    },

    iconSize() {
      // @ts-ignore
      return Math.floor(0.5 * this.iconContainerSize)
    },
    iconHeight() {
      // @ts-ignore
      return Math.floor(0.8 * this.iconContainerSize)
    },
    iconWidth() {
      // @ts-ignore
      return Math.floor(0.5 * this.iconContainerSize)
    },
  },

  methods: {
    onScroll(e: Event) {
      // @ts-ignore
      this.offsetTop = e.target.scrollingElement.scrollTop
    },
  },
})
</script>

<style lang="scss" scoped>
.parallax {
  background: url('/cart/banner.jpg') center no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .overlay {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);

    .page-title {
      width: fit-content;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 2;

      .border-simulation {
        width: fit-content;
        height: auto;
        padding: 0.2em;
        background-color: $grey-background;
        clip-path: polygon(
          75% 10%,
          100% 42%,
          90% 81%,
          50% 100%,
          10% 81%,
          0 42%,
          25% 10%
        );

        .cart-icon {
          width: fit-content;
          clip-path: polygon(
            75% 10%,
            100% 42%,
            90% 81%,
            50% 100%,
            10% 81%,
            0 42%,
            25% 10%
          );
          background-color: $green-primary;

          .the-icon {
            @include absolute-center();
          }
        }
      }
    }

    .page-title-top-xl {
      top: 44%;
    }

    .page-title-top-lg {
      top: 44%;
    }
    .page-title-top-md {
      top: 38%;
    }
    .page-title-top-sm {
      top: 34%;
    }
    .page-title-top-xs {
      top: 27%;
    }
  }
}
</style>

<style lang="scss">
.v-parallax__content {
  padding: 0 !important;

  .page-title {
    .the-icon {
      .v-icon {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
}
</style>

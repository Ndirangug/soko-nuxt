<template>
  <div class="root-container">
    <div class="ads-container">
      <v-carousel
        class="ads-carousel"
        cycle
        continuous
        show-arrows-on-hover
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(ad_strip, i) in ads"
          :key="i"
          class="ads-strip"
        >
          <div class="ad-item d-flex flex-row justify-center align-center">
            <v-img class="img" :src="ad_strip[0]" contain />
            <v-img class="img" :src="ad_strip[1]" contain />
            <v-img class="img" :src="ad_strip[2]" contain />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      ads: [
        [
          '/products/ads/ad1.jpg',
          '/products/ads/ad2.jpg',
          '/products/ads/ad3.jpg',
        ],
        [
          '/products/ads/ad1.jpg',
          '/products/ads/ad2.jpg',
          '/products/ads/ad3.jpg',
        ],
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.root-container {
  padding: 5vw 0;

  .ads-container {
    .ads-carousel {
      height: 15vw !important;
      .ads-strip {
        .ad-item {
          .img {
            margin: 0 2vw;
            max-width: 300px;
            min-width: 80px;
            width: 20%;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: $tablet_max_px) and (min-width: $phone_max_px) {
  .root-container {
    .ads-container {
      .ads-carousel {
        .ads-strip {
          .ad-item {
            .img {
              width: 30%;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: $phone_max_px) {
  .root-container {
    .ads-container {
      .ads-carousel {
        height: 23vw !important;
        .ads-strip {
          .ad-item {
            .img {
              width: 40%;
            }
          }
        }
      }
    }
  }
}
</style>

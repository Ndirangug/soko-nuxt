// TODO USE SLIDER GROUP
<template>
  <div
    class="root-container px-1 py-6 py-lg-16 d-flex justify-center align-center"
  >
    <div class="ads-container">
      <div class="ads-slider">
        <v-slide-group :show-arrows="true" class="ads-strip">
          <v-slide-item
            v-for="(ad, j) in ads"
            v-slot:default="{ active, toggle }"
            :key="j"
            class="mx-1 mx-md-2 ad-item align-self-center"
          >
            <v-btn
              :href="ad.link"
              :ripple="false"
              icon
              :input-value="active"
              @click="toggle"
            >
              <v-img class="img" :src="ad.poster" min-height="100" />
            </v-btn>
          </v-slide-item>
        </v-slide-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      ads: [
        { poster: '/categories/ads/ad1.jpg', link: '#' },
        { poster: '/categories/ads/ad2.jpg', link: '#' },
        { poster: '/categories/ads/ad3.jpg', link: '#' },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.ads-container {
  width: 100%;
  .ads-slider {
    height: 12vw !important;
    .ads-strip {
      .ad-item {
        .img {
          // margin: 0 2vw;
          // max-width: 300px;
          // min-width: 80px;
          // width: 20%;
          height: 100% !important;
          width: 100% !important;
        }
      }
    }
  }
}

// @media only screen and (max-width: $tablet_max_px) and (min-width: $phone_max_px) {
//   .root-container {
//     .ads-container {
//       .ads-carousel {
//         .ads-strip {
//           .ad-item {
//             .img {
//               // width: 30%;
//             }
//           }
//         }
//       }
//     }
//   }
// }

@media screen and (max-width: $phone_max_px) {
  .root-container {
    .ads-container {
      .ads-slider {
        height: 20vw !important;
      }
    }
  }
}
</style>

<style lang="scss">
.ads-strip {
  .v-btn--icon {
    min-width: 150px !important;
    min-height: 80px !important;

    .v-responsive__content {
      width: 100% !important;
      height: 100% !important;
    }
  }

  .v-slide-group__content {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
}
</style>

// TODO: Add controls to view full screen, zoom, pan
<template>
  <div class="product-carousel-container">
    <div class="images">
      <v-window v-model="model" reverse>
        <v-window-item v-for="(image, i) in images" :key="i">
          <!-- TODO: remove eager loading here -->
          <v-img eager :src="image" />
        </v-window-item>
      </v-window>
    </div>

    <div
      class="thumbnails d-flex mx-auto ml-md-8 ml-lg-16"
      :class="{ 'thumbnails-smAndDown': $vuetify.breakpoint.smAndDown }"
    >
      <div class="3d-button">
        <ThreeDButton
          :thumbnail-width="thumbnailWidth"
          :thumbnail="thumbnails[0]"
        />
      </div>

      <v-item-group
        v-model="model"
        class="text-center ml-xl-16 pl-xl-16"
        mandatory
      >
        <v-item
          v-for="(thumbnail, i) in thumbnails"
          :key="i"
          v-slot:default="{ active, toggle }"
        >
          <v-btn
            :input-value="active"
            icon
            class="mx-0 mx-sm-0 mx-md-4 mx-lg-6"
            @click="toggle"
          >
            <v-img
              v-if="$vuetify.breakpoint.mdAndUp"
              :width="thumbnailWidth"
              :src="thumbnail"
            >
              <div class="overlay" :class="{ 'overlay-hover': active }"></div>
            </v-img>

            <v-icon v-else :color="active ? 'white' : ''">
              {{ icons.dash }}
            </v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiMinus } from '@mdi/js'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    images: {
      type: Array as PropType<Array<String>>,
      required: true,
    },
    thumbnails: {
      type: Array as PropType<Array<String>>,
      required: true,
    },
  },
  data() {
    return {
      model: 0,
      icons: {
        dash: mdiMinus,
      },
    }
  },

  computed: {
    length(): number {
      return this.thumbnails.length
    },

    thumbnailsContainerWidth(): number {
      let width = 0

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          width = 40
          break
        case 'lg':
          width = 40
          break
        case 'md':
          width = 40
          break
        case 'sm':
          width = 80
          break
        case 'xs':
          width = 90
          break
        default:
          width = 90
          break
      }
      return width
    },

    thumbnailWidth(): number {
      let width = 0

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          width = 70
          break
        case 'lg':
          width = 70
          break
        case 'md':
          width = 60
          break
        case 'sm':
          width = 50
          break
        case 'xs':
          width = 40
          break
        default:
          width = 50
          break
      }
      return width
    },
  },
  methods: {
    next() {
      this.model = this.model + 1 === this.length ? 0 : this.model + 1
    },
    prev() {
      this.model = this.model - 1 < 0 ? this.length - 1 : this.model - 1
    },
  },
})
</script>

<style lang="scss" scoped>
.product-carousel-container {
  .thumbnails {
    width: fit-content;
    position: relative;
    top: -100px;
    margin-bottom: -50px;

    .overlay {
      background-color: $grey-background-transparent;
      height: 100%;
      width: 100%;
    }

    .overlay-hover {
      background-color: transparent !important;
      border: solid 0.2em $grey-background;
    }
  }

  .thumbnails-smAndDown {
    position: relative;
    top: -35px;
    margin-bottom: -38px;
  }
}
</style>

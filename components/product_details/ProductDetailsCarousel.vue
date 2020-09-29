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
      class="thumbnails mx-auto ml-sm-10 ml-md-16 pl-md-8 ml-lg-16 pl-lg-16"
      :class="{ 'thumbnails-xs': $vuetify.breakpoint.xs }"
    >
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
            class="mx-2 mx-sm-3 mx-md-4 mx-lg-6"
            @click="toggle"
          >
            <v-img :width="thumbnailWidth" :src="thumbnail">
              <div class="overlay" :class="{ 'overlay-active': active }"></div>
            </v-img>
          </v-btn>
        </v-item>
      </v-item-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    images: {
      // TODO: HOW to annotate array type vue prop
      type: Array,
      required: true,
    },
    thumbnails: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      model: 0,
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

    .overlay {
      background-color: $grey-background-transparent;
      height: 100%;
      width: 100%;
    }

    .overlay-active {
      background-color: transparent !important;
      border: solid 0.2em $grey-background;
    }
  }

  .thumbnails-xs {
    position: relative;
    top: -10px;
  }
}
</style>

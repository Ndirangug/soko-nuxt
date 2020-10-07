<template>
  <v-responsive :width="previewWidth">
    <Pano source="/product-details/1/360/panorama.jpg" />
  </v-responsive>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    previewWidth(): number {
      let width = 0

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          width = 900
          break
        case 'lg':
          width = 700
          break
        case 'md':
          width = 500
          break
        case 'sm':
          width = 400
          break
        case 'xs':
          width = 250
          break
        default:
          break
      }

      return width
    },
  },
})
</script>

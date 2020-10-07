<template>
  <v-responsive :width="previewWidth">
    <Pano :source="previewUrl" />
  </v-responsive>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    previewUrl: {
      type: String,
      required: true,
    },
    demoUrl: {
      type: String,
      required: true,
    },
  },
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

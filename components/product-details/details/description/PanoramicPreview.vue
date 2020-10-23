<template>
  <v-responsive :width="previewWidth" :height="previewHeight" class="mx-auto">
    <client-only>
      <v-tooltip attach=".three-sixty-preview" top>
        <template v-slot:activator="{ on, attrs }">
          <Pano
            v-bind="attrs"
            class="three-sixty-preview"
            :source="previewUrl"
            v-on="on"
          />
        </template>
        {{ $t('productDetails.three_sixty_tip') }}
      </v-tooltip>
    </client-only>
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

    previewHeight(): number {
      return Math.floor(0.6 * this.previewWidth)
    },

    previewPlaceholder(): string {
      return this.previewUrl.replace('panorama.jpg', 'panorama-preview.jpg')
    },
  },
})
</script>

<style lang="scss" scoped>
.three-sixty-preview {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <v-sheet
    class="product-summary-container"
    :height="sheetHeight"
    :width="sheetWidth"
  >
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    sheetHeight(): string {
      let height = ''

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          height = '50vw'
          break
        case 'lg':
          height = '50vw'
          break
        case 'md':
          height = '50vw'
          break
        case 'sm':
          height = '50vw'
          break
        default:
          break
      }
      return height
    },

    sheetWidth(): string {
      let width = ''

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          width = '50vw'
          break
        case 'lg':
          width = '50vw'
          break
        case 'md':
          width = '50vw'
          break
        case 'sm':
          width = '50vw'
          break
        case 'xs':
          width = '50vw'
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
.product-summary-container {
  background-color: $grey-background-transparent;
}
</style>

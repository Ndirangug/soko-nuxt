<template>
  <div id="logo">
    <h1 :class="[{ 'white--text': dark, 'black--text': !dark }, ...classes]">
      <span :class="{ 'white--text': !dark, 'black--text': dark }">L</span
      >O<span :class="{ 'white--text': !dark, 'black--text': dark }">R</span>EM
    </h1>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
    classes: {
      type: Array as PropType<Array<String>>,
      required: false,
      default() {
        // @ts-ignore
        return [{ 'text-h4': this.$vuetify.breakpoint.smAndDown }]
      },
    },
  },
})
</script>

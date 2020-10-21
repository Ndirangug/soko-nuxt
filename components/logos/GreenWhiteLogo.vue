<template>
  <div id="logo">
    <h1
      :class="[
        {
          'white--text': dark,
          'black--text': !dark,
        },
        ...classes,
      ]"
    >
      L<span class="primary--text">O</span>REM
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

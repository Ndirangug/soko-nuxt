<template>
  <GreenWhiteLogo :dark="dark" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

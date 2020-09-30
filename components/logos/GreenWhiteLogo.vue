<template>
  <div id="logo">
    <h1 :class="{ 'white--text': dark, 'black--text': !dark }">
      L<span class="primary--text">O</span>REM
    </h1>
  </div>
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

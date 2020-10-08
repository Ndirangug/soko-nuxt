<template>
  <p class="text-body-2 text-md-body-1">{{ text }}</p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

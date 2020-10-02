<template>
  <h1 class="text-h5 text-md-h4 text-lg-h3">{{ productTitle }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    productTitle: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div>
    <v-img v-for="(url, i) in images" :key="i" :src="url" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
})
</script>

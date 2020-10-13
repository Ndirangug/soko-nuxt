<template>
  <div>
    <v-img v-for="(url, i) in images" :key="i" :src="url" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    images: {
      type: Array as PropType<Array<String>>,
      required: true,
    },
  },
})
</script>

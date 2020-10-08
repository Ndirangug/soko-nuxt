<template>
  <div
    class="reviews-container d-flex flex-column justify-center align-center"
  ></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
})
</script>

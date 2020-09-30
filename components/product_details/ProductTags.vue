<template>
  <div class="tags-container mx-auto">
    <span class="text-uppercase grey--text text--darken-2 text-caption">
      {{ $t('product_details.tags') + ':' }}
    </span>
    <nuxt-link
      v-for="(tag, i) in tags"
      :key="i"
      :to="`/products/browse-products?tag=${tag}`"
      class="text-decoration-none grey--text text--darken-2 text-caption font-italic text-capitalize"
      >{{ tag + ', ' }}</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.tags-container {
  width: fit-content;
}
</style>

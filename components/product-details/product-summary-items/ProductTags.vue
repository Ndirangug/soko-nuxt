<template>
  <div class="tags-container mx-auto">
    <span class="text-uppercase grey--text text--darken-2 text-caption">
      {{ $t('productDetails.tags') + ':' }}
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
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    tags: {
      type: Array as PropType<Array<String>>,
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

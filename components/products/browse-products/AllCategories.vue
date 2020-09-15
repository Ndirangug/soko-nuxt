<template>
  <div>
    <div v-if="$apollo.loading">
      skeleton loading,... (better UX for client side)
    </div>

    <div
      v-for="(category, i) in categories"
      v-else
      :key="i"
      class="category d-flex justify-center align-center flex-column flex-nowrap px-xs-1 px-sm-2 px-md-4 px-lg-6 px-xl-6"
    >
      <h4>{{ category.title }}</h4>
      <p>{{ category.description }}</p>
      <div class="d-flex justify-center align-center flex-wrap">
        <ProductCard
          v-for="(product, j) in category.products"
          :key="j"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { Product, Category } from '~/types/types'
// @ts-ignore
import Categories from '~/apollo/queries/categories'

export default Vue.extend({
  // @ts-ignore
  apollo: {
    categories: {
      query: Categories,
      prefetch: true,
      variables() {
        return {
          pagination: {
            start: 1,
            first: 6,
          },
        }
      },
    },
  },
})
</script>
<style lang="scss" scoped>
.category {
  z-index: 0;
}
</style>

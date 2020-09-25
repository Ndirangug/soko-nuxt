<template>
  <div>
    <div v-if="$apollo.loading">
      skeleton loading,... (better UX for client side)
    </div>

    <div
      v-for="(category, i) in categories"
      v-else
      :key="i"
      class="category d-flex justify-center align-center flex-column flex-nowrap px-xs-0 px-sm-7 px-md-8 px-lg-8 px-xl-8"
    >
      <h2 class="text-h4 mt-16 text-center">{{ category.title }}</h2>
      <p class="text-subtitle-1 mt-4 text-center px-4">
        {{ category.description }}
      </p>
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
import Categories from '~/apollo/queries/categories.graphql'
import { CategoriesQueryVariables } from '~/types/types'

export default Vue.extend({
  // @ts-ignore
  apollo: {
    categories: {
      query: Categories,
      prefetch: true,
      variables(): CategoriesQueryVariables {
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

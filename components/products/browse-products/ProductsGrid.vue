<template>
  <div class="root-container">
    <div class="d-flex justify-center align-center flex-wrap">
      <ProductCard
        v-for="(product, i) in products"
        :key="i"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import Products from '~/apollo/queries/products'
import { Pagination, ProductsFilter, SortOptions } from '~/types/types'

// TODO EXTRACT TO DECLARATION FILE
type ProductsQueryVariables = {
  filter: ProductsFilter
  pagination: Pagination
  sort: SortOptions
}

export default Vue.extend({
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  // @ts-ignore
  apollo: {
    products: {
      query: Products,
      prefetch: true,
      variables(): ProductsQueryVariables {
        return {
          // @ts-ignore
          filter: this.filter,
          // @ts-ignore
          pagination: this.pagination,
          // @ts-ignore
          sort: this.sort,
        }
      },
    },
  },

  computed: {
    pagination(): Pagination {
      return { start: 1, first: 30 }
    },
    // TODO Get from route query params
    filter(): ProductsFilter {
      return {
        // @ts-ignore
        category: this.category,
        maxPrice: 10000,
        minPrice: 0,
        minSellerScore: 4,
        minProductRating: 4,
        minDiscountPercentage: 5,
        otherFilters: [
          { filterName: 'color', values: ['red'], condition: 'EQUAL' },
          { filterName: 'material', values: ['leather'], condition: 'EQUAL' },
        ],
      }
    },
    sort(): SortOptions {
      return 'POPULARITY'
    },
  },
})
</script>

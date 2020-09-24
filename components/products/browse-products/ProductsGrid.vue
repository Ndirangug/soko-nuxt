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
import {
  Pagination,
  ProductsFilter,
  ProductsQueryVariables,
  SortOptions,
} from '~/types/types'

type ProductsGridData = {
  [key: string]: any
  filter: ProductsFilter
  sort: SortOptions
  pagination: Pagination
}

export default Vue.extend({
  props: {
    category: {
      type: String,
      required: true,
    },
  },

  data(): ProductsGridData {
    return {
      showMoreEnabled: true,
      defaultResultsSize: 30,
      // TODO Vmodel on this
      pagination: {
        start: 1,
        first: 30,
      },
      filter: {
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
      },
      sort: 'POPULARITY',
    }
  },
  // @ts-ignore
  apollo: {
    products: {
      query: Products,
      prefetch: true,
      variables(): ProductsQueryVariables {
        // @ts-ignore
        return this.apolloVariables
      },
    },
  },

  computed: {
    apolloVariables(): ProductsQueryVariables {
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

  methods: {
    goToNextPage() {
      // @ts-ignore
      this.pagination.start++

      // Fetch more data and transform the original result
      // @ts-ignore
      this.$apollo.queries.products.fetchMore({
        // New variables
        // @ts-ignore
        variables: this.apolloVariables,

        // Transform the previous result with new data
        // @ts-ignore
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newProducts = fetchMoreResult.products
          // const hasMore = fetchMoreResult.products.hasMore

          // this.showMoreEnabled = hasMore

          return {
            products: {
              __typename: previousResult.products.__typename,
              // Merging the products list
              ...previousResult.products,
              ...newProducts,
            },
          }
        },
      })
    },
  },
})
</script>

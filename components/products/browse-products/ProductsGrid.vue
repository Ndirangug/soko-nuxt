// TODO refine pagination
<template>
  <div class="root-container">
    <v-container fluid>
      <v-data-iterator
        :items="products"
        :items-per-page.sync="pagination.first"
        :page="pagination.start"
        hide-default-footer
        :server-items-length="totalResults"
        item-key="productID"
      >
        <template v-slot:header>
          <p class="iterator-header">
            {{ $t('products.browse_products.showing_results') }}
            {{ `${firstResult} - ${lastResult}` }}
            {{ $t('products.browse_products.of') + ' ' }}
            {{ totalResults }}
          </p>
        </template>

        <template v-slot:default="props">
          <div class="d-flex justify-center align-center flex-wrap">
            <ProductCard
              v-for="(item, i) in props.items"
              :key="i"
              :product="item"
            />
          </div>
        </template>

        <template v-slot:footer>
          <div class="text-center mt-6">
            <v-pagination
              v-model="pagination.start"
              :length="numberOfPages"
              total-visible="6"
              circle
            ></v-pagination>
          </div>
        </template>
      </v-data-iterator>
    </v-container>
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
      totalResults: 200,
      showMoreEnabled: true,
      defaultResultsSize: 30,
      // TODO Vmodel on this
      pagination: {
        start: 1,
        first: 5,
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
    numberOfPages(): number {
      // @ts-ignore
      return (this.totalResults / this.pagination.first).toFixed()
    },
    firstResult(): number {
      // @ts-ignore
      return (this.pagination.start - 1) * this.pagination.first + 1
    },
    lastResult(): number {
      // @ts-ignore
      const calculatedLastResult = this.pagination.start * this.pagination.first
      // @ts-ignore
      return calculatedLastResult > this.totalResults
        ? // @ts-ignore
          this.totalResults
        : calculatedLastResult
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

<style lang="scss">
.iterator-header {
  &:first-letter {
    text-transform: uppercase;
  }
}
</style>

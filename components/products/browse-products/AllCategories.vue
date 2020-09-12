<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { Product, Category } from '~/types/types'
// @ts-ignore
import Categories from '~/apollo/queries/categories'

export default Vue.extend({
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

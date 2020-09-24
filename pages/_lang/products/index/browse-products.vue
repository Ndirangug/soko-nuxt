<template>
  <div class="root-container">
    <v-scale-transition>
      <FilterToolbar />
    </v-scale-transition>
    <div
      class="d-flex justify-center align-center"
      :class="{ 'filter-chips': showChips }"
    >
      <FilterChips v-show="showChips" @check-tags="showChips = $event" />
    </div>
    <div v-if="noCategorySelected" class="categories">
      <AllCategories />
    </div>
    <div v-else>
      <div
        class="products-grid-container d-flex flex-column justify-center align-start"
      >
        <p>Showing</p>
        <ProductsGrid :category="category" />
        <div class="page-numbers align-self-center">page</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// TODO remove this and use vuetify breakpoint service instead
import { ScreenSizeMixin } from '~/components/mixins/ScreenSize'

export default Vue.extend({
  mixins: [ScreenSizeMixin],
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showChips: false,
      pagination: {},
    }
  },
  computed: {
    noCategorySelected(): boolean {
      return (
        this.category ===
        this.$t('products.browse_products.browse_categories').toString()
      )
    },
  },
})
</script>
<style lang="scss" scoped>
.root-container {
  .filter-chips {
    width: 80%;
    margin: 4vw auto;
  }
}
</style>

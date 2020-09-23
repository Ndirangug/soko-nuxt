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
      <ProductsGrid :category="category" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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

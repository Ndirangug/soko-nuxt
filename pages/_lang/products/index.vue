<template>
  <div
    class="root-container"
    @toggle-navdrawer="onToggleNavDrawer"
    @category-does-not-exist="onCategoryDoesNotExist"
  >
    <!-- #####   top banner section of page   #####-->
    <BannerAndToolbar :category="category.replace('_', '-')" />

    <!-- #### the AdsStrip ##### -->
    <AdsStrip />

    <!-- ##### the actual products ###### ------ -->
    <nuxt-child />

    <!-- ##### blog ##### -->

    <!-- ##### subscribe #### -->

    <!-- ##### footer ##### -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      drawerState: false,
    }
  },

  computed: {
    availableCategories(): string[] {
      return [...Object.keys(this.$t('all_categories'))]
    },
    category(): string {
      const queryCategory = this.$route.query.category
        ? this.$route.query.category
            .toString()
            .trim()
            .toLowerCase()
            .replace(' ', '_')
            .replace('-', '_')
        : 'null'

      if (this.availableCategories.includes(queryCategory)) {
        return this.$t(`all_categories.${queryCategory}`).toString()
      } else {
        this.$emit('category-does-not-exist', queryCategory)
        return this.$t('products.browse_products.browse_categories').toString()
      }
    },
  },

  methods: {
    onToggleNavDrawer(drawerState: boolean) {
      this.drawerState = drawerState
    },
    onCategoryDoesNotExist(e: string) {
      console.log(e)
    },
  },
})
</script>

<style lang="scss" scoped>
.v-autocomplete__content {
  .v-list-item__title {
    color: $grey-text-dark !important;
  }
}
</style>

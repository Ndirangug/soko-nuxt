<template>
  <div
    class="root-container"
    @toggle-navdrawer="onToggleNavDrawer"
    @category-does-not-exist="onCategoryDoesNotExist"
    @category-locale-not-found="onCategoryLocaleNotFound"
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
      return [
        ...Object.keys(this.$t('navigation.rooms')),
        ...Object.keys(this.$t('navigation.specifics')),
        ...Object.keys(this.$t('navigation.other_categories')),
      ]
    },
    category(): string {
      const category = this.$route.query.category
        ? this.$route.query.category
            .toString()
            .trim()
            .toLowerCase()
            .replace(' ', '_')
            .replace('-', '_')
        : 'null'

      // todo clean this up asap
      if (this.availableCategories.includes(category)) {
        if (!this.$t(`navigation.rooms.${category}`).toString().includes('.')) {
          return this.$t(`navigation.rooms.${category}`).toString()
        } else if (
          !this.$t(`navigation.specifics.${category}`).toString().includes('.')
        ) {
          return this.$t(`navigation.specifics.${category}`).toString()
        } else if (
          !this.$t(`navigation.other_categories.${category}`)
            .toString()
            .includes('.')
        ) {
          return this.$t(`navigation.other_categories.${category}`).toString()
        } else {
          this.$emit('category-locale-not-found', category)
          return this.$t(
            'products.browse_products.browse_categories'
          ).toString()
        }
      } else {
        this.$emit('category-does-not-exist', category)
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
    onCategoryLocaleNotFound(e: string) {
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

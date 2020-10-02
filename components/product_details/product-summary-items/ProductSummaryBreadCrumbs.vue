<template>
  <div class="breadcrumbs">
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:item="{ item }">
        <v-hover v-slot:default="{ hover }">
          <v-fade-transition>
            <nuxt-link
              class="breadcrumb-item text-subtitle-2"
              :class="{
                'primary--text': hover,
                'text-caption': $vuetify.breakpoint.smAndDown,
              }"
              :to="item.to != '#' ? localePath(`${item.to}`) : '#'"
            >
              {{ item.text }}
            </nuxt-link>
          </v-fade-transition>
        </v-hover>
      </template>

      <template v-slot:divider>
        <div class="breadcrumb-divider text-subtitle-2">/</div>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface BreadCrumbItem {
  text: string
  to: string
  disabled?: boolean
}

export default Vue.extend({
  props: {
    productTitle: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
  },
  computed: {
    breadcrumbs(): BreadCrumbItem[] {
      const categories = ['category', 'subcategory1', 'subcategory2']
      const breadcrumbs: BreadCrumbItem[] = []

      categories.forEach((category) => {
        breadcrumbs.push({
          text: category,
          to: '/products/browse-products?category=' + category,
          disabled: false,
        })
      })

      breadcrumbs.push({
        text: this.productTitle,
        to: '#',
        disabled: true,
      })
      return breadcrumbs
    },
  },
})
</script>

<style lang="scss" scoped>
.breadcrumbs {
  .breadcrumb-item {
    text-transform: capitalize;
    text-decoration: none;
    color: $grey-text-dark;
    font-size: 0.8em !important;
  }
  .breadcrumb-divider {
    color: $grey-text-dark;
    font-size: 0.8em !important;
  }
}
</style>

<style lang="scss">
.breadcrumbs {
  .v-breadcrumbs__divider {
    padding: 0 0.9vw !important;
  }

  .v-breadcrumbs {
    padding: 0 !important;
  }
}
</style>

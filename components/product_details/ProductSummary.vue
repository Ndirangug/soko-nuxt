<template>
  <v-sheet
    class="product-summary-container"
    :height="$vuetify.breakpoint.smAndUp ? sheetHeight : ''"
    :width="$vuetify.breakpoint.smAndUp ? sheetWidth : ''"
  >
    <div
      class="root-flex-container d-flex flex-column justify-start align-start"
    >
      <div class="breadcrumbs">
        <v-breadcrumbs :items="breadcrumbs">
          <template v-slot:item="{ item }">
            <v-hover v-slot:default="{ hover }">
              <v-fade-transition>
                <nuxt-link
                  class="breadcrumb-item text-subtitle-2"
                  :class="{ 'primary--text': hover }"
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
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Product } from '~/types/types'

interface BreadCrumbItem {
  text: string
  to: string
  disabled?: boolean
}

export default Vue.extend({
  props: {
    product: {
      type: Object,
      required: true,
    } as PropOptions<Product>,
  },
  computed: {
    sheetHeight(): string {
      let height = ''

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          height = '50vw'
          break
        case 'lg':
          height = '50vw'
          break
        case 'md':
          height = '50vw'
          break
        case 'sm':
          height = '50vw'
          break
        default:
          break
      }
      return height
    },

    sheetWidth(): string {
      let width = ''

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          width = '50vw'
          break
        case 'lg':
          width = '50vw'
          break
        case 'md':
          width = '50vw'
          break
        case 'sm':
          width = '50vw'
          break
        case 'xs':
          width = '50vw'
          break
        default:
          break
      }
      return width
    },

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
        text: this.product.title,
        to: '#',
        disabled: true,
      })
      return breadcrumbs
    },
  },
})
</script>

<style lang="scss" scoped>
.product-summary-container {
  background-color: $grey-background-transparent;

  .breadcrumbs {
    .breadcrumb-item {
      text-transform: capitalize;
      text-decoration: none;
      color: $grey-text-dark;
      font-size: 0.9em !important;
    }
    .breadcrumb-divider {
      color: $grey-text-dark;
      font-size: 0.9em !important;
    }
  }
}
</style>

<style lang="scss">
.product-summary-container {
  .breadcrumbs {
    .v-breadcrumbs__divider {
      padding: 0 0.9vw !important;
    }
  }
}
</style>

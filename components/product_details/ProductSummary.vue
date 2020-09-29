<template>
  <v-sheet
    class="product-summary-container px-sm-4 py-sm-3 px-md-6"
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

      <div class="product-title mt-2 mb-4 mb-md-6 mb-lg-8">
        <h1 class="text-h4 text-lg-h3">{{ product.title }}</h1>
      </div>

      <div
        class="price-reviews d-flex justify-space-between align-center flex-wrap"
      >
        <div class="price">
          <div v-if="percentageDiscountPresent" class="price-before-discount">
            <v-badge offset-x="-0.6vw" offset-y="0.6vw" color="accent" tile>
              <div slot="badge" class="black--text font-weight-bold">
                {{ `-${product.discount.amount}%` }}
              </div>
              <p class="grey--text text-decoration-line-through ma-0">
                {{ $t('currency') }}
                {{
                  new Intl.NumberFormat('en-US', {
                    style: 'decimal',
                    maximumFractionDigits: 0,
                  }).format(priceBeforeDiscount)
                }}
              </p>
            </v-badge>
          </div>

          <div class="price-after-discount">
            <p class="primary--text text-h4 text-lg-h3 font-weight-bold">
              {{ $t('currency') }}
              {{
                new Intl.NumberFormat('en-US', {
                  style: 'decimal',
                  maximumFractionDigits: 0,
                }).format(productPrice)
              }}
            </p>
          </div>
        </div>

        <div class="reviews mb-lg-n6">
          <div class="d-flex align-center justify-end flex-wrap">
            <div class="star-rating mr-1">
              <v-rating
                background-color="grey"
                color="yellow accent-2"
                readonly
                dense
                :value="product.productOverallRating.overallScore"
              />
            </div>
            <div class="label">
              <nuxt-link to="#" class="text-capitalize text-decoration-none">
                {{ product.productOverallRating.numberOfRatings }}
                {{ $t('product_details.customer_ratings') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <v-divider class="divider" />
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProductDiscountMixin } from '~/components/mixins/ProductDiscount'
import { Product } from '~/types/types'

interface BreadCrumbItem {
  text: string
  to: string
  disabled?: boolean
}

export default Vue.extend({
  mixins: [ProductDiscountMixin],
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
      font-size: 0.8em !important;
    }
    .breadcrumb-divider {
      color: $grey-text-dark;
      font-size: 0.8em !important;
    }
  }

  .price-reviews {
    width: 100%;
  }

  .divider {
    border-color: rgba(0, 0, 0, 0.32) !important;
    width: 100%;
  }
}
</style>

<style lang="scss">
.product-summary-container {
  .breadcrumbs {
    .v-breadcrumbs__divider {
      padding: 0 0.9vw !important;
    }

    .v-breadcrumbs {
      padding: 0 !important;
    }
  }

  .price-reviews {
    .v-rating {
      button {
        padding: 0 !important;
      }
    }
  }
}
</style>

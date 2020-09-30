// TODO Consider where to place shipping info on size md
<template>
  <v-sheet
    class="product-summary-container px-sm-4 py-sm-3 px-md-6"
    :height="$vuetify.breakpoint.mdAndUp ? sheetHeight : ''"
    :width="$vuetify.breakpoint.mdAndUp ? sheetWidth : ''"
  >
    <div
      class="root-flex-container d-flex flex-column justify-start align-start"
    >
      <div class="summary d-flex flex-column justify-start align-start">
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

        <div class="product-title mt-md-1 mt-lg-2 mb-2 mb-sm-1 mb-md-1 mb-lg-4">
          <h1 class="text-h5 text-md-h4 text-lg-h3">{{ product.title }}</h1>
        </div>

        <div
          class="price-reviews d-flex flex-column flex-sm-row justify-sm-space-between align-sm-center flex-sm-wrap"
        >
          <div class="price">
            <div v-if="percentageDiscountPresent" class="price-before-discount">
              <v-badge offset-x="-0.6vw" offset-y="1.3vw" color="accent" tile>
                <div slot="badge" class="black--text font-weight-medium">
                  {{ `-${product.discount.amount}%` }}
                </div>

                <p
                  class="grey--text text-decoration-line-through ma-0"
                  :class="{ 'text-body-2': $vuetify.breakpoint.smAndDown }"
                >
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
              <p
                class="primary--text text-h5 text-md-h4 text-lg-h3 font-weight-bold"
              >
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

          <div class="reviews mt-n5 mt-md-n3 mb-1 mb-md-1 mt-lg-0 mb-lg-n6">
            <div class="d-flex align-center justify-sm-end flex-wrap">
              <div class="star-rating mr-2 mr-md-1">
                <v-rating
                  background-color="grey"
                  color="yellow accent-2"
                  readonly
                  dense
                  :small="$vuetify.breakpoint.smAndDown"
                  :value="product.productOverallRating.overallScore"
                />
              </div>
              <div class="label">
                <nuxt-link
                  to="#"
                  class="text-capitalize text-decoration-none"
                  :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }"
                >
                  {{ product.productOverallRating.numberOfRatings }}
                  {{ $t('product_details.customer_ratings') }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <v-divider class="divider" />

      <div
        class="seller-and-shipping-info d-flex flex-column justify-start align-stretch mt-1"
        :class="{ 'text-caption': $vuetify.breakpoint.sm }"
      >
        <div class="seller-info">
          <div class="brand text-capitalize my-1">
            <p>
              {{ $t('product_details.brand') + ':' }}
              <nuxt-link
                class="text-decoration-none"
                :to="`/products/browse-products?brand=${product.brand}`"
              >
                {{ product.brand }}
              </nuxt-link>
            </p>
          </div>

          <div
            class="seller d-flex align-center justify-space-between flex-wrap my-1"
          >
            <p class="mr-2">
              <span class="text-capitalize">
                {{ $t('product_details.seller') + ':' }}
              </span>

              <nuxt-link
                class="text-decoration-none text-capitalize"
                :to="`/sellers/?id=${product.seller.sellerID}`"
              >
                {{ product.seller.sellerName }}
              </nuxt-link>
              |
              <nuxt-link
                :to="`/products/browse-products?seller=${product.seller.sellerID}`"
              >
                <span class="text-sentence">
                  {{ $t('product_details.similar_from') }}
                </span>

                <span class="text-capitalize">
                  {{ product.seller.sellerName }}
                </span>
              </nuxt-link>
            </p>

            <p>
              <span class="text-capitalize">
                {{ $t('product_details.seller_score') + ':' }}
              </span>

              {{
                new Intl.NumberFormat('en-US', { style: 'percent' }).format(
                  product.seller.sellerScore
                )
              }}
            </p>
          </div>
        </div>

        <div v-if="!$vuetify.breakpoint.md" class="shipping mt-6">
          <h6 class="text-body-1 text-sentence">
            <span class="text-sentence">
              {{ $t('product_details.shipping_from') }}
            </span>
            <span class="font-italic grey--text text--darken-2">
              {{ product.seller.dispatchLocation }}
            </span>
            <span id="delivery-icon" class="ml-2">
              <v-icon dark>
                {{ icons.delivery }}
              </v-icon>
            </span>
          </h6>

          <p class="text-body-2 text-sentence mt-3">
            {{ $t('product_details.for') }}
            <nuxt-link to="#" class="text-decoration-none">
              {{ $t('product_details.shipping_details') }}
            </nuxt-link>
            {{ $t('product_details.and_expected_delivery_times_see') }}
            <nuxt-link to="#" class="text-decoration-none">
              {{ $t('product_details.shipping_and_returns_policy') }}
            </nuxt-link>
          </p>
          <p></p>
        </div>
        <div
          v-else
          class="shipping-md align-self-end mt-n8 d-flex justify-end align-center"
        >
          <h6 class="text-body-1 mr-2">
            <v-hover v-slot:default="{ hover }">
              <v-fade-transition>
                <nuxt-link
                  to="#"
                  class="text-capitalize grey--text text--darken-2 font-italic"
                  :class="{ 'text-decoration-none': !hover }"
                >
                  {{ $t('product_details.shipping_details') }}
                </nuxt-link>
              </v-fade-transition>
            </v-hover>
          </h6>
          <span id="delivery-icon">
            <v-icon dark>
              {{ icons.delivery }}
            </v-icon>
          </span>
        </div>
      </div>

      <div class="configure fill-width mt-sm-6 mt-md-6 mt-lg-8">
        <Configurables :configurables="product.configurables" />
      </div>

      <div class="quantity-input">
        <QuantityInput />
      </div>

      <div class="summary-actions fill-width">
        <SummaryActions />
      </div>

      <div class="share fill-width mt-5 justify-self-end">
        <ShareProduct />
      </div>

      <div class="tags fill-width mt-2">
        <ProductTags :tags="product.tags" />
      </div>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import { mdiTruckDeliveryOutline } from '@mdi/js'
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
  data() {
    return {
      icons: {
        delivery: mdiTruckDeliveryOutline,
      },
    }
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

  .summary {
    width: 100%;
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
  }

  .divider {
    border-color: rgba(0, 0, 0, 0.32) !important;
    width: 100%;
  }

  .seller-and-shipping-info {
    width: 100%;

    p {
      margin-bottom: 0;
    }
  }

  .fill-width {
    width: 100%;
  }
}

.text-sentence {
  @include sentence-case();
}

#delivery-icon {
  background-color: $black;
  border-radius: 10vw;
  padding: 0.5vw;
}
</style>

// unsccoped so that it overrides default vuetify styles
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

<template>
  <div>
    <v-row class="cart-item-row-container py-5">
      <v-col class="product-summary-cell flex-wrap" cols="12" md="7">
        <div class="product-summary d-flex justify-start align-start">
          <div class="thumbnail mr-4 mr-md-6 mb-4 mb-sm-2">
            <v-img
              :src="cartItem.product.thumbnails[0]"
              :width="$vuetify.breakpoint.mdAndUp ? 120 : 90"
              :height="$vuetify.breakpoint.mdAndUp ? 120 : 90"
            />
          </div>

          <div
            class="product-info d-flex flex-column justify-start align-start"
          >
            <h6
              class="title text-body-1 text-md-h6 font-weight-medium text-capitalize mb-2"
            >
              <nuxt-link
                class="text-decoration-none black--text"
                :to="
                  localePath(
                    `/product-details?id=${cartItem.product.productID}`
                  )
                "
              >
                {{ cartItem.product.title }}
              </nuxt-link>
            </h6>

            <div class="configurables-section">
              <v-container class="pa-0">
                <v-row class="table-row" dense>
                  <v-col
                    v-for="(configurableOption,
                    i) in cartItem.configurableOptions"
                    :key="i"
                    cols="12"
                    sm="6"
                    md="12"
                    lg="6"
                  >
                    <div
                      class="configurable d-flex justify-start align-center text-subtitle-2 font-weight-regular"
                    >
                      <span class="mr-2">
                        {{
                          `${configurableOption.configurable.configurableType}: `
                        }}
                      </span>
                      <v-avatar size="15">
                        <v-img :src="configurableOption.thumbnailUrl" />
                      </v-avatar>
                      <span class="ml-2">{{ configurableOption.name }}</span>
                    </div>
                  </v-col>
                  <v-spacer />
                </v-row>
              </v-container>
            </div>

            <div v-if="showEditButton" class="edit-btn ml-n3">
              <v-btn small text color="primary">
                <span class="text-decoration-underline text-caption mr-1">
                  {{ $t('cart.edit') }}
                </span>
                <v-icon small>{{ icons.edit }}</v-icon>
              </v-btn>
            </div>

            <div
              v-if="$vuetify.breakpoint.smAndDown"
              class="d-flex justify-start align-center price-sm-and-down mt-2 mb-1 text-subtitle-2"
            >
              {{ $t('currency') }}
              {{ new Intl.NumberFormat('en-US').format(totalCost) }}
            </div>

            <div
              class="actions d-flex justify-space-between align-center mt-md-6"
              :class="[`actions-position-${$vuetify.breakpoint.name}`]"
            >
              <div class="buttons d-flex justify-space-between align-centers">
                <!-- TODO EXTRACT FAVORITE BUTTON INTO A COMPONENT -->
                <v-btn
                  :icon="$vuetify.breakpoint.smAndDown"
                  small
                  :text="$vuetify.breakpoint.mdAndUp"
                  class="cart-item-action favorite mr-1 mr-md-0"
                >
                  <v-icon color="red">{{ icons.favorite }}</v-icon>
                  <span
                    v-if="$vuetify.breakpoint.mdAndUp"
                    class="text-capitalize text-caption black--text ml-1"
                  >
                    {{ $t('cart.add_to_favorites') }}
                  </span>
                </v-btn>

                <v-btn
                  small
                  :icon="$vuetify.breakpoint.smAndDown"
                  :text="$vuetify.breakpoint.mdAndUp"
                  class="cart-item-action delete mr-1 mr-md-2"
                >
                  <v-icon>{{ icons.delete }}</v-icon>
                  <span
                    v-if="$vuetify.breakpoint.mdAndUp"
                    class="text-capitalize text-caption ml-1"
                  >
                    {{ $t('cart.remove_from_cart') }}
                  </span>
                </v-btn>
              </div>

              <div
                v-if="$vuetify.breakpoint.smAndDown"
                class="d-flex justify-center align-center quantity-sm-and-down"
              >
                {{ quantity }}
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <v-col
        v-if="$vuetify.breakpoint.mdAndUp"
        class="quantity justify-center align-center"
        cols="auto"
        md="1"
      >
        <!--TODO use an input component -->
        <div class="d-flex justify-center align-center height-fill-parent">
          {{ quantity }}
        </div>
      </v-col>

      <v-col
        v-if="$vuetify.breakpoint.mdAndUp"
        class="unit-price justify-center align-center"
        cols="auto"
        md="2"
      >
        <!-- TODO use Int.numberformat currency -->
        <div class="d-flex justify-center align-center height-fill-parent">
          {{ new Intl.NumberFormat('en-US').format(cartItem.product.price) }}
        </div>
      </v-col>

      <v-col
        v-if="$vuetify.breakpoint.mdAndUp"
        class="total justify-center align-center"
        cols="auto"
        md="2"
      >
        <!-- TODO use Int.numberformat currency -->
        <div class="d-flex justify-center align-center height-fill-parent">
          {{ new Intl.NumberFormat('en-US').format(totalCost) }}
        </div>
      </v-col>
    </v-row>

    <v-divider inset class="divider mt-3 mt-sm-5 mt-md-0" />
  </div>
</template>

<script lang="ts">
import { mdiHeart, mdiPencil, mdiTrashCanOutline } from '@mdi/js'
import Vue, { PropOptions } from 'vue'
import { CartItem } from '~/types/types'

export default Vue.extend({
  props: {
    cartItem: {
      type: Object,
      required: true,
    } as PropOptions<CartItem>,
  },

  data() {
    return {
      quantity: this.cartItem.quantity,
      icons: {
        edit: mdiPencil,
        favorite: mdiHeart,
        delete: mdiTrashCanOutline,
      },
    }
  },

  computed: {
    totalCost(): number {
      return this.quantity * this.cartItem.product.price
    },

    showEditButton(): boolean {
      return this.cartItem.configurableOptions.length > 0
    },
  },
})
</script>

<style lang="scss" scoped>
.cart-item-row-container {
  .product-summary-cell {
    height: max-content;

    .product-summary {
      position: relative;

      .actions-position-sm-and-down {
        position: absolute;
        left: 2vw;
        bottom: -5vw;
        width: 100%;
      }
      .actions-position-sm {
        position: absolute;
        left: 2vw;
        bottom: -4vw;
        width: 100%;
      }

      .actions-position-xs {
        position: absolute;
        left: 2vw;
        bottom: -5vw;
        width: 100%;
      }
    }

    .configurables-section {
      width: 100%;
    }
  }
}

.height-fill-parent {
  height: 100%;
}

.divider {
  border-color: #a09a9ab0;
  border-width: 2px 0 0 0;
}
</style>

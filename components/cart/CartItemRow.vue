<template>
  <tr class="cart-item-row-container">
    <td class="product-summary-cell">
      <div class="product-summary d-flex justify-start align-start my-9">
        <div class="thumbnail mr-6">
          <v-img
            :src="cartItem.product.thumbnails[0]"
            width="120"
            height="120"
          />
        </div>

        <div class="product-info d-flex flex-column justify-start align-start">
          <h5 class="title text-h6 text-capitalize mb-2">
            {{ cartItem.product.title }}
          </h5>

          <div class="configurables-section">
            <v-container class="pa-0">
              <v-row class="table-row" dense>
                <v-col
                  v-for="(configurableOption,
                  i) in cartItem.configurableOptions"
                  :key="i"
                  cols="6"
                >
                  <div class="configurable d-flex justify-start align-center">
                    <span class="mr-2">
                      {{
                        `${configurableOption.configurable.configurableType}: `
                      }}
                    </span>
                    <v-img
                      :src="configurableOption.thumbnailUrl"
                      width="20"
                      max-width="20"
                      height="20"
                      max-height="20"
                    />
                    <span class="ml-2">{{ configurableOption.name }}</span>
                  </div>
                </v-col>
                <v-spacer />
              </v-row>
            </v-container>
          </div>

          <div class="edit-btn ml-n3">
            <v-btn small text color="primary">
              <span class="text-decoration-underline text-caption mr-1">
                {{ $t('cart.edit') }}
              </span>
              <v-icon small>{{ icons.edit }}</v-icon>
            </v-btn>
          </div>

          <div class="actions d-flex justify-space-between align-center mt-6">
            <v-btn small text class="cart-item-action favorite">
              <v-icon>{{ icons.favorite }}</v-icon>
              <span class="text-capitalize text-caption">
                {{ $t('cart.add_to_favorites') }}
              </span>
            </v-btn>

            <v-btn small text class="cart-item-action delete">
              <v-icon>{{ icons.delete }}</v-icon>
              <span class="text-capitalize text-caption">
                {{ $t('cart.remove_from_cart') }}
              </span>
            </v-btn>
          </div>
        </div>
      </div>
    </td>

    <td class="quantity">
      <!--TODO use an input component -->
      <div class="d-flex justify-center align-center">{{ quantity }}</div>
    </td>

    <td class="unit-price">
      <!-- TODO use Int.numberformat currency -->
      <div class="d-flex justify-center align-center">
        {{ new Intl.NumberFormat('en-US').format(cartItem.product.price) }}
      </div>
    </td>

    <td class="total">
      <!-- TODO use Int.numberformat currency -->
      <div class="d-flex justify-center align-center">
        {{ new Intl.NumberFormat('en-US').format(totalCost) }}
      </div>
    </td>
  </tr>
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
  },
})
</script>

<style lang="scss" scoped>
.cart-item-row-container {
  .product-summary-cell {
    height: max-content;

    .configurables-section {
      width: 100%;
    }
  }
}
</style>

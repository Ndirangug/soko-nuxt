<template>
  <div class="product-summary-container d-flex justify-start align-start">
    <div class="thumbnail mr-4 mr-md-6">
      <v-img
        :src="product.thumbnails[0]"
        :width="$vuetify.breakpoint.mdAndUp ? 120 : 90"
        :height="$vuetify.breakpoint.mdAndUp ? 120 : 90"
      />
    </div>

    <div class="product-info d-flex flex-column justify-start align-start">
      <h6
        class="title text-body-1 text-md-h6 font-weight-medium text-capitalize mb-2"
      >
        <nuxt-link
          class="text-decoration-none black--text"
          :to="localePath(`/product-details?id=${product.productID}`)"
        >
          {{ product.title }}
        </nuxt-link>
      </h6>

      <div class="configurables-section">
        <CartItemConfigurables :configurable-options="configurableOptions" />
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
        class="price-sm-and-down d-flex justify-start align-center mt-2 text-subtitle-1 font-weight-medium"
      >
        {{ $t('currency') }}
        {{ new Intl.NumberFormat('en-US').format(totalCost) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiPencil } from '@mdi/js'
import Vue, { PropOptions, PropType } from 'vue'
import { ConfigurableOption, Product } from '~/types/types'

export default Vue.extend({
  props: {
    product: {
      type: Object,
      required: true,
    } as PropOptions<Product>,
    configurableOptions: {
      type: Array as PropType<Array<ConfigurableOption>>,
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        edit: mdiPencil,
      },
    }
  },
  computed: {
    showEditButton(): boolean {
      return this.configurableOptions.length > 0
    },
  },
})
</script>

<style lang="scss" scoped>
.configurables-section {
  width: 100%;
}

.price-sm-and-down {
  color: $green-primary;
}
</style>

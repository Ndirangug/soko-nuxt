<template>
  <div
    class="slider-row-container d-flex flex-column justify-center align-center"
  >
    <h3 class="text-capitalize text-h6 text-md-h5"></h3>
    <p class="pb-0 text-body-2 text-md-body-1"></p>

    <div class="products">
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-item
          v-for="(product, i) in products"
          :key="i"
          v-slot:default="{ toggle }"
          @click="toggle"
        >
          <ProductCard :product="product" />
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Product } from '~/types/types'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    products: {
      type: Array as PropType<Array<Product>>,
      required: true,
    },
  },

  data() {
    return {
      model: 0,
    }
  },
})
</script>

<style lang="scss" scoped></style>

<!-- eslint-disable vue/no-unused-vars --->
<template>
  <div
    class="slider-row-container d-flex flex-column justify-center align-center"
  >
    <h3
      class="title text-capitalize text-h6 text-md-h5 font-weight-medium mb-2 px-2 px-sm-1 px-md-0"
    >
      {{ title }}
    </h3>

    <slot name="description">
      <p
        class="description pb-0 text-body-2 text-md-body-1 px-2 px-sm-1 px-md-0"
      >
        {{ description }}
      </p>
    </slot>

    <div class="products px-0 px-md-8 px-lg-16">
      <v-slide-group
        v-if="loading"
        v-model="model"
        class="px-n1 pa-sm-4"
        center-active
        show-arrows
        :next-icon="icons.next"
        :prev-icon="icons.prev"
      >
        <v-slide-item
          v-for="i in 5"
          :key="i"
          v-slot:default="{ active, toggle }"
        >
          <v-skeleton-loader
            type="card"
            :class="{ active: active }"
            @click="toggle"
          />
        </v-slide-item>
      </v-slide-group>

      <v-slide-group
        v-else
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="(product, i) in products"
          :key="i"
          v-slot:default="{ active, toggle }"
        >
          <ProductCard
            :product="product"
            :class="{ active: active }"
            @click="toggle"
          />
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
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
      required: false,
      default: '',
    },
    products: {
      type: Array as PropType<Array<Product>>,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      model: 0,
      icons: {
        prev: mdiChevronLeft,
        next: mdiChevronRight,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.description {
  &:first-letter {
    text-transform: uppercase;
  }
}

.products {
  max-width: 100%;
}
</style>

<style lang="scss">
.v-slide-group__next,
.v-slide-group__prev {
  background-color: transparent !important;

  i {
    border-radius: 50% !important;
    padding: 0.7vw !important;

    &:hover {
      background-color: $grey-background !important;
    }

    &:active {
      background-color: $grey-background-accent !important;
    }
  }
}
</style>

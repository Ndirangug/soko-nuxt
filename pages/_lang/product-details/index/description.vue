<template>
  <div
    id="product-description"
    class="product-description-container pt-3 pt-md-4"
  >
    <v-skeleton-loader v-if="$apollo.loading" type="image" />
    <div v-else>
      <div class="description-text">
        <DescriptionText :text="productDetails.descriptionText" />
      </div>

      <div class="banner">
        <LongBanner :images="productDetails.descriptionDocument" />
      </div>

      <div class="detail-tables mt-6">
        <DetailsTables
          :key-features="productDetails.keyFeatures"
          :specifications="specifications"
          :package-contents="productDetails.packageContents"
        />
      </div>

      <div class="demo-preview mt-8 mb-2">
        <PanoramicPreview
          :preview-url="productDetails.demoPreviewUrl"
          :demo-url="productDetails.demoUrl"
        />
      </div>

      <v-responsive
        class="buttons mt-2 px-sm-16 py-1 mx-auto"
        :width="buttonsContainerWidth"
      >
        <v-btn rounded large class="text-capitalize px-sm-8 mx-1 my-2">
          <v-icon>{{ icons.demo }}</v-icon>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <!-- <span v-html="$t('productDetails.enter3d')"> </span> -->
          {{ $t('productDetails.enter3d') }}
        </v-btn>

        <v-btn
          rounded
          large
          class="text-capitalize px-sm-8 mx-1 my-2"
          @click="addToCart()"
        >
          <v-icon>{{ icons.addToCart }}</v-icon>
          {{ $t('productDetails.add_to_cart') }}
        </v-btn>
      </v-responsive>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiCartPlus, mdiRulerSquareCompass } from '@mdi/js'

import { ProductDescription } from '~/apollo/queries/product_description.graphql'
import { ProductDescriptionQueryVariables } from '~/types/types'
import { EventBus } from '~/utils/event-bus'
import { Specifications } from '~/types/ui'

export default Vue.extend({
  props: {
    // TODO: GET THESE PASSED HERE
    // configurables: {
    //   type: Object,
    //   required: true,
    // },
    productId: {
      type: String,
      required: true,
    },
  },
  // @ts-ignore
  apollo: {
    productDetails: {
      query: ProductDescription,
      prefetch: true,
      variables(): ProductDescriptionQueryVariables {
        return {
          // @ts-ignore
          productID: parseInt(this.productId),
        }
      },
    },
  },
  data() {
    return {
      icons: {
        demo: mdiRulerSquareCompass,
        addToCart: mdiCartPlus,
      },
      configurables: {},
    }
  },

  computed: {
    buttonsContainerWidth(): string {
      let width = ''

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          width = '50%'
          break
        case 'lg':
          width = '55%'
          break
        case 'md':
          width = '70%'
          break
        case 'sm':
          width = '80%'
          break
        case 'xs':
          width = '90%'
          break
        default:
          break
      }

      return width
    },

    specifications(): Specifications {
      const mass = `${
        // @ts-ignore
        this.productDetails.mass.value
        // @ts-ignore
      } ${this.productDetails.mass.units.toLowerCase()}`

      // @ts-ignore
      const dimensions = `${this.productDetails.dimensions.length} x 
      ${
        // @ts-ignore
        this.productDetails.dimensions.width
      } x ${
        // @ts-ignore
        this.productDetails.dimensions.height
      } (${
        // @ts-ignore
        this.productDetails.dimensions.units.toLowerCase()
      })`

      return {
        // @ts-ignore
        ...this.configurables,
        // @ts-ignore
        mass,
        // @ts-ignore
        dimensions,
      }
    },
  },

  mounted() {
    // @ts-ignore
    EventBus.$on('update:configurable', this.onUpdateConfigurables)
  },

  methods: {
    onUpdateConfigurables(configurable: { [key: string]: string }) {
      // @ts-ignore
      this.configurables = {
        // @ts-ignore
        ...this.configurables,
        // @ts-ignore
        ...configurable,
      }
    },
    addToCart() {
      EventBus.$emit('add-to-cart')
    },
  },
})
</script>

<style lang="scss">
.buttons {
  .v-responsive__content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }
}
</style>

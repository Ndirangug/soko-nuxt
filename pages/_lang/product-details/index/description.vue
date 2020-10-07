<template>
  <div
    id="product-description"
    class="product-description-container pt-3 pt-md-4"
  >
    <v-skeleton-loader v-if="$apollo.loading" type="image" />
    <div v-else>
      <div class="description-text text-body-2 text-md-body-1">
        <p>{{ productDetails.descriptionText }}</p>
      </div>
      <div class="banner">
        <v-img
          v-for="(url, i) in productDetails.descriptionDocument"
          :key="i"
          :src="url"
        />
      </div>

      <div class="detail-tables mt-6">
        <div
          class="tables-container d-flex flex-column flex-md-row flex-md-wrap"
        >
          <div class="key-features my-4">
            <v-simple-table
              class="table px-sm-4"
              :class="{ 'table-xs': $vuetify.breakpoint.xs }"
            >
              <thead>
                <tr>
                  <th class="text-uppercase text-subtitle-2 font-weight-medium">
                    {{ $t('productDetails.key_features') }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li
                        v-for="(feature, i) in productDetails.keyFeatures"
                        :key="i"
                        class="py-2"
                      >
                        {{ feature }}
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>

          <div class="specifications mx-md-2 mx-lg-8 my-4">
            <v-simple-table
              class="table px-sm-4"
              :class="{ 'table-xs': $vuetify.breakpoint.xs }"
            >
              <thead>
                <tr>
                  <th
                    colspan="2"
                    class="text-uppercase text-subtitle-2 font-weight-medium"
                  >
                    {{ $t('productDetails.specifications') }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(spec, i) in Object.keys(specifications)" :key="i">
                  <td>{{ spec }}</td>
                  <td>{{ specifications[spec] }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>

          <div class="package-contents my-4">
            <v-simple-table
              class="table px-sm-4"
              :class="{ 'table-xs': $vuetify.breakpoint.xs }"
            >
              <thead>
                <tr>
                  <th
                    colspan="2"
                    class="text-uppercase text-subtitle-2 font-weight-medium"
                  >
                    {{ $t('productDetails.package_contents') }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(packageContent, i) in packageContents" :key="i">
                  <td>
                    {{ packageContent.quantity }}x {{ packageContent.item }}
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
        </div>
      </div>

      <div class="demo-preview"></div>
      <v-responsive
        class="buttons mt-10 px-sm-16 py-1 mx-auto"
        :width="buttonsContainerWidth"
      >
        <v-btn rounded large class="text-capitalize px-sm-8 my-2">
          <v-icon>{{ icons.demo }}</v-icon>
          {{ $t('productDetails.enter_design_mode') }}
        </v-btn>
        <v-btn rounded large class="text-capitalize px-sm-8 my-2">
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

    // TODO GET THESE FROM PROPS
    configurables() {
      return { color: 'red', material: 'fabric' }
    },

    specifications() {
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

    packageContents() {
      return [
        {
          item: 'couch',
          quantity: 3,
        },
        {
          item: 'pillow',
          quantity: 6,
        },
        {
          item: 'footstool',
          quantity: 1,
        },
      ]
    },
  },
})
</script>

<style lang="scss" scoped>
.product-description-container {
  .detail-tables {
    .table {
      background-color: $grey-background;
      border: $grey-text-dark 0.1em solid;
      border-radius: 2vw;
    }
  }
}

.table-xs {
  border-radius: 5vw;
}
</style>

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

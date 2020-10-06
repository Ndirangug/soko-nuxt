<template>
  <div id="product-description" class="product-description-container">
    <div class="short-description">
      <p>{{ shortDescription }}</p>
    </div>
    <div class="banner">
      <v-img
        v-for="(bannerImage, i) in bannerImages"
        :key="i"
        :src="bannerImage"
      />
    </div>

    <div class="detail-tables">
      <div class="tables-container d-flex flex-column flex-md-row flex-md-wrap">
        <div class="key-features my-4">
          <v-simple-table>
            <thead>
              <th class="text-capitalize">key features</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ol>
                    <li v-for="(feature, i) in features" :key="i">
                      {{ feature }}
                    </li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>

        <div class="specifications mx-2 my-4">
          <v-simple-table>
            <thead>
              <th colspan="2" class="text-capitalize">specifications</th>
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
          <v-simple-table>
            <thead>
              <th colspan="2" class="text-capitalize">package contents</th>
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
      <v-btn rounded large class="text-capitalize px-sm-8">
        <v-icon>{{ icons.demo }}</v-icon>
        enter design mode
      </v-btn>
      <v-btn rounded large class="text-capitalize px-sm-8">
        <v-icon>{{ icons.addToCart }}</v-icon>
        add to cart
      </v-btn>
    </v-responsive>
  </div>
</template>

<script lang="ts">
import { mdiCartPlus, mdiRulerSquareCompass } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  props: {
    bannerImages: {
      type: Array,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    demoUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        demo: mdiRulerSquareCompass,
        addToCart: mdiCartPlus,
      },
      bannerUrl: '/product-details/banner1.jpg',
      features: [
        'harum corporis optio quibusdam maiores et error, ',
        'iste assumenda quis eligendi in!',
        'Lorem ipsum, dolor sit amet consectetur adipisicing',
        ' elit. Deleniti ut',
        'adipisci sapiente alias enim voluptates voluptatum eum nulla',
      ],
      specifications: {
        fabric: 'velvet',
        material: 'wood',
        color: 'brown',
        weight: '2kg',
        dimensions: '140 * 40 * 60',
      },
      packageContents: [
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
      ],
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

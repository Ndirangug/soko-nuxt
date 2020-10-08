<template>
  <div
    class="tables-container d-flex flex-column justify-center align-center flex-md-row flex-md-wrap"
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
                <li v-for="(feature, i) in keyFeatures" :key="i" class="py-2">
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
            <td>{{ packageContent.quantity }}x {{ packageContent.item }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Specifications } from '~/types/ui'

export default Vue.extend({
  props: {
    keyFeatures: {
      type: Array,
      required: true,
    },

    specifications: {
      type: Object,
      required: true,
    } as PropOptions<Specifications>,

    packageContents: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.tables-container {
  .table {
    background-color: $grey-background;
    border: $grey-text-dark 0.1em solid;
    border-radius: 2vw;
  }
}

.table-xs {
  border-radius: 5vw;
}
</style>

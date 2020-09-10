<template>
  <div>
    <v-select
      v-model="sortBy"
      dense
      :items="sortOptions"
      :placeholder="$t('products.browse_products.sort_by')"
    >
      <template v-slot:label>
        <div class="text-capitalize">
          {{ $t('products.browse_products.sort_by') }}
        </div>
      </template>

      <template v-slot:item="{ item }">
        <!-- <v-list-item-icon class="grey--text text--darker-1">
              <v-icon small>{{ item.icon }}</v-icon>
            </v-list-item-icon> -->
        <v-list-item-content>
          <v-list-item-title
            class="grey--text text--darker-1 font-weight-normal"
          >
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </template>

      <template v-slot:selection="{ item }">
        <div class="black--text text--darker-1">{{ item.title }}</div>
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import {
  mdiGroup,
  mdiSortAscending,
  mdiSortCalendarDescending,
  mdiSortDescending,
} from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      sortBy: null,
      sortOptions: [
        {
          icon: mdiGroup,
          title: this.$t('products.browse_products.popularity'),
        },
        {
          icon: mdiSortAscending,
          title: `${this.$t('products.browse_products.price')}: ${this.$t(
            'products.browse_products.low_to_high'
          )}`,
        },
        {
          icon: mdiSortDescending,
          title: `${this.$t('products.browse_products.price')}: ${this.$t(
            'products.browse_products.high_to_low'
          )}`,
        },
        {
          icon: mdiSortCalendarDescending,
          title: this.$t('products.browse_products.newest_first'),
        },
      ],
    }
  },

  watch: {
    sortBy(sortOption) {
      this.$emit('sort-changed', sortOption.title)
    },
  },
})
</script>

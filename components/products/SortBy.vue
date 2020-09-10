<template>
  <div>
    <v-select
      v-if="screenSize !== ScreenSize.PHONE"
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

    <v-menu v-else transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon small class="black--text" v-bind="attrs" v-on="on">
          <v-icon large>{{ icons.more }}</v-icon>
        </v-btn>
      </template>
      <v-list dense nav>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in sortOptions"
            :key="i"
            @click="sortBy = item"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import {
  mdiDotsVertical,
  mdiGroup,
  mdiSortAscending,
  mdiSortCalendarDescending,
  mdiSortDescending,
} from '@mdi/js'
import Vue from 'vue'
import { ScreenSizeMixin } from '~/components/mixins/ScreenSize'

export default Vue.extend({
  mixins: [ScreenSizeMixin],
  data() {
    return {
      sortBy: '',
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
      icons: {
        more: mdiDotsVertical,
      },
    }
  },

  watch: {
    sortBy(sortOption) {
      this.$emit('sort-changed', sortOption)
    },
  },
})
</script>

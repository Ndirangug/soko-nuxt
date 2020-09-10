// TODO ADD VALIDATION FOR MAX LENGTH
<template>
  <v-container fluid class="search-box-container">
    <v-row align="center">
      <v-select
        v-model="search_category"
        dense
        :items="categories"
        outlined
        class="select"
        :placeholder="$t('products.browse_products.category')"
        rounded
      >
      </v-select>

      <v-combobox
        v-model="search_tags"
        :items="items[search_category]"
        :search-input.sync="search"
        hide-selected
        :placeholder="$t('products.browse_products.search_anything')"
        multiple
        persistent-hint
        small-chips
        deletable-chips
        clearable
        outlined
        dense
        rounded
        class="combobox"
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text text--darker-1 font-weight-normal"
              >
                {{ search }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

        <template v-slot:item="{ item }">
          <v-list-item-content>
            <v-list-item-title
              class="grey--text text--darker-1 font-weight-normal"
            >
              {{ item }}
            </v-list-item-title>
          </v-list-item-content>
        </template>
        <v-icon slot="append">{{ icons.search }}</v-icon>
      </v-combobox>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiMagnify } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    // prolly suggestions to be loaded from ml algorithm
    items: {
      living_room: [
        'floating shelves',
        'paintings',
        'canvas',
        'maasai painting',
      ],
      kitchen: ['marble countertop', 'earthenware', 'faucets'],
      furniture: ['leather sofa', 'mahogany table', 'stool', 'coffee table'],
    },
    search_category_state: '',
    search_tags: [],
    search: null,
    max_input_reached: false,
    icons: {
      search: mdiMagnify,
      arrowUp: mdiChevronUp,
      arrowDown: mdiChevronDown,
    },

    get search_category(): string {
      return this.search_category_state
    },
    // replace " " with "_"  and transform to lowercase so that it can be used to index into items object
    set search_category(value: string) {
      this.search_category_state = value.replace(' ', '_').toLowerCase().trim()
    },
  }),
  computed: {
    error_messages() {
      return this.$t('products.browse_products.max_five_tags')
    },
    categories() {
      return Object.keys(this.items).map((value) => value.replace('_', ' '))
    },
  },
  watch: {
    search_tags(val: string[]) {
      if (val.length > 5) {
        this.max_input_reached = true
        this.$nextTick(() => this.search_tags.pop())
      } else {
        this.max_input_reached = false
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.search-box-container {
  margin: auto;
  height: auto;

  .select {
    width: 30%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .combobox {
    width: 70%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>

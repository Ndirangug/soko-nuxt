// TODO ADD VALIDATION FOR MAX LENGTH
<template>
  <v-container fluid class="search-box-container">
    <v-combobox
      v-model="model"
      :items="items"
      :search-input.sync="search"
      hide-selected
      :placeholder="$t('products.browse_products.search_anything')"
      multiple
      persistent-hint
      small-chips
      deletable-chips
      clearable
      outlined
      filled
      dense
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              {{ search }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-icon slot="append">{{ icons.search }}</v-icon>
    </v-combobox>
  </v-container>
</template>

<script lang="ts">
import { mdiMagnify } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    // prolly suggestions to be loaded from ml algorithm
    items: ['floating shelves', 'paintings', 'canvas', 'maasai painting'],
    model: [],
    search: null,
    max_input_reached: false,
    icons: {
      search: mdiMagnify,
    },
  }),
  computed: {
    error_messages() {
      return this.$t('products.browse_products.max_five_tags')
    },
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.max_input_reached = true
        this.$nextTick(() => this.model.pop())
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
}
</style>

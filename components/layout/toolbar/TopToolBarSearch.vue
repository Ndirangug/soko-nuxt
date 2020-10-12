<template>
  <div class="toolbar-search-container d-flex">
    <div
      v-show="showSearch"
      class="search-input"
      :class="{ 'position-relative': $vuetify.breakpoint.smAndDown }"
    >
      <v-text-field />
    </div>

    <v-btn
      icon
      :x-large="$vuetify.breakpoint.mdAndUp"
      :class="{ 'white--text': dark, 'black--text': !dark }"
      @click="onSearchIconClick"
    >
      <v-icon :dark="dark" large>{{ icons.search }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { mdiMagnify } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        search: mdiMagnify,
      },
      showSearch: false,
    }
  },

  methods: {
    onSearchIconClick() {
      this.showSearch = !this.showSearch
    },
  },
})
</script>

<style lang="scss" scoped>
.position-relative {
  position: relative;
  top: 50px;
  right: 0;
  z-index: 2;
  background-color: $grey-text-dark;
}
</style>

<template>
  <v-icon
    v-if="drawerOpenState"
    :class="{ 'white--text': dark, 'black--text': !dark }"
    x-large
    >{{ icons.menuOpen }}</v-icon
  >
  <v-icon
    v-else
    :class="{ 'white--text': dark, 'black--text': !dark }"
    x-large
    >{{ icons.menu }}</v-icon
  >
</template>

<script lang="ts">
import { mdiClose, mdiMenu } from '@mdi/js'
import Vue from 'vue'
import { uiStore } from '~/store'
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
        menu: mdiMenu,
        menuOpen: mdiClose,
      },
    }
  },

  computed: {
    drawerOpenState() {
      return uiStore.isNavDrawerOpen
    },
  },
})
</script>

<template>
  <div class="root-container">
    <v-toolbar
      :dark="dark"
      :dense="$vuetify.breakpoint.smAndDown"
      class="the-toolbar"
    >
      <v-app-bar-nav-icon
        :dark="dark"
        :class="{ 'white--text': dark, 'black--text': !dark }"
        @click="toggleNavDrawer"
      >
        <ToolBarMenuIcon :dark="dark" />
      </v-app-bar-nav-icon>

      <v-toolbar-title
        class="toolbar-title font-weight-bold text-uppercase"
        :class="{ 'ml-n3': $vuetify.breakpoint.smAndDown }"
      >
        <GreenWhiteLogo :dark="dark" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <TopToolBarSearch class="ml-4 mr-n1" :dark="dark" />

      <!--  ***  my account dropown *** -->
      <MyAccountDropdown :dark="dark" />

      <!--  ***  cart button *** -->
      <ToolBarCartIcon
        :class="{ 'mr-n2': $vuetify.breakpoint.xs }"
        :dark="dark"
      />
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { uiStore } from '~/store'

export default Vue.extend({
  data() {
    return {
      dark: true,
    }
  },

  computed: {
    drawerOpenState() {
      return uiStore.isNavDrawerOpen
    },
  },
  methods: {
    toggleNavDrawer() {
      uiStore.toggleNavDrawer(!this.drawerOpenState)
    },
  },
})
</script>

<template>
  <div
    v-scroll="onScroll"
    class="category-toolbar"
    :class="{ 'position-fixed': isToolBarPositionFixed }"
  >
    <v-toolbar
      :dark="dark"
      class="the-toolbar"
      :dense="$vuetify.breakpoint.smAndDown"
      :style="{ 'background-color': dark ? 'grey' : '' }"
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
        :class="{ 'pl-0': $vuetify.breakpoint.smAndDown }"
      >
        {{ category }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!--  ***  my account dropown *** -->
      <MyAccountDropdown :dark="dark" />

      <ToolBarCartIcon
        :class="{ 'mr-n3': $vuetify.breakpoint.smAndDown }"
        :dark="dark"
      />
    </v-toolbar>
    <!-- navdrawer create eevent to control navdraweropening -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { uiStore } from '~/store'
export default Vue.extend({
  props: {
    category: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      documentOffsetTop: 0,
      isToolBarPositionFixed: false,
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
    onScroll(e: Event) {
      // @ts-ignore
      // eslint-disable-next-line prefer-const, prettier/prettier
      // @ts-ignore
      this.documentOffsetTop = e.target.scrollingElement.scrollTop
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        // @ts-ignore
        case 'xl':
          this.isToolBarPositionFixed = this.documentOffsetTop > 615
          break
        // @ts-ignore
        case 'lg':
          this.isToolBarPositionFixed = this.documentOffsetTop > 615
          break
        // @ts-ignore
        case 'md':
          this.isToolBarPositionFixed = this.documentOffsetTop > 615
          break
        // @ts-ignore
        case 'sm':
          this.isToolBarPositionFixed = this.documentOffsetTop > 630
          break
        // @ts-ignore
        case 'xs':
          this.isToolBarPositionFixed = this.documentOffsetTop > 600
          break
        default:
          // eslint-disable-next-line no-console
          console.warn('unable to determine screen size onScroll')
          // eslint-disable-next-line no-console
          console.warn(this.documentOffsetTop)
          break
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.category-toolbar {
  margin-bottom: 5vw;
  z-index: 2;

  .the-toolbar {
    padding: 0 2vw;
    background-color: $grey-background-transparent;
  }

  button {
    background-color: transparent;
  }
  .toolbar-button {
    margin: 0 1vw;
  }
}

.position-fixed {
  position: fixed !important;
  top: 0 !important;
  width: 100%;
  background-color: $grey-background;
}
</style>

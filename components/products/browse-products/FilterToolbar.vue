<template>
  <div
    v-scroll="onScroll"
    class="root-container"
    :class="{
      'position-fixed-hidden': isFilterToolBarFixedHidden,
      'toolbar-container-fixed-shown ': isFilterToolBarFixedShown,
    }"
  >
    <v-toolbar
      id="filter-toolbar"
      class="the-toolbar"
      :class="{
        'elevation-20 ': isFilterToolBarFixedShown,
        'toolbar-fixed-shown': isFilterToolBarFixedShown,
        'toolbar-fixed-hidden': isFilterToolBarFixedHidden,
      }"
    >
      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.mdAndUp"
        class="black--text filter-icon"
      >
        <!-- TODO PLACE in bottom navigation for phones -->
        <v-icon>{{ icons.filter }}</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title
        v-show="$vuetify.breakpoint.mdAndUp"
        class="toolbar-title font-weight-normal text-capitalize"
      >
        {{ $t('products.browse_products.filter') }}
      </v-toolbar-title>
      <v-divider
        v-show="$vuetify.breakpoint.mdAndUp"
        class="mx-4 font-weight-black"
        inset
        vertical
      ></v-divider>
      <SearchBar />
      <v-spacer v-show="$vuetify.breakpoint.mdAndUp"></v-spacer>

      <!-- TODO PLACE in bottom navigation for phones -->
      <!-- sort by -->
      <SortBy
        v-show="$vuetify.breakpoint.mdAndUp"
        id="sortby-dropdown"
        @sort-changed="sortBy = $event"
      />
    </v-toolbar>

    <!-- search FAB -->
    <v-fab-transition>
      <v-btn
        class="search-fab elevation-20 mt-2"
        :class="{ 'd-none': !isFilterToolBarFixedHidden }"
        fab
        absolute
        right
        color="primary"
        @click="isFilterToolBarFixedShown = !isFilterToolBarFixedShown"
      >
        <v-icon
          v-if="!isFilterToolBarFixedShown"
          :small="$vuetify.breakpoint.xs"
        >
          {{ icons.search }}
        </v-icon>
        <v-icon v-else :small="$vuetify.breakpoint.xs">
          {{ icons.cancel }}
        </v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script lang="ts">
import { mdiClose, mdiFilterMenu, mdiMagnify } from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      windowOffsetTop: 0,
      isFilterToolBarFixedHidden: false,
      isFilterToolBarFixedShown: false,
      sortBy: '',
      icons: {
        filter: mdiFilterMenu,
        search: mdiMagnify,
        cancel: mdiClose,
      },
    }
  },

  watch: {
    isFilterToolBarFixedHidden(isHidden) {
      if (!isHidden) {
        this.isFilterToolBarFixedShown = false
      }
    },
  },

  methods: {
    onScroll(e: Event) {
      // @ts-ignore
      // eslint-disable-next-line prefer-const, prettier/prettier
      // @ts-ignore
      this.windowOffsetTop = e.target.scrollingElement.scrollTop
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        // @ts-ignore
        case 'xl':
          this.isFilterToolBarFixedHidden = this.windowOffsetTop > 1040
          break
        // @ts-ignore
        case 'lg':
          this.isFilterToolBarFixedHidden = this.windowOffsetTop > 1040
          break
        // @ts-ignore
        case 'md':
          this.isFilterToolBarFixedHidden = this.windowOffsetTop > 1040
          break
        // @ts-ignore
        case 'sm':
          this.isFilterToolBarFixedHidden = this.windowOffsetTop > 950
          break
        // @ts-ignore
        case 'xs':
          this.isFilterToolBarFixedHidden = this.windowOffsetTop > 860
          break
        default:
          // eslint-disable-next-line no-console
          console.warn('unable to determine screen size onScroll')
          // eslint-disable-next-line no-console
          console.warn(this.windowOffsetTop)
          break
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.root-container {
  padding: 0 1vw;
  z-index: 2;

  .the-toolbar {
    padding: 0 1vw;
    border-radius: 50px;

    .toolbar-title {
      padding-left: 0 !important;
      font-size: 2vw;
      overflow: visible !important;
    }

    #sortby-dropdown {
      margin-left: 1vw;
      max-width: 180px;
      margin-top: 2vw;
    }
  }
}

.position-fixed-hidden {
  position: fixed !important;
  top: 20px !important;
  width: 100% !important;
}

.toolbar-container-fixed-shown {
  position: fixed !important;
  top: 90px !important;
  width: 100%;
}

.toolbar-fixed-shown {
  width: 90%;
  margin: auto;
  opacity: 1 !important;
}
.toolbar-fixed-hidden {
  width: 90%;
  margin: auto;
  opacity: 0;
}
</style>

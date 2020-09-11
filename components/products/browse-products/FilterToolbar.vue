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
        v-show="screenSize == ScreenSize.LARGE_SCREEN"
        class="black--text filter-icon"
      >
        <!-- TODO PLACE in bottom navigation for phones -->
        <v-icon>{{ icons.filter }}</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title
        v-show="screenSize == ScreenSize.LARGE_SCREEN"
        class="toolbar-title font-weight-normal text-capitalize"
      >
        {{ $t('products.browse_products.filter') }}
      </v-toolbar-title>
      <v-divider
        v-show="screenSize == ScreenSize.LARGE_SCREEN"
        class="mx-4 font-weight-black"
        inset
        vertical
      ></v-divider>
      <SearchBar />
      <v-spacer v-show="screenSize == ScreenSize.LARGE_SCREEN"></v-spacer>

      <!-- TODO PLACE in bottom navigation for phones -->
      <!-- sort by -->
      <SortBy
        v-show="screenSize == ScreenSize.LARGE_SCREEN"
        id="sortby-dropdown"
        @sort-changed="sortBy = $event"
      />
    </v-toolbar>

    <!-- search FAB -->
    <v-fab-transition>
      <v-btn
        class="search-fab elevation-20"
        :class="{ 'd-none': !isFilterToolBarFixedHidden }"
        fab
        absolute
        right
        color="primary"
        :small="screenSize == ScreenSize.PHONE"
        @click="isFilterToolBarFixedShown = !isFilterToolBarFixedShown"
      >
        <v-icon
          v-if="!isFilterToolBarFixedShown"
          :small="screenSize == ScreenSize.PHONE"
        >
          {{ icons.search }}
        </v-icon>
        <v-icon v-else :small="screenSize == ScreenSize.PHONE">
          {{ icons.cancel }}
        </v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script lang="ts">
import { mdiClose, mdiFilterMenu, mdiMagnify } from '@mdi/js'
import Vue from 'vue'
import { ScreenSizeMixin } from '~/components/mixins/ScreenSize'

export default Vue.extend({
  mixins: [ScreenSizeMixin],
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
      switch (this.screenSize) {
        // @ts-ignore
        case this.ScreenSize.LARGE_SCREEN:
          this.isFilterToolBarFixedHidden = this.windowOffsetTop > 1040
          break
        // @ts-ignore
        case this.ScreenSize.TABLET:
          this.isFilterToolBarFixedHidden = this.windowOffsetTop > 950
          break
        // @ts-ignore
        case this.ScreenSize.PHONE:
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
  opacity: 100% !important;
}
.toolbar-fixed-hidden {
  width: 90%;
  margin: auto;
  opacity: 0;
}
</style>

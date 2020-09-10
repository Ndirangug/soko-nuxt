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
      <v-app-bar-nav-icon class="black--text">
        <v-icon>{{ icons.filter }}</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title
        v-show="screenSize == ScreenSize.LARGE_SCREEN"
        class="toolbar-title font-weight-medium text-capitalize"
      >
        {{ $t('products.browse_products.filter') }}
      </v-toolbar-title>
      <v-divider
        v-show="screenSize !== ScreenSize.PHONE"
        class="mx-4 font-weight-black"
        inset
        vertical
      ></v-divider>
      <SearchBar />
      <v-spacer></v-spacer>

      <!-- sort by -->
      <div
        v-if="screenSize !== ScreenSize.PHONE"
        id="sortby-dropdown"
        class="d-flex justify-center align-center"
      >
        <SortBy @sort-changed="sortBy = $event" />
      </div>

      <!-- menu -->
      <v-btn v-else icon x-large class="black--text">
        <v-icon large>{{ icons.more }}</v-icon>
      </v-btn>
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
        @click="isFilterToolBarFixedShown = !isFilterToolBarFixedShown"
      >
        <v-icon v-if="!isFilterToolBarFixedShown">{{ icons.search }}</v-icon>
        <v-icon v-else>{{ icons.cancel }}</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script lang="ts">
import { mdiClose, mdiDotsVertical, mdiFilterMenu, mdiMagnify } from '@mdi/js'
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
        more: mdiDotsVertical,
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
          this.isFilterToolBarFixedHidden = this.windowOffsetTop > 970
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

    #sortby-dropdown {
      margin-left: 1vw;
      max-width: 180px;
      margin-top: 2vw;
      .sortby-btn {
      }
    }
  }
}

.position-fixed-hidden {
  position: fixed !important;
  top: 20px !important;
  width: 100% !important;
  opacity: 60%;
}

.toolbar-container-fixed-shown {
  position: fixed !important;
  top: 90px !important;
  width: 100%;
  opacity: 100%;
}

.toolbar-fixed-shown {
  width: 90%;
  margin: auto;
  border-radius: 50px;
}
.toolbar-fixed-hidden {
  width: 90%;
  margin: auto;
  border-radius: 50px;
}
</style>

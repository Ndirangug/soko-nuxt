<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    hide-overlay
    class="nav-drawer"
  >
    <v-list-item>
      <v-list-item-icon class="back-button">
        <v-btn icon @click="drawer = false">
          <v-icon>{{ icons.backArrow }}</v-icon>
        </v-btn>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="text-capitalize font-weight-bold">
          {{ $t('navigation.shop_by_category') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-capitalize font-weight-bold">
          {{ $t('navigation.rooms.title') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list dense>
      <v-list-item
        v-for="(value, key) in $t('navigation.rooms')"
        :key="key"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ icons.rooms[key] }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-capitalize">
            {{ value }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-capitalize font-weight-bold">
          {{ $t('navigation.specifics.title') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list dense>
      <v-list-item
        v-for="(value, key) in $t('navigation.specifics')"
        :key="key"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ icons.specifics[key] }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-capitalize">
            {{ value }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiHistory,
  mdiHeart,
  mdiAccountSettings,
  mdiChat,
  mdiPackage,
  mdiMapCheck,
  mdiFaceProfile,
  mdiSofa,
  mdiShower,
  mdiFood,
  mdiCounter,
  mdiToilet,
  mdiFlower,
  mdiFlowerTulip,
  mdiWall,
  mdiFlowerPoppy,
  mdiHomeFloor0,
  mdiRug,
  mdiTableFurniture,
  mdiWaterBoiler,
  mdiStore,
  mdiBookshelf,
  mdiArrowLeft,
} from '@mdi/js'
import { uiStore } from '~/store'
export default Vue.extend({
  data() {
    return {
      drawer: false,
      items: [
        {
          title: this.$t('products.profile'),
          icon: mdiFaceProfile,
          route: 'overview',
        },
        {
          title: this.$t('products.track_my_order'),
          icon: mdiMapCheck,
          route: 'orders',
        },
        {
          title: this.$t('products.orders'),
          icon: mdiPackage,
          route: 'orders',
        },
        {
          title: this.$t('products.messages'),
          icon: mdiChat,
          route: 'messages',
        },
        {
          title: this.$t('products.account_settings'),
          icon: mdiAccountSettings,
          route: 'overview',
        },
        {
          title: this.$t('products.recently_viewed'),
          icon: mdiHistory,
          route: 'myactivity',
        },
        {
          title: this.$t('products.saved_items'),
          icon: mdiHeart,
          route: 'myactivity',
        },
      ],
      // keys to the icons object should match the keys in the internationalization file's navigation object
      icons: {
        rooms: {
          living_room: mdiSofa,
          bathroom: mdiShower,
          dining_room: mdiFood,
          kitchen: mdiCounter,
          washroom: mdiToilet,
          balcony: mdiFlower,
          porch: mdiFlowerTulip,
        },
        specifics: {
          for_your_wall: mdiWall,
          fresh_flowers: mdiFlowerPoppy,
          flooring: mdiHomeFloor0,
          carpets_and_rugs: mdiRug,
          furniture: mdiTableFurniture,
          kitchen_fittings: mdiWaterBoiler,
          storage_units: mdiStore,
          floating_shelves: mdiBookshelf,
        },
        backArrow: mdiArrowLeft,
      },
    }
  },

  computed: {
    drawerOpenState() {
      return uiStore.isNavDrawerOpen
    },
  },

  watch: {
    drawer(isOpen: boolean) {
      uiStore.toggleNavDrawer(isOpen)
    },
    drawerOpenState() {
      this.drawer = this.drawerOpenState
    },
  },
})
</script>

<style lang="scss" scoped>
.nav-drawer {
  position: fixed;
  z-index: 3;

  .back-button {
    margin-right: 1vw;
  }

  .v-list {
    .v-list-item:first-of-type {
      display: none;

      &:hover {
        background-color: none;
      }
      .v-list-item__icon {
        display: none;
      }
      .v-list-item__content {
        .v-list-item__title {
          font-weight: 600;
        }
      }
    }
  }
}
</style>

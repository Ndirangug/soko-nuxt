// TODO css to customize navdrawers subtitle behavior
<template>
  <v-navigation-drawer
    v-model="drawerLocal"
    :absolute="false"
    temporary
    hide-overlay
    class="nav-drawer"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-capitalize font-weight-bold">
          {{ $t('navigation.shop_by_category') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

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
} from '@mdi/js'
export default Vue.extend({
  props: {
    drawer: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
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
      },
    }
  },

  computed: {
    drawerLocal() {
      return this.drawer
    },
  },
})
</script>

<style lang="scss" scoped>
.nav-drawer {
  margin-left: 2vw;
  margin-top: -2vw;
}
</style>

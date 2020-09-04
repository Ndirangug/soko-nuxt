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
          {{ $t('navdrawer.shop_by_category') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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

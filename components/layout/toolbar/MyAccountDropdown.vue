<template>
  <div class="toolbar-button d-flex justify-center align-center mx-0">
    <v-menu transition="slide-y-transition" bottom>
      <template
        v-slot:activator="{ on, attrs }"
        class="d-flex justify-center align-center"
      >
        <v-btn
          :dark="dark"
          icon
          :x-large="$vuetify.breakpoint.mdAndUp"
          v-bind="attrs"
          :class="{ 'white--text': dark, 'black--text': !dark }"
          v-on="on"
        >
          <v-icon large>
            {{ icons.myAccount }}
          </v-icon>
        </v-btn>
        <h4
          v-show="$vuetify.breakpoint.smAndUp"
          class="text-capitalize"
          :class="{ 'white--text': dark, 'black--text': !dark }"
        >
          {{ $t('products.my_account') }}
        </h4>
      </template>
      <v-list dense nav>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in my_account_dropdown"
            :key="i"
            @click.stop
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link
                  class="text-capitalize text-decoration-none grey--text text--darken-1"
                  :to="localePath(`myaccount-${item.route}`)"
                >
                  {{ item.title }}
                </nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import {
  mdiAccountCircle,
  mdiAccountSettings,
  mdiChat,
  mdiFaceProfile,
  mdiHeart,
  mdiHistory,
  mdiMapCheck,
  mdiPackage,
} from '@mdi/js'
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
        myAccount: mdiAccountCircle,
      },
      my_account_dropdown: [
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
})
</script>

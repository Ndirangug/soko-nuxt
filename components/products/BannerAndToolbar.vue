<!-- TODO split this further into separate components,? -->
<template>
  <div class="container-top" :style="bannerImage">
    <!-- back arrow and logo -->
    <div class="top-left d-flex">
      <v-btn icon x-large left>
        <v-icon large color="white">{{ icons.backArrow }}</v-icon>
      </v-btn>
      <GreenWhiteLogo />
    </div>

    <!-- ------ toolbar   ---------- -->
    <div class="category-toolbar">
      <v-toolbar class="the-toolbar">
        <v-app-bar-nav-icon class="black--text" @click.stop="drawer = !drawer">
          <v-icon v-if="drawer" x-large>{{ icons.menuOpen }}</v-icon>
          <v-icon v-else x-large>{{ icons.menu }}</v-icon>
        </v-app-bar-nav-icon>

        <v-toolbar-title class="toolbar-title font-weight-bold text-uppercase">
          {{ category }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!--  ***  my account dropown *** -->
        <div class="toolbar-button d-flex justify-center align-center">
          <v-menu transition="slide-y-transition" bottom>
            <template
              v-slot:activator="{ on, attrs }"
              class="d-flex justify-center align-center"
            >
              <v-btn icon x-large class="black--text" v-bind="attrs" v-on="on">
                <v-icon large>{{ icons.myAccount }}</v-icon>
              </v-btn>
              <h4 v-show="!isPhone" class="text-capitalize black--text">
                {{ $t('products.my_account') }}
              </h4>
            </template>
            <v-list dense :nav="nav">
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

        <!--  ***  cart button *** -->
        <div class="toolbar-button d-flex justify-center align-center">
          <v-btn icon x-large class="black--text">
            <v-icon large>{{ icons.cart }}</v-icon>
          </v-btn>
          <h4 v-show="!isPhone" class="text-capitalize">
            {{ $t('products.cart') }}
          </h4>
        </div>
      </v-toolbar>
      <!-- navdrawer -->
      <NavDrawer :drawer="drawer" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import {
  mdiArrowLeft,
  mdiCart,
  mdiAccountCircle,
  mdiFaceProfile,
  mdiMapCheck,
  mdiPackage,
  mdiChat,
  mdiAccountSettings,
  mdiHistory,
  mdiHeart,
  mdiMenu,
  mdiClose,
} from '@mdi/js'
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'

export default Vue.extend({
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      drawer: false,
      icons: {
        backArrow: mdiArrowLeft,
        myAccount: mdiAccountCircle,
        cart: mdiCart,
        menu: mdiMenu,
        menuOpen: mdiClose,
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
      bannerImage: {
        backgroundImage:
          'url("/products/' +
          this.category.replace(' ', '-').toLowerCase() +
          '/banner.png")',
      },
    }
  },

  computed: {
    isPhone(): boolean {
      // TODO maybe find better fix?
      // @ts-ignore
      return this.$vssWidth < 600
    },
  },
})
</script>

<style lang="scss" scoped>
.container-top {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 750px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  .top-left {
    position: sticky;
    top: 0;

    button {
      margin: 0 1vw;
    }
  }

  .category-toolbar {
    margin-bottom: 5vw;

    .the-toolbar {
      padding: 0 2vw;
      background-color: $grey-background-transparent;
      position: sticky;
      top: 0;
    }

    button {
      background-color: transparent;
    }
    .toolbar-button {
      margin: 0 1vw;
    }
  }
}
</style>

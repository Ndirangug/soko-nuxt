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
        <v-app-bar-nav-icon class="black--text" x-large></v-app-bar-nav-icon>

        <v-toolbar-title class="toolbar-title font-weight-bold text-uppercase">
          {{ category }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!--  ***  my account dropown *** -->
        <!-- TODO improve appearance of  this menu prolly consider using cards, lists or checout menu examples-->
        <div class="toolbar-button d-flex justify-center align-center">
          <v-menu transition="slide-y-transition" bottom>
            <template
              v-slot:activator="{ on, attrs }"
              class="d-flex justify-center align-center"
            >
              <v-btn icon x-large class="black--text" v-bind="attrs" v-on="on">
                <v-icon large>{{ icons.myAccount }}</v-icon>
              </v-btn>
              <h4 class="text-capitalize black--text">
                {{ $t('products.my_account') }}
              </h4>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in my_account_dropdown" :key="i">
                <v-list-item-title>
                  <nuxt-link
                    class="text-capitalize black--text"
                    :to="localePath(`myaccount-${item.route}`)"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <!--  ***  cart button *** -->
        <div class="toolbar-button d-flex justify-center align-center">
          <v-btn icon x-large class="black--text">
            <v-icon large>{{ icons.cart }}</v-icon>
          </v-btn>
          <h4 class="text-capitalize">{{ $t('products.cart') }}</h4>
        </div>
      </v-toolbar>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiArrowLeft, mdiCart, mdiAccountCircle } from '@mdi/js'

export default Vue.extend({
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        backArrow: mdiArrowLeft,
        myAccount: mdiAccountCircle,
        cart: mdiCart,
      },
      my_account_dropdown: [
        { title: this.$t('products.profile'), route: 'overview' },
        { title: this.$t('products.track_my_order'), route: 'orders' },
        { title: this.$t('products.orders'), route: 'orders' },
        { title: this.$t('products.messages'), route: 'messages' },
        { title: this.$t('products.account_settings'), route: 'overview' },
        { title: this.$t('products.recently_viewed'), route: 'myactivity' },
        { title: this.$t('products.saved_items'), route: 'myactivity' },
      ],
      bannerImage: {
        backgroundImage:
          'url("/products/' +
          this.category.replace(' ', '-').toLowerCase() +
          '/banner.png")',
      },
    }
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

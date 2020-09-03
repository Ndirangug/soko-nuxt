<template>
  <div class="root-container">
    <div class="container-top">
      <div class="top-left">
        <v-btn icon x-large left>
          <v-icon large color="white">{{ icons.backArrow }}</v-icon>
        </v-btn>
        <GreenWhiteLogo />
      </div>

      <div class="category-toolbar">
        <v-toolbar class="the-toolbar">
          <v-app-bar-nav-icon class="black--text" x-large></v-app-bar-nav-icon>

          <v-toolbar-title
            class="toolbar-title font-weight-bold text-uppercase"
          >
            {{ category }}
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon x-large class="black--text">
            <v-icon>{{ icons.myAccount }}</v-icon>
          </v-btn>

          <div class="toolbar-button">
            <v-btn icon x-large class="black--text">
              <v-icon>{{ icons.cart }}</v-icon>
            </v-btn>
            <h4>Cart</h4>
          </div>
        </v-toolbar>
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiArrowLeft, mdiCart, mdiAccountCircle } from '@mdi/js'

export default Vue.extend({
  data() {
    return {
      icons: {
        backArrow: mdiArrowLeft,
        myAccount: mdiAccountCircle,
        cart: mdiCart,
      },
      category: 'living room',
    }
  },
})
</script>

<style lang="scss" scoped>
.root-container {
  .container-top {
    background: url('/products/living-room/banner.png') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    height: 750px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    .top-left {
      display: flex;
      flex-flow: row nowrap;
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
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

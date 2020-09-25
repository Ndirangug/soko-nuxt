<!-- TODO split this further into separate components,?-->
// TODO position fix top toolbar
<template>
  <div class="container-top" :style="bannerImage">
    <!-- back arrow and logo -->
    <div class="top-left d-flex">
      <v-btn icon x-large left>
        <v-icon large color="white">{{ icons.backArrow }}</v-icon>
      </v-btn>
      <GreenWhiteLogo :dark="dark" />
    </div>

    <!-- ------ toolbar   ---------- -->
    <CategoryToolbar :category="category" :dark="false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import { mdiArrowLeft } from '@mdi/js'

export default Vue.extend({
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dark: true,
      icons: {
        backArrow: mdiArrowLeft,
      },
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
    position: -webkit-sticky !important;
    position: sticky !important;
    top: 0;

    button {
      margin: 0 1vw;
    }
  }
}
</style>

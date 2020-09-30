<template>
  <div class="d-flex justify-space-around align-center">
    <v-btn
      tile
      color="primary"
      class="text-uppercase"
      large
      min-width="80%"
      @click="addToCart"
    >
      <v-icon>{{ icons.addToCart }}</v-icon>
      <span>{{ $t('product_details.add_to_cart') }}</span>
    </v-btn>

    <v-btn large icon color="primary" @click="favorited = !favorited">
      <v-icon v-if="favorited" large>{{ icons.favoriteFilled }}</v-icon>
      <v-icon v-else large>{{ icons.favoriteOutline }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { mdiCartPlus, mdiHeart, mdiHeartOutline } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      icons: {
        addToCart: mdiCartPlus,
        favoriteFilled: mdiHeart,
        favoriteOutline: mdiHeartOutline,
      },
      // TODO: GET FROM APOLLO DATA
      favorited: false,
    }
  },

  methods: {
    addToCart() {
      // TODO:IMPLEMENT THIS
    },
  },
})
</script>

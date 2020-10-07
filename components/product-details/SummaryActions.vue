<template>
  <div
    v-intersect="onIntersect"
    class="summary-actions-container d-flex justify-space-around align-center"
  >
    <v-fab-transition :style="{ 'min-width': showFab ? '' : '80%' }" group>
      <v-btn
        :key="1"
        color="primary"
        class="text-uppercase"
        :large="!showFab"
        :width="showFab ? '' : '100%'"
        :elevation="showFab ? '24' : ''"
        :tile="!showFab"
        :fab="showFab"
        :class="{ 'fab-add-to-cart': showFab }"
        @click="addToCart"
      >
        <v-icon>{{ icons.addToCart }}</v-icon>
        <span v-show="!showFab">{{ $t('productDetails.add_to_cart') }}</span>
      </v-btn>
    </v-fab-transition>

    <v-btn large icon color="primary" @click="favorited = !favorited">
      <v-icon v-if="favorited" large>{{ icons.favoriteFilled }}</v-icon>
      <v-icon v-else large>{{ icons.favoriteOutline }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { mdiCartPlus, mdiHeart, mdiHeartOutline } from '@mdi/js'
import Vue from 'vue'
import { EventBus } from '~/utils/event-bus'
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
      isIntersecting: false,
    }
  },

  computed: {
    showFab(): boolean {
      // @ts-ignore
      return this.$vuetify.breakpoint.smAndDown && !this.isIntersecting
    },
  },

  methods: {
    addToCart() {
      EventBus.$emit('add-to-cart')
    },

    onIntersect(
      entries: IntersectionObserverEntry[],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      observer: IntersectionObserver
    ) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting
    },
  },
})
</script>

<style lang="scss" scoped>
.summary-actions-container {
  .fab-add-to-cart {
    position: fixed;
    bottom: 4vw;
    right: 4vw;
    z-index: 2;
  }
}
</style>

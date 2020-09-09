<template>
  <div class="root-container" @toggle-navdrawer="onToggleNavDrawer">
    <!-- #####   top banner section of page   #####-->
    <BannerAndToolbar :category="category" />

    <!-- #### the AdsStrip ##### -->
    <AdsStrip />

    <!-- ##### the actual products ###### ------ -->
    <nuxt-child />

    <!-- ##### blog ##### -->

    <!-- ##### subscribe #### -->

    <!-- ##### footer ##### -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      drawerState: false,
      category: 'living room',
    }
  },

  methods: {
    onToggleNavDrawer(drawerState: boolean) {
      this.drawerState = drawerState
    },
  },
})
</script>

<style lang="scss" scoped>
.v-autocomplete__content {
  .v-list-item__title {
    color: $grey-text-dark !important;
  }
}
</style>

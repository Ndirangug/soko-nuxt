<template>
  <div class="root-container">
    <!-- #####   top banner section of page   #####-->
    <!-- TODO turn this div into a component -->
    <BannerAndToolbar :category="category" />

    <!-- ####  after the banner ##### -->

    <!-- ---- the ads ------ -->

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
      category: 'living room',
    }
  },
})
</script>

<style lang="scss" scoped></style>

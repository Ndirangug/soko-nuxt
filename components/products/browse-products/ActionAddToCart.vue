<template>
  <div class="root-container d-flex justify-center align-center px-2">
    <v-btn dark text>
      <v-icon>{{ icons.addCart }}</v-icon>
      <h6 class="text--white text-capitalize text-caption">
        {{ $t('products.browse_products.add_to_cart') }}
      </h6>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { mdiCartPlus } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      icons: {
        addCart: mdiCartPlus,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.root-container {
  height: 100% !important;
}
</style>

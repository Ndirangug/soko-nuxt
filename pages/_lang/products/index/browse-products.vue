<template>
  <div class="root-container">
    <v-scale-transition>
      <FilterToolbar />
    </v-scale-transition>
    <div
      class="d-flex justify-center align-center"
      :class="{ 'filter-chips': showChips }"
    >
      <FilterChips v-show="showChips" @check-tags="showChips = $event" />
    </div>
    <div class="categories">
      <AllCategories />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ScreenSizeMixin } from '~/components/mixins/ScreenSize'

export default Vue.extend({
  mixins: [ScreenSizeMixin],
  data() {
    return {
      showChips: false,
    }
  },
})
</script>
<style lang="scss" scoped>
.root-container {
  .filter-chips {
    width: 80%;
    margin: 4vw auto;
  }

  .categories {
    padding: 0 5vw;
  }
}
</style>

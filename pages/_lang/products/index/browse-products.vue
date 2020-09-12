<template>
  <div class="root-container">
    <v-scale-transition>
      <FilterToolbar />
    </v-scale-transition>
    <div
      class="d-flex justify-center align-center"
      :class="{ chips: showTags }"
    >
      <FilterTags v-show="showTags" @check-tags="showTags = $event" />
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
      showTags: false,
    }
  },
})
</script>
<style lang="scss" scoped>
.root-container {
  .chips {
    width: 80%;
    margin: 4vw auto;
  }
}
</style>

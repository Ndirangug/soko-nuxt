<template>
  <div class="back-button-container">
    <v-btn text @click="goBack()">
      <v-icon>{{ icons.back }}</v-icon>
      <span class="btn-text text-subtitle-2 ml-2">{{ text }}</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { mdiArrowLeft } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        back: mdiArrowLeft,
      },
    }
  },

  methods: {
    goBack() {
      // TODO: or go to route passing, params
      this.$router.back()
    },
  },
})
</script>

<style lang="scss" scoped>
.btn-text {
  &:first-letter {
    text-transform: uppercase;
  }
}
</style>

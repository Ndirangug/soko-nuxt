<template>
  <div
    class="3d-button-root-container"
    :class="{
      'position-absolute': $vuetify.breakpoint.smAndDown,
      'position-absolute-sm': $vuetify.breakpoint.sm,
    }"
  >
    <v-hover v-slot:default="{ hover }">
      <v-btn x-large icon class="mx-0 mx-sm-0 mx-md-4 mx-lg-6 my-n2">
        <v-img
          :width="$vuetify.breakpoint.smAndUp ? thumbnailWidth : '40px'"
          :max-width="$vuetify.breakpoint.smAndUp ? thumbnailWidth : '40px'"
          :max-height="$vuetify.breakpoint.smAndUp ? thumbnailWidth : '40px'"
          :src="thumbnail"
        >
          <div
            class="overlay d-flex justify-center align-center"
            :class="{ 'overlay-hover': hover }"
          >
            <v-img class="three-sixty-icon" src="/svg/360degrees.svg" />
          </div>
        </v-img>
      </v-btn>
    </v-hover>
  </div>
</template>

<script lang="ts">
import { mdiVideo3d } from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  props: {
    thumbnailWidth: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        threesixtydegrees: mdiVideo3d,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.overlay {
  background-color: $grey-background-transparent;
  height: 100%;
  width: 100%;

  .three-sixty-icon {
    max-width: 70%;
  }
}

.overlay-hover {
  border: solid 0.2em $grey-background;
}

.position-absolute {
  position: absolute;
  top: -20px;
  right: -28vw;
}

.position-absolute-sm {
  right: -38vw;
}
</style>

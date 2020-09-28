<template>
  <div>
    <div class="images">
      <v-window v-model="model" reverse>
        <v-window-item v-for="(image, i) in images" :key="i">
          <v-img :src="image" />
        </v-window-item>
      </v-window>
    </div>

    <div class="thumbnails">
      <v-item-group v-model="model" class="text-center" mandatory>
        <v-item
          v-for="(thumbnail, i) in thumbnails"
          :key="i"
          v-slot:default="{ active, toggle }"
        >
          <v-btn :input-value="active" icon @click="toggle">
            <v-img width="50" :src="thumbnail" />
          </v-btn>
        </v-item>
      </v-item-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    images: {
      type: [String],
      required: true,
    },
    thumbnails: {
      type: [String],
      required: true,
    },
  },
  data() {
    return {
      model: 0,
    }
  },

  computed: {
    length(): number {
      return this.thumbnails.length
    },
  },
  methods: {
    next() {
      this.model = this.model + 1 === this.length ? 0 : this.model + 1
    },
    prev() {
      this.model = this.model - 1 < 0 ? this.length - 1 : this.model - 1
    },
  },
})
</script>

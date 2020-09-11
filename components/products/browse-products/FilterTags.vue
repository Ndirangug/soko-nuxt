<template>
  <v-chip-group
    v-model="selection"
    multiple
    active-class="primary--text"
    show-arrows
  >
    <v-chip
      v-for="(tag, i) in tags"
      :key="i"
      link
      close
      @click:close="tags.splice(i, 1)"
      @input="onActiveStateChange($event, i)"
    >
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      tags: this.$route.query.tags
        ? this.$route.query.tags.toString().split(',')
        : [],
      selection: [0],
    }
  },

  watch: {
    tags() {
      this.updateSelection()
    },
  },

  mounted() {
    this.updateSelection()
  },

  methods: {
    onActiveStateChange(state: boolean, element: number) {
      // if an chip has been unselected(by clicking it,) but not removed, reselect it immediately!
      if (
        !state &&
        !this.selection.includes(this.tags.indexOf(this.tags[element]))
      ) {
        this.selection.push(element)
      }
    },

    updateSelection() {
      this.selection = [...this.tags.keys()]
    },
  },
})
</script>

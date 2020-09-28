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
      :close-icon="icons.close"
      @click:close="tags.splice(i, 1)"
      @input="onActiveStateChange($event, i)"
    >
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>

<script lang="ts">
import { mdiClose } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      icons: {
        close: mdiClose,
      },
      tags: this.$route.query.tags
        ? this.$route.query.tags.toString().split(',')
        : [],
      selection: [0],
    }
  },

  watch: {
    tags() {
      this.checkTags()
    },
  },

  mounted() {
    this.checkTags()
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
    checkTags() {
      if (this.tags.length > 0) {
        this.selection = [...this.tags.keys()]
        this.$emit('check-tags', true)
      } else {
        this.$emit('check-tags', false)
      }
    },
  },
})
</script>

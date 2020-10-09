<template>
  <div class="filter-chips-container d-flex justify-center align-center">
    <v-chip-group
      v-model="model"
      color="primary"
      show-arrows
      multiple
      mandatory
    >
      <v-chip>
        {{ $t(`productDetails.reviews.${chipsMap[0]}`) }}
      </v-chip>

      <v-chip v-for="sentiment in sentiments" :key="sentiment">
        {{ $t(`productDetails.reviews.sentiments.${sentiment}`) }}
      </v-chip>

      <v-chip v-for="i in stars" :key="i">
        {{ i }}
        <v-avatar right>
          <v-icon small>{{ icons.star }}</v-icon>
        </v-avatar>
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script lang="ts">
import { mdiStar } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      model: [0],
      sentiments: ['positive', 'critical'],
      stars: [5, 4, 3, 2, 1],
      icons: {
        star: mdiStar,
      },
    }
  },

  computed: {
    chipsMap(): string[] {
      // @ts-ignore
      return ['all', ...this.sentiments, ...this.stars]
    },

    selected(): string[] {
      const items = []

      for (const item of this.model) {
        items.push(this.chipsMap[item])
      }

      return items
    },
  },

  watch: {
    selected(value: string[]) {
      this.$emit('update:filters', value)
    },
  },
})
</script>

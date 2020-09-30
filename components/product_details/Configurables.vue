<template>
  <div class="configure-container d-flex justify-start align-center flex-wrap">
    <v-responsive
      v-for="(configurable, i) in configurables"
      :key="i"
      :max-width="maxWidth"
      class="mr-1 mr-sm-4 mr-md-3 mr-lg-4"
    >
      <v-select
        :label="configurable.configurableType"
        :items="configurableOptions[i]"
        solo
        :dense="$vuetify.breakpoint.smAndDown"
        @change.self="updateSelectThumbnail($event, i)"
      >
        <template v-slot:prepend-inner>
          <v-img :src="selectedOptionThumbnails[i]" width="20" />
        </template>
      </v-select>
    </v-responsive>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Configurable, ConfigurableOption } from '~/types/types'

export default Vue.extend({
  props: {
    configurables: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      model: '',
      selectedOptionThumbnails: [''],
    }
  },

  computed: {
    configurableOptions() {
      const allOptions: string[][] = []

      // @ts-ignore
      this.configurables.forEach((configurable: Configurable) => {
        const options: string[] = []

        configurable.optionsAvailable.forEach(
          (optionAvailable: ConfigurableOption) => {
            options.push(optionAvailable.name)
          }
        )

        allOptions.push(options)
      })

      return allOptions
    },

    maxWidth() {
      let width = ''

      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          width = '30%'
          break
        case 'lg':
          width = '30%'
          break
        case 'md':
          width = '45%'
          break
        case 'sm':
          width = '50%'
          break
        case 'xs':
          width = '80%'
          break
        default:
          width = '80%'
      }

      return width
    },
  },

  methods: {
    updateSelectThumbnail(optionSelected: string, index: number) {
      // @ts-ignore
      const configurable: Configurable = this.configurables[index]
      const option = configurable.optionsAvailable.find(
        (configurableOption: ConfigurableOption) => {
          return configurableOption.name === optionSelected
        }
      )
      this.selectedOptionThumbnails[index] =
        option !== undefined ? option.thumbnailUrl : ''
    },
  },
})
</script>

<style lang="scss">
.v-input__slot {
  margin-bottom: 0 !important;
}

.v-text-field--solo {
  border-radius: 30px !important;
}
</style>

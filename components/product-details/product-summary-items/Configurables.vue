<template>
  <div class="configure-container d-flex justify-start align-center flex-wrap">
    <v-responsive
      v-for="(configurable, i) in configurables"
      :key="i"
      :max-width="maxWidth"
      class="mr-1 mr-sm-4 mr-md-3 mr-lg-4 mb-md-n3 mb-lg-0"
    >
      <v-select
        :items="configurableOptions[i]"
        solo
        :dense="$vuetify.breakpoint.smAndDown"
        @change.self="onConfigurableChanged($event, i)"
      >
        <template v-slot:prepend-inner>
          <v-img
            class="mx-2 mb-1"
            :src="selectedOptionThumbnails[i]"
            width="20"
          />
        </template>

        <template v-slot:label>
          <div class="text-capitalize">
            {{
              `${$t('productDetails.select')} 
              ${configurable.configurableType}`
            }}
          </div>
        </template>
      </v-select>
    </v-responsive>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Configurable, ConfigurableOption } from '~/types/types'
import { EventBus } from '~/utils/event-bus'

export default Vue.extend({
  props: {
    configurables: {
      type: Array as PropType<Array<Configurable>>,
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
          width = '45%'
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

    updateCarousel() {
      // TODO: IMPLEMENT THIS with imgeas  matching configurables
    },

    onConfigurableChanged(optionSelected: string, index: number) {
      // TODO MAKE ASYNC
      this.updateSelectThumbnail(optionSelected, index)
      this.updateCarousel()
      this.emitConfigurableChanged(optionSelected, index)
    },

    emitConfigurableChanged(optionSelected: string, index: number) {
      // @ts-ignore
      const chandedConfigurable: string = this.configurables[index]
        .configurableType

      EventBus.$emit('update:configurable', {
        [chandedConfigurable]: optionSelected,
      })
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

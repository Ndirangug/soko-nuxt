<template>
  <v-radio-group v-model="model" mandatory column>
    <div
      v-for="(radioOption, i) in radioOptions"
      :key="i"
      class="mb-4 mb-md-6"
      :class="[`option-${i}`]"
    >
      <v-radio color="primary" :value="radioOption.value">
        <template v-slot:label>
          <div
            class="option-title text-subtitle-2 text-md-subtitle-1 font-weight-medium black--text"
          >
            {{ radioOption.label }}
          </div>
        </template>
      </v-radio>

      <div class="option-content ml-4 ml-sm-6 ml-md-8">
        <slot :model="model" :name="`content${i}`">
          <v-skeleton-loader type="image" />
        </slot>
      </div>
    </div>
  </v-radio-group>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { RadioOption } from '~/types/ui'

export default Vue.extend({
  props: {
    radioOptions: {
      type: Array as PropType<Array<RadioOption>>,
      required: true,
    },
    selectedOption: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      model: '',
    }
  },

  watch: {
    model(value: string) {
      this.$emit('update:selected-option', value)
    },
  },
})
</script>

<style lang="scss" scoped>
.option-title {
  @include sentence-case();
}
</style>

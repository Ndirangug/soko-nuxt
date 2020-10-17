<template>
  <v-container class="pa-0">
    <v-row class="table-row" dense>
      <v-col
        v-for="(configurableOption, i) in configurableOptions"
        :key="i"
        cols="12"
        sm="6"
        md="12"
        lg="6"
      >
        <div
          class="configurable d-flex justify-start align-center text-subtitle-2 font-weight-regular"
        >
          <span class="mr-2">
            {{ `${configurableOption.configurable.configurableType}: ` }}
          </span>

          <v-avatar size="15">
            <v-img :src="configurableOption.thumbnailUrl" />
          </v-avatar>

          <span class="ml-2">{{ configurableOption.name }}</span>
        </div>
      </v-col>

      <v-spacer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ConfigurableOption } from '~/types/types'

export default Vue.extend({
  props: {
    configurableOptions: {
      type: Array as PropType<Array<ConfigurableOption>>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>

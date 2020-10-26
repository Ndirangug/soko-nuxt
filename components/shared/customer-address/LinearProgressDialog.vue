<template>
  <v-dialog v-model="active" hide-overlay persistent width="300">
    <v-card color="primary" dark>
      <v-card-text>
        <p class="mb-1 text-capitalize">{{ $t('forms.saving') }}...</p>

        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
          rounded
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

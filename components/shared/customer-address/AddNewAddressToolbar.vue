<template>
  <v-toolbar dark color="primary" absolute min-width="100%">
    <v-btn icon dark @click="closeDialog">
      <v-icon>{{ icons.close }}</v-icon>
    </v-btn>

    <v-toolbar-title
      class="text-capitalize text-body-1 text-md-h6 font-weight-medium pl-0"
    >
      {{ $t('checkout.add_a_new_address') }}
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="mr-n2">
      <v-btn dark text @click="saveAddress"> {{ $t('forms.save') }} </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiClose } from '@mdi/js'

export default Vue.extend({
  data() {
    return {
      icons: {
        close: mdiClose,
      },
    }
  },

  methods: {
    closeDialog() {
      this.$emit('close-dialog')
    },

    saveAddress() {
      this.$emit('save-address')
    },
  },
})
</script>

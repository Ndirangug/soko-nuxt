<template>
  <div class="no-address-layout-container"></div>
</template>

<script lang="ts">
import { mdiEmoticonSad } from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      icons: {
        sad: mdiEmoticonSad,
      },
    }
  },
})
</script>

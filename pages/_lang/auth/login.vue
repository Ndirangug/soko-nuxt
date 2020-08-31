<template>
  <div>
    <h1>Log in</h1>
    <button @click="userLogin">LOG IN</button>
    <div v-if="showIcon">
      <v-icon>{{ svgPath }}</v-icon>
      <v-icon>{{ svgPath2 }}</v-icon>
      <v-icon>{{ svgPath3 }}</v-icon>
    </div>
  </div>
</template>

<script>
import { mdiAccount, mdiLogin, mdiEmoticonDevil } from '@mdi/js'

export default {
  data() {
    return {
      showIcon: false,
      svgPath: mdiAccount,
      svgPath2: mdiLogin,
      svgPath3: mdiEmoticonDevil,
    }
  },

  methods: {
    async userLogin() {
      // TODO IMPLEMENT LOGIN
      await console.log('logging in...')
      this.showIcon = !this.showIcon
    },
  },
}
</script>

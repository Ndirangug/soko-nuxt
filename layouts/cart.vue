<template>
  <v-app>
    <TopToolbar />

    <NavDrawer />

    <v-main>
      <nuxt />
    </v-main>

    <v-footer class="mt-4">
      <SubscribeFooter />
    </v-footer>
  </v-app>
</template>

<style lang="scss">
.v-footer {
  padding: 0 !important;
}
</style>

<template>
  <div class="root-container">
    <div>
      <v-toolbar class="the-toolbar">
        <v-app-bar-nav-icon class="black--text">
          <v-icon x-large>mdi-menu</v-icon>
        </v-app-bar-nav-icon>

        <v-toolbar-title class="toolbar-title font-weight-bold text-uppercase">
          Filters
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon x-large class="black--text">
          <v-icon large>mdi-cart</v-icon>
        </v-btn>
        <v-btn icon x-large class="black--text">
          <v-icon large>mdi-cart</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root-container {
  padding: 0 1vw;

  .the-toolbar {
    padding: 0 1vw;
  }
}
</style>

<template>
  <div>
    <v-btn
      class="btn white--text"
      color="#1778F2"
      elevation="6"
      rounded
      x-large
    >
      <v-icon size="30px" color="white" class="icon">mdi-facebook</v-icon>
      {{ $t('auth.facebook_signup') }}
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  font-size: 1vw;
  text-transform: capitalize;

  .icon {
    margin-right: 1vw;
  }
}
</style>

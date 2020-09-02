<template>
  <div>
    <v-btn class="btn" color="white" elevation="6" rounded large>
      <v-icon size="30px" class="icon" color="#4267b2">mdi-facebook</v-icon>
      {{ $t('auth.facebook_login') }}
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

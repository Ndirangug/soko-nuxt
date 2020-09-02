<template>
  <div>
    <v-btn class="btn" color="white" elevation="6" rounded large>
      <v-icon class="icon" size="30px" color="#4267b2">mdi-facebook</v-icon>
      {{ $t('auth.facebook_signup') }}
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  font-size: 1vw;
  text-transform: capitalize;
  height: 35px;

  .icon {
    margin-right: 1vw;
  }
}
</style>

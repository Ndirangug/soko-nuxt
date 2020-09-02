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

// phones <  screen <= tablets
@media only screen and (max-width: 768px) and (min-width: 600px) {
  .btn {
    font-size: 1.8vw;
  }
}

// screen <= phone
@media screen and (max-width: 600px) {
  .btn {
    font-size: 3.5vw;
    font-weight: 400;
  }
}
</style>

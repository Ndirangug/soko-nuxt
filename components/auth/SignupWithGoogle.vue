<template>
  <div>
    <v-btn class="btn" elevation="6" color="white" rounded x-large>
      <v-img
        class="icon"
        contain
        src="/auth/Google__G__Logo.svg"
        max-height="25px"
        max-width="25px"
      />
      {{ $t('auth.google_signup') }}
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

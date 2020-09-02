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
</style>

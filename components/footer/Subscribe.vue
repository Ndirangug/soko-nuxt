<template>
  <v-container class="root-container" fluid>
    <div class="subscribe-form d-flex justify-center align-center">
      <v-form :style="{ width: $vuetify.breakpoint.mdAndUp ? '60%' : '90%' }">
        <v-text-field
          filled
          type="email"
          :placeholder="$t('subscribe.example')"
          outlined
        >
          <v-btn slot="append" color="primary" tile>
            {{ $t('subscribe.subscribe') }}
          </v-btn>
        </v-text-field>
      </v-form>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.root-container {
  width: 100%;

  .subscribe-form {
    width: 100%;
  }
}
</style>
<style lang="scss">
.subscribe-form {
  .v-input__slot {
    padding-right: 0 !important;

    .v-input__append-inner {
      margin: 0 !important;
      padding: 0 !important;
      height: 56px !important;
      width: 40%;

      button {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>

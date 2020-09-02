<template>
  <div id="root-container">
    <div id="buttons-container">
      <LoginWithGoogle class="btn" />
      <LoginWithFacebook class="btn" />
    </div>

    <p>or</p>

    <v-form>
      <v-text-field
        v-model="username"
        label="Email or Phone"
        prepend-inner-icon="mdi-face"
      ></v-text-field>

      <v-text-field
        v-model="password"
        prepend-inner-icon="mdi-lock"
        :append-icon="showPasssword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="showPasssword ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="showPasssword = !showPasssword"
      ></v-text-field>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      showPasssword: false,
      rules: {
        required: (value: any) => !!value || 'Required.',
        min: (v: string | any[]) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => "The email and password you entered don't match",
      },
      password: '',
      username: '',
    }
  },
})
</script>

<style lang="scss" scoped>
#root-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  #buttons-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 1vw 0;

    .btn {
      margin: 0.25vw 0.3vw;
    }
  }
}
</style>

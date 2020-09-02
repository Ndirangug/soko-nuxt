<template>
  <div id="root-container">
    <div id="buttons-container" class="flex-child">
      <LoginWithGoogle class="btn" />
      <LoginWithFacebook class="btn" />
    </div>

    <p class="flex-child">or</p>

    <v-form class="flex-child">
      <v-text-field
        v-model="formInput.username"
        label="Email or Phone"
        prepend-inner-icon="mdi-face"
      ></v-text-field>

      <v-text-field
        v-model="formInput.password"
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

    <div class="remember_me_forgot_password flex-child">
      <v-checkbox
        v-model="formInput.remember_me"
        class="remember_me"
        height="0"
      >
        <p slot="label">{{ $t('auth.remember_me') }}</p>
      </v-checkbox>
      <a class="forgot_password" href="#">
        {{ $t('auth.forgot_password') }}?
      </a>
    </div>

    <v-btn tile large class="flex-child btn-login" color="primary">
      {{ $t('auth.login') }}
    </v-btn>

    <p class="flex-child text-body-2">
      {{ $t('auth.dont_have_account') }}
      <nuxt-link :to="localePath('auth-signup')">
        {{ $t('auth.create_one') }}
      </nuxt-link>
      {{ $t('auth.fast_and_easy') }}
    </p>
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

      formInput: {
        password: '',
        username: '',
        remember_me: false,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
#root-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;

  .flex-child {
    margin: 0.5vw 0;
  }

  #buttons-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 2vw 0;

    .btn {
      margin: 0.25vw 0.3vw;
    }
  }

  form {
    width: 80%;
    padding: 0;
    margin: 0;

    input {
      width: 100%;
      padding: 0;
      margin: 0;
      text-align: center;
    }
  }

  .remember_me_forgot_password {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 80%;

    .remember_me {
    }
    .forgot_password {
      font-size: 1vw;
    }
  }

  .btn-login {
    margin: 1vw 0;
    width: 30%;
  }
}
</style>

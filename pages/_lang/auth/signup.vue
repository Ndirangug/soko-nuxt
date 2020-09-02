<template>
  <div id="root-container">
    <div id="buttons-container" class="flex-child">
      <SignupWithGoogle class="btn" />
      <SignupWithFacebook class="btn" />
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
      <v-text-field
        v-model="formInput.password_confirm"
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

    <div class="terms_and_conditions flex-child">
      <v-checkbox
        v-model="formInput.terms_and_conditions"
        class="remember_me text-caption-2"
        height="0"
      >
        <p slot="label">
          {{ $t('auth.agree') }}
          <nuxt-link :to="localePath('/')">
            {{ $t('auth.terms_and_conditions') }}
          </nuxt-link>
        </p>
      </v-checkbox>
    </div>

    <v-btn tile large class="flex-child btn-signup" color="primary">
      {{ $t('auth.create_account') }}
    </v-btn>

    <p class="flex-child text-body-2">
      {{ $t('auth.already_have_account') }}
      <nuxt-link :to="localePath('auth-login')">
        {{ $t('auth.login') }}
      </nuxt-link>
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
        password_confirm: '',
        username: '',
        terms_and_conditions: false,
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
    margin: 1vw 0;

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
    }
  }

  .terms_and_conditions {
    display: flex;
    flex-flow: row wrap;
    width: 80%;
  }

  .btn-signup {
    margin: 1vw 0;
    width: 40%;
  }
}
</style>

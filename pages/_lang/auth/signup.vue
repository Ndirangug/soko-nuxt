<template>
  <div id="root-container">
    <div id="buttons-container" class="flex-child">
      <SignupWithGoogle class="btn" />
      <SignupWithFacebook class="btn" />
    </div>

    <p class="flex-child">or</p>

    <v-form class="flex-child">
      <v-text-field v-model="formInput.username" label="Email or Phone">
        <v-icon slot="prepend-inner">{{ icons.user }} </v-icon>
      </v-text-field>

      <v-text-field
        v-model="formInput.password"
        :rules="[rules.required, rules.min]"
        :type="showPasssword ? 'text' : 'password'"
        name="password"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="showPasssword = !showPasssword"
      >
        <v-icon slot="prepend-inner">{{ icons.lock }} </v-icon>
        <v-icon slot="append" @click="toggleshowPasssword">
          {{ icons.password_see }}
        </v-icon>
      </v-text-field>
      <v-text-field
        v-model="formInput.password_confirm"
        :rules="[rules.required, rules.min]"
        :type="showPasssword ? 'text' : 'password'"
        name="password"
        label="Repeat password"
        hint="At least 8 characters"
        counter
        @click:append="showPasssword = !showPasssword"
      >
        <v-icon slot="prepend-inner">{{ icons.lock }} </v-icon>
        <v-icon slot="append" @click="toggleshowPasssword">
          {{ icons.password_see }}
        </v-icon>
      </v-text-field>
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

    <p class="flex-child text-body-2 text-center">
      {{ $t('auth.already_have_account') }}
      <nuxt-link :to="localePath('auth-login')">
        {{ $t('auth.login') }}
      </nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiLock, mdiFace, mdiEye, mdiEyeOff } from '@mdi/js'

export default Vue.extend({
  data() {
    return {
      icons: {
        user: mdiFace,
        lock: mdiLock,
        password_see: mdiEyeOff,
      },
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

  methods: {
    toggleshowPasssword() {
      this.showPasssword = !this.showPasssword
      this.icons.password_see = this.showPasssword ? mdiEye : mdiEyeOff
    },
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
    justify-content: space-around;
    margin: 1vw 0;

    .btn {
      margin: 0.25vw 0.3vw;
    }
  }

  form {
    width: 60%;
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
    width: 60%;
  }

  .btn-signup {
    margin: 1vw 0;
    width: 40%;
  }
}

// phones <  screen <= tablets
@media only screen and (max-width: 768px) and (min-width: 600px) {
  #root-container {
    form {
      width: 80%;
    }
    .terms_and_conditions {
      width: 80%;
    }
    .btn-signup {
      width: 60%;
    }
  }
}

// screen <= phone
@media screen and (max-width: 600px) {
  #root-container {
    margin: 0;

    #buttons-container {
      .btn {
        margin: 1.3vw 0;
      }
    }
    form {
      width: 100%;
    }
    .terms_and_conditions {
      width: 100%;
    }

    .btn-signup {
      margin: 4vw 0;
      width: 92%;
    }
  }
}
</style>

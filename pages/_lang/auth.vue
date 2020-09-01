<template>
  <div id="auth-flex-container">
    <div id="decorative-section" class="flex-child">
      <BlackWhiteLogo />
    </div>

    <div id="login-signup-section" class="flex-child">
      <nuxt-link :to="localePath('auth-login')">Log in</nuxt-link>
      <nuxt-link :to="localePath('auth-signup')">Sign Up</nuxt-link>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>

<style lang="scss" scoped>
#auth-flex-container {
  background: url('/auth/background.png');
  background: {
    attachment: fixed;
    size: cover;
    repeat: no-repeat;
    attachment: fixed;
    position: center;
  }
  height: 100%;
  width: 100%;

  display: flex;
  flex: {
    direction: row;
    wrap: no-wrap;
  }
  align-items: center;

  .flex-child {
    width: 50%;
    height: 100%;
  }

  #login-signup-section {
    background-color: white;
  }
}

h1 {
  color: $systembar;
}

/*  tablets - phoness */
@media only screen and (max-width: 768px) and (min-width: 600px) {
  #auth-flex-container {
    //display: flex;

    #decorative-section {
      width: 40%;
    }
    #login-signup-section {
      width: 60%;
    }
  }
}

// phones and smaller
@media screen and (max-width: 600px) {
  #auth-flex-container {
    display: block;

    #decorative-section {
      width: 100%;
      height: 100%;
    }

    #login-signup-section {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      width: 80%;
      height: 80%;
      margin: auto;
    }
  }
}
</style>

<template>
  <div id="auth-container">
    <h1>Auth</h1>
    <nuxt-link :to="localePath('auth-login')">Log in</nuxt-link>
    <nuxt-link :to="localePath('auth-signup')">Sign Up</nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>

<style lang="scss" scoped>
#auth-container {
  background: url('/auth/background.png');
  background-attachment: fixed;
  background-size: contain;
  height: 100%;
  width: 100%;
}

h1 {
  color: $systembar;
}
</style>

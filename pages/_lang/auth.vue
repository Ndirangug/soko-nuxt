<template>
  <div>
    <h1>Auth</h1>
    <nuxt-link :to="localePath('auth-login')">Log in</nuxt-link>
    <nuxt-link :to="localePath('auth-signup')">Sign Up</nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  auth: false,
}
</script>

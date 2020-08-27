<template>
  <div>
    <h1>My Account</h1>
    <nuxt-link :to="localePath('myaccount-overview')">Overview</nuxt-link>
    <nuxt-link :to="localePath('myaccount-profile')">Profile</nuxt-link>
    <nuxt-link :to="localePath('myaccount-orders')">Orders</nuxt-link>
    <nuxt-link :to="localePath('myaccount-messages')">Messages</nuxt-link>
    <nuxt-link :to="localePath('myaccount-myactivity')">My Activity</nuxt-link>
    <nuxt-link :to="localePath('myaccount-vouchers')">Vouchers</nuxt-link>
    <nuxt-link :to="localePath('myaccount-email-preferrences')">
      Email Preferrences
    </nuxt-link>

    <nuxt-child />
  </div>
</template>


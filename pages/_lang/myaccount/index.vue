<template>
  <div>
    <h1>My Account</h1>
    <v-tabs>
      <v-tab :to="localePath('/myaccount/overview')">Overview</v-tab>
      <v-tab :to="localePath('/myaccount/profile')">Profile</v-tab>
      <v-tab :to="localePath('/myaccount/orders')">Orders</v-tab>
      <v-tab :to="localePath('/myaccount/messages')">Messages</v-tab>
      <v-tab :to="localePath('/myaccount/myactivity')"> My Activity </v-tab>
      <v-tab :to="localePath('/myaccount/vouchers')">Vouchers</v-tab>
      <v-tab :to="localePath('/myaccount/email-preferrences')">
        Email Preferrences
      </v-tab>
    </v-tabs>
    <nuxt-child />
  </div>
</template>

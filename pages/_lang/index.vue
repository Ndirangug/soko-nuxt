<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">
        {{ $t('home.title') }}
      </h1>
      <p>{{ $t('home.introduction') }}</p>
    </div>

    <div>
      <h1>Customer</h1>
      <p v-for="(detail, value) in customer" :key="detail">
        {{ detail }} => {{ value }}
      </p>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import Customer from '~/apollo/queries/customer'

export default {
  apollo: {
    customer: {
      query: Customer,
      prefetch: true,
      variables() {
        return { customerID: 6 }
      },
    },
  },

  head() {
    return { title: this.$t('home.title') }
  },

  layout: 'sample',

  auth: false,
}
</script>

/* eslint-disable no-console */
import { onError } from 'apollo-link-error'

export default function (_ctx) {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    // TODO Maybe add better error handling
    console.error(graphQLErrors)
    console.error(networkError)
  })

  return {
    link: errorLink,

    // required
    // httpEndpoint: ctx.app.$env.GRAPHQL_URL,
    httpEndpoint:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:8080/graphql'
        : 'https://soko-graphql.uc.r.appspot.com/graphql',

    httpLinkOptions: {
      headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        Origin: process.env.NUXT_HOST,
      },
    },
  }
}

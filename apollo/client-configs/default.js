/* eslint-disable no-console */
import { onError } from 'apollo-link-error'

export default function ({ $config, app }) {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    // TODO Maybe add better error handling
    console.error(graphQLErrors)
    console.error(networkError)
  })

  console.log('configuring apollo')
  const iapToken =
    process.env.IAP_TOKEN !== undefined
      ? process.env.IAP_TOKEN
      : app.$env.IAP_TOKEN

  console.log(iapToken)

  return {
    link: errorLink,
    // required
    httpEndpoint: $config.GRAPHQL_ENDPOINT,

    httpLinkOptions: {
      headers: {
        Authorization: `Bearer ${iapToken}`,
        Origin: process.env.NUXT_HOST,
      },
    },
  }
}

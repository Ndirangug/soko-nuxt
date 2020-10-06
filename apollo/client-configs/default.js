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
        ? 'http://localhost:9002/graphql'
        : 'https://soko-graphql.herokuapp.com/graphql',

    httpLinkOptions: {
      credentials: 'same-origin',
    },
  }
}

// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'soko-graphql',
      // URL to the GraphQL API
      url: 'http://localhost:9002/graphql',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.gql'],
  },
}

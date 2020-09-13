/* eslint-disable import/no-duplicates */

declare module '*/login.graphql' {
  import { DocumentNode } from 'graphql'
  const defaultDocument: DocumentNode
  export const LogIn: DocumentNode

  export default defaultDocument
}

declare module '*/categories.graphql' {
  import { DocumentNode } from 'graphql'
  const defaultDocument: DocumentNode
  export const Categories: DocumentNode

  export default defaultDocument
}

declare module '*/customer.graphql' {
  import { DocumentNode } from 'graphql'
  const defaultDocument: DocumentNode
  export const Customer: DocumentNode

  export default defaultDocument
}
/* eslint-disable no-console */
import {
  Module,
  Mutation,
  MutationAction,
  VuexModule,
} from 'vuex-module-decorators'
import { CartItem } from '~/types/types'
import { CartItems } from '~/apollo/queries/cart_items.graphql'

@Module({ name: 'cart', stateFactory: true, namespaced: true })
export default class Cart extends VuexModule {
  cartItems: CartItem[] = []

  @Mutation
  addToCart(cartItem: CartItem) {
    this.cartItems.push(cartItem)
  }

  // @Mutation
  // initCartItems(cartItems: CartItem[]) {
  //   this.cartItems = cartItems
  // }

  @Mutation
  removeFromCart(index: number) {
    this.cartItems.splice(index)
  }

  // @ts-ignore
  @MutationAction({ mutate: ['cartItems'] })
  // @ts-ignore
  async initializeCartItems({ apolloClient, customerId }) {
    try {
      const result = await apolloClient.query({
        query: CartItems,
        variables: {
          customerId,
        },
      })

      const cartItems = result.data.customer.cartItems
      return { cartItems }

      // return cartItems
    } catch (error) {
      console.log(error)
      console.log(error.message)
    }
  }

  get cartItemsCount(): number {
    return this.cartItems.length
  }
}

import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Customer } from '~/types/types'

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  customer: Customer = {}
  loggedIn = false

  @Mutation
  logIn(customer: Customer) {
    this.loggedIn = true
    this.customer = customer
  }

  @Mutation
  logOut() {
    this.loggedIn = false
    this.customer = {}
  }
}

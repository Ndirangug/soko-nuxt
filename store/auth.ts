import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Customer } from '~/types/types'

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  // TODO This is populated with firebase login
  customer: Customer = {}
  loggedIn = false
  iapToken = ''

  @Mutation
  logIn(customer: Customer) {
    this.loggedIn = true
    this.customer = customer
  }

  @Mutation
  setIapToken(token: string){
    this.iapToken = token
  }

  @Mutation
  logOut() {
    this.loggedIn = false
    this.customer = {}
  }
}

import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Customer } from '~/types/types'

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  //   wheels = 2               -state
  //   @Mutation                -mutation
  //   incrWheels(extra: number) {
  //     this.wheels += extra
  //   }
  //   get axles() {            -getter
  //     return this.wheels / 2
  //   }

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

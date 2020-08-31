import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import mymodule from '~/store/mymodule'
import authmodule from '~/store/auth'

let exampleStore: mymodule
let authStore: authmodule

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(mymodule, store)
  authStore = getModule(authmodule, store)
}

export { initialiseStores, exampleStore, authStore }

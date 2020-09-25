import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import mymodule from '~/store/mymodule'
import authmodule from '~/store/auth'
import uimodule from '~/store/ui'


let exampleStore: mymodule
let authStore: authmodule
let uiStore: uimodule

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(mymodule, store)
  authStore = getModule(authmodule, store)
  uiStore = getModule(uimodule, store)
}

export { initialiseStores, exampleStore, authStore, uiStore }

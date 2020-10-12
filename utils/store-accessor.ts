import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import mymodule from '~/store/mymodule'
import authmodule from '~/store/auth'
import uimodule from '~/store/ui'
import cachemodule from '~/store/cache'
import cartmodule from '~/store/cart'

let exampleStore: mymodule
let authStore: authmodule
let uiStore: uimodule
let cacheStore: cachemodule
let cartStore: cartmodule

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(mymodule, store)
  authStore = getModule(authmodule, store)
  uiStore = getModule(uimodule, store)
  cacheStore = getModule(cachemodule, store)
  cartStore = getModule(cartmodule, store)
}

export {
  initialiseStores,
  exampleStore,
  authStore,
  uiStore,
  cacheStore,
  cartStore,
}

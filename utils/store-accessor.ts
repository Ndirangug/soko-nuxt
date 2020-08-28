import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import mymodule from '~/store/mymodule'
import anothermodule from '~/store/anothermodule'

let exampleStore: mymodule
let anotherStore: anothermodule

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(mymodule, store)
  anotherStore = getModule(anothermodule, store)
}

export { initialiseStores, exampleStore, anotherStore }

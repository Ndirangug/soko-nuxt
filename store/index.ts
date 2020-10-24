import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store-accessor'
import { getGoogleCloudIAPAuthToken } from '~/utils/authorization'
import { cartStore } from '~/store'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  // @ts-ignore
  // eslint-disable-next-line no-empty-pattern
  async nuxtServerInit({}, { store, app, $config }) {
    // do it once more like so..
    initialiseStores(store)

    const authToken = await getGoogleCloudIAPAuthToken()
    $config.AUTH_TOKEN = authToken

    app.$cookies.set('AUTH_TOKEN', authToken, {
      path: '/',
      maxAge: 60 * 60,
    })

    const apolloClient = app.apolloProvider.defaultClient

    await cartStore.initializeCartItems({ apolloClient, customerId: 2 })
  },
}

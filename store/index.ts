import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store-accessor'
import { getGoogleCloudIAPAuthHeader } from '~/utils/authorization'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  // @ts-ignore
  // eslint-disable-next-line no-empty-pattern
  async nuxtServerInit({}, { store, app }) {
    // do it once more like so..
    initialiseStores(store)

    const authToken = await getGoogleCloudIAPAuthHeader()
    process.env.AUTH_TOKEN = authToken
    console.log(authToken)

    const _24hoursInSeconds = 60 * 60
    app.$cookies.set('IAP_AUTH_TOKEN', authToken, {
      maxAge: _24hoursInSeconds,
    })
  },
}

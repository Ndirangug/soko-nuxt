import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store-accessor'
import { getGoogleCloudIAPAuthToken } from '~/utils/authorization'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  // @ts-ignore
  // eslint-disable-next-line no-empty-pattern
  async nuxtServerInit({}, { store }) {
    // do it once more like so..
    initialiseStores(store)

    const authToken = await getGoogleCloudIAPAuthToken()
    process.env.AUTH_TOKEN = authToken

  },
}

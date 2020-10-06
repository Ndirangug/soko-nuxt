import { Middleware } from '@nuxt/types'
import { trimTrailingSlash } from '~/utils/custom-trim'

const myaccount: Middleware = ({ route, redirect, store }) => {
  if (
    trimTrailingSlash(route.path) === '/myaccount' ||
    trimTrailingSlash(route.path) === `/${store.$i18n.locale}/myaccount`
  ) {
    return redirect(`/${store.$i18n.locale}/myaccount/overview`)
  }
}

export default myaccount

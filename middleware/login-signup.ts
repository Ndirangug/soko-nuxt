import { Middleware } from '@nuxt/types'
import { trimTrailingSlash } from '~/utils/custom-trim'

const loginSignup: Middleware = ({ route, redirect, store }) => {
  if (
    trimTrailingSlash(route.path) === '/auth' ||
    trimTrailingSlash(route.path) === `/${store.$i18n.locale}/auth`
  ) {
    return redirect(`/${store.$i18n.locale}/auth/login`)
  }
}

export default loginSignup

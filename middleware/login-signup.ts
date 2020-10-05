import { Middleware } from '@nuxt/types'

const loginSignup: Middleware = ({ route, redirect, store }) => {
  if (route.path === '/auth' || route.path === `/${store.$i18n.locale}/auth`) {
    return redirect(`/${store.$i18n.locale}/auth/login`)
  }
}

export default loginSignup

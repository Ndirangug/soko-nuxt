import { Middleware } from '@nuxt/types'

const myaccount: Middleware = ({ route, redirect, store }) => {
  if (
    route.path === '/myaccount' ||
    route.path === `/${store.$i18n.locale}/myaccount`
  ) {
    return redirect(`/${store.$i18n.locale}/myaccount/overview`)
  }
}

export default myaccount

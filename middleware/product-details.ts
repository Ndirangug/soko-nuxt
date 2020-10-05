import { Middleware } from '@nuxt/types'

const productDetails: Middleware = ({ route, redirect, store }) => {
  if (
    route.path === '/product-details' ||
    route.path === `/${store.$i18n.locale}/product-details`
  ) {
    return redirect(`/${store.$i18n.locale}/product-details/description`)
  }
}

export default productDetails

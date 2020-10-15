import { Middleware } from '@nuxt/types'
import { trimTrailingSlash } from '~/utils/custom-trim'

const productDetails: Middleware = ({ route, redirect, store }) => {
  if (
    trimTrailingSlash(route.path) === '/product-details' ||
    trimTrailingSlash(route.path) === `/${store.$i18n.locale}/product-details`
  ) {
    return redirect({
      path: `/${store.$i18n.locale}/product-details/description`,
      query: { ...route.query },
    })
  }
}

export default productDetails

import { auth } from './auth'
import { products } from './products'
import { navigation } from './navigation'
import { allCategories } from './allCategories'
import { blog } from './blog'
import { subscribe } from './subscribe'
import { footer } from './footer'
import { productDetails } from './productDetails'
import { currency } from './currency'
import { links } from './links'
import { home } from './home'
import { about } from './about'

export const sw = {
  auth,
  products,
  // keys to the navigation object should match the keys in the NavDrawer data.icons object
  navigation,
  allCategories,
  blog,
  subscribe,
  footer,
  productDetails,
  currency,
  links,
  home,
  about,
}

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
import { cart } from './cart'
import { configurables } from './configurables'
import { productSuggestions } from './productSuggestions'
import { checkout } from './checkout'
import { help } from './help'
import { forms } from './forms'

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
  cart,
  configurables,
  productSuggestions,
  checkout,
  help,
  forms,
}

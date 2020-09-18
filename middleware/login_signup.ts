import { Middleware } from '@nuxt/types'

const loginSignup: Middleware = ({ route, redirect }) => {
  if (route.path.endsWith('auth/') || route.path.endsWith('auth')) {
    return redirect('/auth/login')
  }
}

export default loginSignup

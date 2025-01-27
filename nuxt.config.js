import colors from 'vuetify/es5/util/colors'
import { messages } from './internationalization/messages/'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Router Extension - adding router middleware
   */
  router: {},
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/axios-accessor.ts', '@/plugins/vuejs-vr.client.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
    [
      '@nuxt/typescript-build',
      {
        typescript: {
          memoryLimit: 768,
        },
        ignoreNotFoundWarnings: false,
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/apollo',
    'nuxt-i18n',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    '@nuxtjs/dayjs',
    [
      'nuxt-env',
      {
        keys: [{ key: 'IAP_TOKEN', default: '' }],
      },
    ],
  ],
  /*
   ** nuxt-i18n module configuration
   ** See https://i18n.nuxtjs.org/basic-usage
   */
  i18n: {
    locales: ['en', 'sw'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages,
    },
  },
  /*
   ** @nuxtjs/dayjs module configuration
   ** See https://github.com/nuxt-community/dayjs-module
   */
  dayjs: {
    locales: ['en-gb', 'sw'],
    defaultLocale: 'en-gb',
    plugins: ['timezone'],
  },
  /*
   ** Apollo module configuration
   ** See https://github.com/nuxt-community/apollo-module
   */
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js',
    },
  },
  styleResources: {
    scss: ['./assets/scss/vars/*.scss', './assets/scss/mixins/*.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/scss/vuetify_variables.scss'],
    icons: {
      iconfont: 'mdiSvg',
    },
    treeShake: {
      loaderOptions: {
        progressiveImages: {
          registerStylesSSR: true,
        },
      },
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.green.darken1,
          accent: colors.green.lighten4,
          secondary: '#A4D9A7',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  /*
   ** Customizing the Progress Bar
   ** See https://nuxtjs.org/api/configuration-loading/#customizing-the-progress-bar
   */
  loading: {
    color: 'black',
    height: '5px',
    continuous: true,
  },

  publicRuntimeConfig: {
    GRAPHQL_ENDPOINT:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:8080/graphql'
        : 'https://soko-graphql.uc.r.appspot.com/graphql',
  },
}

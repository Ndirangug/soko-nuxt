import colors from 'vuetify/es5/util/colors'

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
  // router: {},
  /*
   ** Global CSS
   */
  css: ['@/assets/colors.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/axios-accessor.ts', '@/plugins/vuetify.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
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
      messages: {
        en: {
          links: {
            home: 'Accueil',
            about: 'À propos',
            english: 'Version Anglais',
            french: 'Version Française',
          },
          home: {
            title: 'Bienvenue',
            introduction: "Ceci est un texte d'introduction en Français.",
          },
          about: {
            title: 'À propos',
            introduction:
              "Cette page est faite pour vous donner plus d'informations.",
          },
        },
        sw: {
          links: {
            home: 'Home',
            about: 'About',
            english: 'English version',
            french: 'French version',
          },
          home: {
            title: 'Welcome',
            introduction: 'This is an introduction in English.',
          },
          about: {
            title: 'About',
            introduction: 'This page is made to give you more informations.',
          },
        },
      },
    },
  },
  /*
   ** Apollo module configuration
   ** See https://github.com/nuxt-community/apollo-module
   */
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:9002/graphql',
      },
    },
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
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
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
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['vuex-module-decorators'],
  },
}

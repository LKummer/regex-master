import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Regex Master',
    title: 'Regex Master' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '48x48',
        href: '/regex-master/resources/icon-48.png'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '96x96',
        href: '/regex-master/resources/icon-96.png'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '192x192',
        href: '/regex-master/resources/icon-192.png'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '512x512',
        href: '/regex-master/resources/icon-512.png'
      },
      {
        rel: 'manifest',
        href="/regex-master/manifest.webmanifest"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#0f4c81',
          accent: '#fe7d00',
          info: '#1569b2',
          error: colors.deepOrange.darken1
        }
      }
    },
    treeShake: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    base: '/regex-master'
  }
}

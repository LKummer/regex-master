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
    '@nuxtjs/pwa'
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
  ** Nuxt PWA configuration
  */
  pwa: {
    manifest: {
      description: 'Multi regular expression matching utility.',
      start_url: '/regex-master/',
      scope: '/regex-master/',
      display: 'standalone',
      background_color: '#fafafa',
      theme_color: '#0f4c81',
      icons: [
        {
          src: '/regex-master/resources/icon-48.png',
          sizes: '48x48',
          type: 'image/png'
        },
        {
          src: '/regex-master/resources/icon-96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: '/regex-master/resources/icon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/regex-master/resources/icon-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
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

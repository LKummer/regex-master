<template>
  <v-app>
    <v-content>
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title
          class="mr-4"
        >
          Regex Master
        </v-toolbar-title>
        <v-toolbar-items>
          <v-btn
            to="/"
            text
          >
            Home
          </v-btn>
        </v-toolbar-items>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            to="/about"
            text
          >
            About
          </v-btn>
          <v-btn text>
            Star on Github!
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container fluid>
        <v-fade-transition>
          <nuxt />
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

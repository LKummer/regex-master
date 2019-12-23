<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      disable-resize-watcher
    >
      <v-list>
        <v-list-item
          v-for="(item, index) of items"
          :key="index"
          :to="item.to"
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item
          :href="source.to"
        >
          <v-list-item-title>
            <v-icon left>
              {{ source.icon }}
            </v-icon>
            {{ source.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-toolbar
        dark
        color="primary"
      >
        <v-btn
          @click="drawer = !drawer"
          text
          icon
          class="d-flex d-sm-none"
        >
          <v-icon>
            mdi-menu
          </v-icon>
        </v-btn>
        <v-toolbar-title
          class="mr-4"
        >
          Regex Master
        </v-toolbar-title>
        <v-toolbar-items
          class="d-none d-sm-flex"
        >
          <v-btn
            v-for="(item, index) of items"
            :key="index"
            :to="item.to"
            text
          >
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
        <v-spacer />
        <v-toolbar-items
          class="d-none d-sm-flex"
        >
          <v-btn
            :href="source.to"
            text
          >
            {{ source.title }}
            <v-icon>{{ source.icon }}</v-icon>
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
      drawer: false,
      items: [
        {
          title: 'Matcher',
          to: '/'
        },
        {
          title: 'About',
          to: '/about'
        }
      ],
      source: {
        title: 'Star on Github!',
        to: 'https://github.com/LKummer/regex-master',
        icon: 'mdi-github-circle'
      }
    }
  }
}
</script>

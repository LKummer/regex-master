<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      disable-resize-watcher
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="title"
            >
              Regex Master
            </v-list-item-title>
            <v-list-item-subtitle>
              Multi matching regex utility.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider
          class="mb-4"
        />
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
        class="d-none d-sm-block"
      >
        <v-toolbar-title
          class="mr-4"
        >
          Regex Master
        </v-toolbar-title>
        <v-toolbar-items>
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
        <v-toolbar-items>
          <v-btn
            :href="source.to"
            text
          >
            {{ source.title }}
            <v-icon>{{ source.icon }}</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-toolbar
        bottom
        width="100%"
        class="fixed d-flex d-sm-none"
        color="primary"
        dark
      >
        <v-btn
          @click="drawer = !drawer"
          text
          rounded
        >
          <v-icon>
            mdi-menu
          </v-icon>
          Menu
        </v-btn>
      </v-toolbar>

      <v-container fluid>
        <v-fade-transition>
          <nuxt />
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  z-index: 10;
}
</style>

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

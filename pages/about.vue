<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-card>
      <v-card-text>
        <p>
          When looking around for a similar tool, it seemed like regex testers
          that match against multiple inputs are rare. So I made one myself.
        </p>
        <p>
          This progressive web app is powered by
          <v-chip
            link
            small
            href="https://vuejs.org/"
          >
            Vue
          </v-chip>
          and built using
          <v-chip
            link
            small
            href="https://nuxtjs.org/"
          >
            Nuxt
          </v-chip>
          and
          <v-chip
            link
            small
            href="https://vuetifyjs.com/"
          >
            Vuetify
          </v-chip>
          . It is free and open source with no advertisements or trackers.
        </p>
        <p class="mt-4 text-center">
          Check out the source code!
          <v-chip
            link
            href="https://github.com/LKummer/regex-master"
          >
            <v-icon left>
              mdi-github-circle
            </v-icon>
            regex-master
          </v-chip>
        </p>
        <v-divider />
        <p class="mt-4 text-center">
          Check out my Github!
          <v-chip
            link
            href="https://github.com/LKummer/"
          >
            <v-icon left>
              mdi-github-circle
            </v-icon>
            LKummer
          </v-chip>
        </p>
        <p class="mb-0 text-center">
          Made in the Middle East with
          <v-icon
            large
            color="red"
          >
            mdi-heart
          </v-icon>
        </p>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  head () {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About the Regex Master application.'
        }
      ]
    }
  }
}
</script>

<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <regex-panel />
  </v-layout>
</template>

<script>
import RegexPanel from '~/components/RegexPanel.vue'

export default {
  components: {
    RegexPanel
  },
  head () {
    return {
      title: 'Regex Matching',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Multi input JS regex matching web app.'
        }
      ]
    }
  }
}
</script>

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
  }
}
</script>

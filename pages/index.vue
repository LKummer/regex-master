<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <regex-panel />
    </v-flex>
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

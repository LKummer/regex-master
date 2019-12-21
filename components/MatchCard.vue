<template>
  <v-card>
    <v-card-actions class="pb-0">
      <v-spacer />
      <v-btn
        @click="$emit('close')"
        text
        icon
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text class="pt-0">
      <v-text-field
        v-model="input_value"
        condensed
        hide-details
        class="pt-0"
      />
      <v-alert
        v-if="error"
        type="info"
        dense
        class="mt-4 mb-0"
      >
        {{ error }}
      </v-alert>
      <div v-else>
        <v-chip
          v-for="(match, index) in matches"
          :key="index"
          label
          color="primary"
          class="mt-4 mb-0 mr-4 text-center headline"
        >
          {{ match }}
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    regex: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    input_value: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    },
    matches: {
      get () {
        return this.value.match(new RegExp(this.regex, 'g'))
      }
    },
    error () {
      if (!this.regex) {
        return 'Input a regular expression at the top card.'
      } else if (!this.value) {
        return 'Input a string for matching.'
      } else if (!this.matches) {
        return 'No matches found.'
      }
      return ''
    }
  }
}
</script>

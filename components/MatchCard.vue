<template>
  <v-card>
    <v-card-actions>
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
      <v-textarea
        v-model="input_value"
        rows="1"
        auto-grow
        condensed
        hide-details
        filled
      />
      <v-alert
        v-if="error"
        :type="error.type"
        :outlined="error.outlined"
        dense
        class="mt-4 mb-0"
      >
        {{ error.message }}
      </v-alert>
      <div
        v-else
        class="mr-n4"
      >
        <v-chip
          v-for="(match, index) in matches"
          :key="index"
          label
          color="primary"
          class="mt-4 mb-0 mr-4 headline"
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
      type: Object,
      default () {
        return {
          string: '',
          flags: ''
        }
      }
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
    regex_or_undefined () {
      // Returns undefined when the regex string is invalid.
      try {
        return RegExp(this.regex.string, this.regex.flags)
      } catch {
        return undefined
      }
    },
    matches () {
      return this.value.match(this.regex_or_undefined)
    },
    error () {
      if (!this.value) {
        return {
          message: 'Input a string for matching.',
          type: 'info'
        }
      } else if ((!this.matches) || (!this.regex_or_undefined) || (!this.regex.string)) {
        return {
          message: 'No matches found.',
          type: 'info',
          outlined: true
        }
      }
      return ''
    }
  }
}
</script>

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
      <p
        v-if="!regex"
        class="mt-3 mb-0 text-center headline"
      >
        Input a regular expression at the top card.
      </p>
      <p
        v-else-if="!value"
        class="mt-3 mb-0 text-center headline"
      >
        Input a value.
      </p>
      <p
        v-else-if="!matches"
        class="mt-3 mb-0 text-center headline"
      >
        No matches found.
      </p>
      <p
        v-for="(match, index) in matches"
        :key="index"
        class="mt-3 mb-0 text-center headline"
      >
        {{ match }}
      </p>
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
        return this.value.match(new RegExp(this.regex))
      }
    }
  }
}
</script>

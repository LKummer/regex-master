<template>
  <v-card>
    <v-card-text
      class="pb-2"
    >
      Input any JS regular expression.
      <v-text-field
        v-model="regex_string"
        :suffix="'/' + regex_flags_string"
        prefix="/"
      />
      The inputs in the lower cards are matched against the regular expression.
    </v-card-text>
    <v-card-actions
      class="pt-0"
    >
      <v-spacer />
      <v-btn
        @click="editing_flags = !editing_flags"
        text
      >
        Flags
        <v-icon>
          mdi-chevron-{{ editing_flags ? 'up' : 'down' }}
        </v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="editing_flags">
        <v-divider />
        <v-card-text>
          Flags can be edited through this panel.
          <v-checkbox
            v-for="(flag, index) of flags"
            :key="index"
            v-model="flag.enabled"
            :label="`${flag.flag} - ${flag.label}`"
            dense
            hide-details
          />
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          string: '',
          flags: ''
        }
      }
    }
  },
  data () {
    return {
      flags: [
        { label: 'Global', flag: 'g', enabled: true },
        { label: 'Case Insensitive', flag: 'i', enabled: false },
        { label: 'Multi Line', flag: 'm', enabled: false }
      ],
      editing_flags: false
    }
  },
  computed: {
    regex_value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    regex_string: {
      get () {
        return this.regex_value.string
      },
      set (value) {
        this.regex_value = {
          string: value,
          flags: this.regex_value.flags
        }
      }
    },
    regex_flags_string: {
      get () {
        return this.regex_value.flags
      },
      set (value) {
        this.regex_value = {
          string: this.regex_value.string,
          flags: value
        }
      }
    }
  },
  watch: {
    flags: {
      handler (value) {
        this.regex_flags_string = this.flags.reduce((acc, cur) => {
          return cur.enabled ? acc + cur.flag : acc
        }, '')
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

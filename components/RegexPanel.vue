<template>
  <div>
    <regex-card
      v-model="regex"
      class="mb-3"
    />
    <v-slide-y-reverse-transition
      group
      hide-on-leave
    >
      <match-card
        v-for="(input, index) in match_inputs"
        :key="input.key"
        :regex="regex"
        @close="delete_card(index)"
        v-model="input.string"
        class="mb-3"
      />
      <p
        key="hint"
        v-if="match_inputs.length === 0"
        class="mt-0 mb-3 text-center headline"
      >
        Open a match card using the plus button
      </p>
      <div
        key="create"
        class="text-center mb-12 mb-sm-0"
      >
        <v-btn
          @click="create_card"
          fab
          class="d-none d-sm-inline"
          color="accent"
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </div>
    </v-slide-y-reverse-transition>
    <v-btn
      @click="create_card"
      fab
      fixed
      bottom
      right
      large
      class="high-z d-flex d-sm-none"
      color="accent"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.high-z {
  z-index: 100;
}
</style>

<script>
import MatchCard from '~/components/MatchCard'
import RegexCard from '~/components/RegexCard'

export default {
  components: {
    MatchCard,
    RegexCard
  },
  data () {
    return {
      regex: {
        string: '',
        flags: 'g'
      },
      match_inputs: [],
      // Used to key the version of storage data.
      data_key: 'regex-master-data-v1'
    }
  },
  watch: {
    regex: {
      handler (value) {
        window.sessionStorage.regex = JSON.stringify(value)
      },
      deep: true
    },
    match_inputs: {
      handler (value) {
        window.sessionStorage.match_inputs = JSON.stringify(value)
      },
      deep: true
    }
  },
  mounted () {
    // Check if the data version is correct.
    if (window.sessionStorage.data_key === this.data_key) {
      if (window.sessionStorage.regex) {
        this.regex = JSON.parse(window.sessionStorage.regex)
      }
      if (window.sessionStorage.match_inputs) {
        this.match_inputs = JSON.parse(window.sessionStorage.match_inputs)
      }
    } else {
      // If the data format is a different version, erase it.
      window.sessionStorage.clear()
      window.sessionStorage.data_key = this.data_key
    }
  },
  methods: {
    delete_card (index) {
      this.match_inputs.splice(index, 1)
    },
    create_card () {
      this.match_inputs.push({ string: '', key: this.make_key() })
    },
    make_key () {
      return Array.from(
        window.crypto.getRandomValues(new Uint16Array(2)),
        number => number.toString(16)
      ).reduce((acc, cur) => acc + cur, '')
    }
  }
}
</script>

<template>
  <div>
    <regex-card
      v-model="regex"
      class="mb-3"
    />
    <v-fade-transition
      group
      hide-on-leave
    >
      <match-card
        v-for="(input, index) in match_inputs"
        :key="index"
        :regex="regex"
        @close="delete_card(index)"
        v-model="input.string"
        class="mb-3"
      />
      <p
        key="-1"
        v-if="match_inputs.length === 0"
        class="mt-0 mb-3 text-center headline"
      >
        Open a match card by pressing the button.
      </p>
      <div
        key="-2"
        class="text-center"
      >
        <v-btn
          @click="create_card"
          fab
          color="primary"
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </div>
    </v-fade-transition>
  </div>
</template>

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
        string: '\\.(png|jpe?g)$',
        flags: 'g'
      },
      match_inputs: [
        { string: 'hello_world.png' },
        { string: 'hello_world.jpeg' },
        { string: 'hello_world.jpg' },
        { string: '' }
      ]
    }
  },
  methods: {
    delete_card (index) {
      this.match_inputs.splice(index, 1)
    },
    create_card () {
      this.match_inputs.push({ string: '' })
    }
  }
}
</script>

<template>
  <div>
    <v-card class="mb-3">
      <v-card-text>
        Input any JS regular expression.
        <v-text-field
          v-model="regex"
          prefix="/"
          suffix="/g"
        />
        The regular expression is matched against the bottom cards.
      </v-card-text>
    </v-card>
    <match-card
      v-for="(input, index) in match_inputs"
      :key="index"
      :regex="regex"
      @close="delete_card(index)"
      v-model="input.string"
      class="mb-3"
    />
    <p
      v-if="match_inputs.length === 0"
      class="mt-0 mb-3 text-center headline"
    >
      Open a match card by pressing the button.
    </p>
    <div class="text-center">
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
  </div>
</template>

<script>
import MatchCard from '~/components/MatchCard'

export default {
  components: {
    MatchCard
  },
  data () {
    return {
      regex: '',
      match_inputs: [
        { string: 'input_a' },
        { string: 'input_b' },
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

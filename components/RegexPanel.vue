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
    </v-slide-y-reverse-transition>
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
        { string: 'hello_world.png', key: '8528d031' },
        { string: 'hello_world.jpeg', key: '430849c7' },
        { string: 'hello_world.jpg', key: '5aaf5ebc' },
        { string: '', key: '62aace96' }
      ]
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

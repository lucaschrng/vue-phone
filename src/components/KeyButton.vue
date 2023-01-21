<template>
  <button @click="addDigit(digit)">
    <span :class="digit === '*' ? 'star' : digit === '#' ? 'number' : ''">{{
      digit
    }}</span>
    <div v-if="digit !== '*' && digit !== '#'" class="letters">
      <span
        v-for="(letter, index) in letters"
        v-bind:key="index"
        :class="letter === '+' ? 'plus' : ''"
      >
        {{ letter }}
      </span>
    </div>
  </button>
</template>
<script>
export default {
  name: 'KeyButton',
  props: ['digit', 'letters'],
  computed: {
    callingNumber() {
      return this.$store.state.callingNumber;
    },
  },
  methods: {
    addDigit(digit) {
      this.$store.commit('addDigit', digit);
    },
  },
};
</script>
<style scoped>
button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  font-size: 2rem;
  font-weight: 500;
  border: none;
  width: 78px;
  height: 78px;
  background-color: #e5e5e5;
  filter: brightness(0.95);
  cursor: pointer;
}

button span {
  line-height: 2rem;
}

button .star {
  font-size: 3rem;
  translate: 0 25%;
}

button .number {
  font-weight: 600;
}

.letters {
  height: 0.6rem;
  display: flex;
  justify-content: center;
  gap: 3px;
  font-size: 0.6rem;
  font-weight: 600;
  width: 100%;
}

.letters span {
  height: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letters span.plus {
  font-size: 1rem;
}
</style>

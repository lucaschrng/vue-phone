<template>
  <button @click="addDigit(digit)">
    <span>{{ digit }}</span>
    <span class="letters">{{ letters }}</span>
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
  position: relative;
  border-radius: 1000px;
  font-size: 2rem;
  border: none;
  width: 96px;
  height: 96px;
}
.letters {
  font-size: 0.8rem;
  opacity: 0.8;
  margin-bottom: 0.9rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
}
</style>

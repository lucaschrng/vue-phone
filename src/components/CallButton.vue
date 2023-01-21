<template>
  <button @click="addEntry" class="call-button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'CallButton',
  props: ['id', 'name', 'surname', 'phoneNumber', 'callType'],
  computed: {
    entries() {
      return this.$store.state.entries;
    },
  },
  methods: {
    addEntry() {
      let date = new Date();
      this.$store.commit('addEntry', {
        id: this.id,
        name: this.name,
        surname:
          this.name === '' ? (this.surname === '' ? '' : this.surname) : '',
        phoneNumber: this.phoneNumber,
        callType: this.callType,
        time: date.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        date: date.toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
      });
    },
  },
};
</script>
<style scoped>
button {
  font-size: 1rem;
  border: none;
  cursor: pointer;
}
</style>

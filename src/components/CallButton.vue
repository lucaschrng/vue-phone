<template>
  <button @click="addEntry" class="call-button">
    <ion-icon name="call"></ion-icon>
  </button>
</template>
<script>
export default {
  name: 'CallButton',
  props: ['name'],
  computed: {
    entries() {
      return this.$store.state.entries;
    },
  },
  methods: {
    addEntry() {
      let date = new Date();
      this.$store.commit('addEntry', {
        name: this.name,
        time: date.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        date: date.toLocaleDateString('fr-FR', { dateStyle: 'full' }),
      });
    },
  },
};
</script>
<style scoped></style>

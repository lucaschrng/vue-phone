<template>
  <button @click="deleteDigit"><ion-icon name="backspace"></ion-icon></button>
</template>
<script>
export default {
  name: 'DeleteButton',
  methods: {
    deleteDigit() {
      this.$store.commit('deleteDigit');
    },
  },
};
</script>
<style scoped></style>

<template>
  <div>
    <img @click="deleteDigit" src="/img/delete.left.fill.svg" alt="" />
  </div>
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
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 50%;
  filter: brightness(0.95);
  cursor: pointer;
}
</style>

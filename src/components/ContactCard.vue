<template>
  <span @click="setDisplayedContactId" class="contact">
    <div v-if="name !== '' || surname !== ''">
      <span class="name">{{ name + ' ' }}</span>
      <span class="surname">{{ surname }}</span>
    </div>
    <div v-else>
      <div class="name">
        <span v-for="(digit, index) in phoneNumber" v-bind:key="index">
          {{ digit + (index % 2 === 1 ? ' ' : '') }}
        </span>
      </div>
    </div>
  </span>
</template>
<script>
export default {
  name: 'ContactCard',
  components: {},
  props: ['id', 'name', 'surname', 'phoneNumber'],
  methods: {
    setDisplayedContactId() {
      this.$store.commit('setDisplayedContactId', this.id);
    },
  },
};
</script>
<style scoped>
.contact {
  margin: 0 1rem;
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b2b2b2;
  font-size: 1.125rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.contact .surname {
  font-weight: 600;
}
</style>

<template>
  <p class="calling-number">{{ callingNumber }}</p>
  <div v-if="contacts.length > 0" class="calling-contact">
    <span>Appeller {{ contacts[0].name }}</span>
  </div>
  <div v-else class="calling-contact">
    <span></span>
  </div>
  <div class="numPad-container">
    <div class="numPad">
      <KeyButton :digit="1" :letters="''" />
      <KeyButton :digit="2" :letters="'ABC'" />
      <KeyButton :digit="3" :letters="'DEF'" />
      <KeyButton :digit="4" :letters="'GHI'" />
      <KeyButton :digit="5" :letters="'JKL'" />
      <KeyButton :digit="6" :letters="'MNO'" />
      <KeyButton :digit="7" :letters="'PQR'" />
      <KeyButton :digit="8" :letters="'STU'" />
      <KeyButton :digit="9" :letters="'VWXY'" />
      <CallButton
        :name="contacts.length > 0 ? contacts[0].name : callingNumber"
      />
      <KeyButton :digit="0" :letters="'*'" />
      <DeleteDigitButton />
    </div>
  </div>
</template>
<script>
import KeyButton from '@/components/KeyButton.vue';
import CallButton from '@/components/CallButton.vue';
import DeleteDigitButton from '@/components/DeleteDigitButton.vue';
export default {
  name: 'ClavierVue',
  components: {
    CallButton,
    KeyButton,
    DeleteDigitButton,
  },
  computed: {
    callingNumber() {
      return this.$store.state.callingNumber;
    },
    contacts() {
      return this.$store.state.contacts.filter(
        (contact) => contact.phoneNumber === this.callingNumber
      );
    },
  },
};
</script>
<style scoped>
.numPad-container {
  display: flex;
  justify-content: center;
}
.numPad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: min-content;
  gap: 0.5rem;
}
button {
  position: relative;
  border-radius: 1000px;
  font-size: 2rem;
  border: none;
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.call-button {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.1);
}
.calling-number {
  font-size: 2rem;
  width: 100%;
  text-align: center;
  height: 3rem;
}
.calling-contact {
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  opacity: 0.9;
  height: 3rem;
}
</style>

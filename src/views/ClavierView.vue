<template>
  <p class="calling-number">
    <span v-for="(digit, index) in callingNumber" v-bind:key="index">
      {{ digit + (index % 2 === 1 ? ' ' : '') }}
    </span>
  </p>
  <div
    :class="'calling-contact' + (callingNumber.length === 10 ? ' active' : '')"
  >
    <div v-if="contacts.length > 0">
      <span v-if="contacts[0].name !== ''">{{ contacts[0].name }}</span>
      <div v-else>
        <span
          v-for="(digit, index) in contacts[0].phoneNumber"
          v-bind:key="index"
        >
          {{ digit + (index % 2 === 1 ? ' ' : '') }}
        </span>
      </div>
      <span class="phone-type">portable</span>
    </div>
    <div v-if="contacts.length === 0 && callingNumber.length === 10">
      <span @click="toggleForm" class="add-contact">Ajouter ce numéro</span>
    </div>
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
      <KeyButton :digit="'*'" />
      <KeyButton :digit="0" :letters="'+'" />
      <KeyButton :digit="'#'" />
      <CallButton
        :id="contacts.length > 0 ? contacts[0].id : ''"
        :name="contacts.length > 0 ? contacts[0].name : callingNumber"
        :surname="contacts.length > 0 ? contacts[0].surname : ''"
        :phoneNumber="
          contacts.length > 0
            ? contacts[0].name === ''
              ? contacts[0].phoneNumber
              : ''
            : ''
        "
        :callType="'phone'"
      >
        <div class="call-button">
          <img src="/img/phone.fill.svg" alt="" />
        </div>
      </CallButton>
      <DeleteDigitButton />
    </div>
  </div>
  <transition name="slideUp">
    <ContactForm v-if="showForm" :phoneNumber="callingNumber" />
  </transition>
</template>
<script>
import KeyButton from '@/components/KeyButton.vue';
import DeleteDigitButton from '@/components/DeleteDigitButton.vue';
import CallButton from '@/components/CallButton.vue';
import ContactForm from '@/components/ContactForm.vue';
export default {
  name: 'ClavierVue',
  components: {
    KeyButton,
    DeleteDigitButton,
    CallButton,
    ContactForm,
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
    showForm() {
      return this.$store.state.showForm;
    },
  },
  methods: {
    toggleForm() {
      this.$store.commit('toggleForm');
    },
  },
  created() {
    document.title = 'iPhone - Clavier';
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
  gap: 18px;
}
.call-button {
  background-color: #65c466;
  height: 78px;
  width: 78px;
  border-radius: 10000px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2/3;
}

.call-button img {
  filter: invert();
  height: 50%;
}
.calling-number {
  font-size: 2rem;
  width: 100%;
  text-align: center;
  height: 3rem;
  margin-top: 2rem;
}
.calling-contact {
  font-size: 1.25rem;
  opacity: 0.9;
  height: 6rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.calling-contact > div {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.calling-contact .phone-type {
  font-weight: 600;
}

.calling-contact.active {
  opacity: 1;
}

.add-contact {
  color: rgb(0, 122, 255);
  cursor: pointer;
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 0.5s ease-in-out;
}

.slideUp-enter-from,
.slideUp-leave-to {
  transform: translateY(100vh);
}
</style>

<template>
  <div class="create-contact-page">
    <div class="create-contact-bar">
      <button @click="toggleForm" to="/contacts" class="cancel-button">
        Annuler
      </button>
      <span>Nouveau contact</span>
      <button @click="addContact" class="validate">OK</button>
    </div>
    <div class="contact-img__container">
      <div class="contact-img">
        <img
          v-if="newContact.name === '' && newContact.surname === ''"
          src="/img/person.crop.circle.fill.svg"
          alt=""
        />
        <span v-else class="contact-img">
          {{ newContact.name.slice(0, 1) + newContact.surname.slice(0, 1) }}
        </span>
      </div>
    </div>
    <form>
      <input type="text" placeholder="Prénom" v-model="newContact.name" />
      <input
        type="text"
        placeholder="Nom"
        v-model="newContact.surname"
        class="surname-input"
      />
      <input
        type="text"
        placeholder="Téléphone"
        maxlength="10"
        v-model="newContact.phoneNumber"
        class="phone-input"
      />
    </form>
  </div>
</template>
<script>
export default {
  name: 'ContactForm',
  props: ['phoneNumber'],
  data() {
    return {
      newContact: {
        id:
          parseInt(
            this.$store.state.contacts[this.$store.state.contacts.length - 1].id
          ) + 1,
        name: '',
        surname: '',
        phoneNumber: this.phoneNumber ? this.phoneNumber : '',
      },
    };
  },
  methods: {
    addContact() {
      this.$store.commit('addContact', this.newContact);
      this.$store.commit('toggleForm');
    },
    toggleForm() {
      this.$store.commit('toggleForm');
    },
  },
};
</script>
<style scoped>
.create-contact-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 4rem;
  background-color: #f2f2f6;
}
.create-contact-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 1rem;
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.cancel-button {
  color: rgb(0, 122, 255);
  text-decoration: none;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  width: fit-content;
}

.create-contact-bar span {
  grid-column: 2/4;
  text-align: center;
  font-weight: 600;
}

.create-contact-bar button.validate {
  border: none;
  color: rgb(0, 122, 255);
  font-weight: 600;
  width: fit-content;
  justify-self: end;
  cursor: pointer;
  font-size: 1.125rem;
}

.contact-img__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

.contact-img {
  height: 172px;
  width: 172px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000000px;
  background: linear-gradient(
    0deg,
    rgba(134, 138, 147, 1) 0%,
    rgba(166, 170, 182, 1) 100%
  );
  color: white;
  font-size: 5rem;
  font-family: 'SF Pro Rounded', sans-serif;
  text-transform: uppercase;
}

.contact-img img {
  height: 120%;
  mix-blend-mode: screen;
}

form {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
}

form input {
  padding: 0.5rem 1rem;
  border-radius: 0;
  border: none;
  border-top: 1px solid #b2b2b2;
  outline: none;
  font-size: 1.125rem;
}

form input.surname-input {
  border-bottom: 1px solid #b2b2b2;
}

form input.phone-input {
  margin-top: 2rem;
  border-bottom: 1px solid #b2b2b2;
}
</style>

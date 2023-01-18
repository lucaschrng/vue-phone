<template>
  <div class="formContainer">
    <form @submit.prevent="addContact">
      <label for="name">Nom du contact</label>
      <input type="text" name="name" v-model="newContact.name" />
      <label for="phoneNumber">Numéro</label>
      <input type="text" name="phoneNumber" v-model="newContact.phoneNumber" />
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      newContact: {
        name: '',
        phoneNumber: '',
      },
    };
  },
  methods: {
    addContact() {
      this.$store.commit('addContact', this.newContact);
    },
  },
};
</script>
<style scoped>
.formContainer {
  display: flex;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 3px;
  margin-top: 2rem;
}
label {
  font-size: 1.25rem;
  font-weight: 500;
}

input {
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

button {
  font-size: 1.25rem;
  padding: 0.5rem;
  cursor: pointer;
}
</style>

import { createStore } from 'vuex';

export default createStore({
  state: {
    contacts: [
      {
        name: 'Lucas',
        phoneNumber: '0643024206',
      },
      {
        name: 'Fanny',
        phoneNumber: '0634534197',
      },
      {
        name: 'Nicolas',
        phoneNumber: '0646393950',
      },
    ],
    entries: [
      {
        name: 'Lucas',
        time: '12:23',
        date: 'jeudi 12 janvier 2023',
      },
      {
        name: 'Lucas',
        time: '12:23',
        date: 'samedi 24 décembre 2022',
      },
      {
        name: 'Lucas',
        time: '12:23',
        date: 'mercredi 16 novembre 2022',
      },
    ],
    callingNumber: '',
  },
  getters: {},
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact);
    },
    addEntry(state, entry) {
      state.entries.push(entry);
    },
    addDigit(state, digit) {
      if (state.callingNumber.length < 10) state.callingNumber += digit;
    },
    deleteDigit(state) {
      if (state.callingNumber.length > 0)
        state.callingNumber = state.callingNumber.slice(0, -1);
    },
  },
  actions: {},
  modules: {},
});

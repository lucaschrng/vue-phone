import { createStore } from 'vuex';

export default createStore({
  state: {
    contacts: [
      {
        id: '1',
        name: 'Lucas',
        surname: 'Charoing',
        phoneNumber: '0643024206',
      },
      {
        id: '2',
        name: 'Fanny',
        surname: 'Gautier',
        phoneNumber: '0634534197',
      },
      {
        id: '3',
        name: 'Nicolas',
        surname: 'de Garrigues',
        phoneNumber: '0646393950',
      },
      {
        id: '4',
        name: 'Alex',
        surname: 'G',
        phoneNumber: '0665282856',
      },
      {
        id: '5',
        name: 'Hoai-Lan',
        surname: 'Dinh-Vu',
        phoneNumber: '0672630226',
      },
      {
        id: '6',
        name: 'JID',
        surname: '',
        phoneNumber: '0627592559',
      },
      {
        id: '7',
        name: 'Léonard',
        surname: '',
        phoneNumber: '0662847295',
      },
      {
        id: '8',
        name: 'Julien',
        surname: '',
        phoneNumber: '0632579965',
      },
      {
        id: '9',
        name: 'Alexandre',
        surname: 'Zerah',
        phoneNumber: '0668264972',
      },
      {
        id: '10',
        name: 'Alexis',
        surname: 'Bougy',
        phoneNumber: '0682645722',
      },
    ],
    entries: [
      {
        name: 'Lucas',
        surname: 'Charoing',
        callType: 'phone',
        time: '12:23',
        date: '12/01/2023',
      },
      {
        name: 'Fanny',
        surname: 'Gautier',
        callType: 'video',
        time: '08:54',
        date: '24/12/2022',
      },
      {
        name: 'Nicolas',
        surname: 'de Garrigues',
        callType: 'phone',
        time: '21:13',
        date: '16/11/2022',
      },
      {
        name: 'Alex',
        surname: 'G',
        callType: 'phone',
        time: '19:18',
        date: '16/11/2022',
      },
      {
        name: 'JID',
        surname: '',
        callType: 'phone',
        time: '15:22',
        date: '21/01/2023',
      },
      {
        name: '',
        surname: '',
        callType: 'phone',
        phoneNumber: '0656739292',
        time: '15:22',
        date: '21/01/2023',
      },
    ],
    callingNumber: '',
    showForm: false,
    displayedContactId: null,
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
    toggleForm(state) {
      state.showForm = !state.showForm;
    },
    setDisplayedContactId(state, id) {
      state.displayedContactId = id;
    },
  },
  actions: {},
  modules: {},
});

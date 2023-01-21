<template>
  <div
    :class="
      showForm || displayedContactId
        ? 'contacts-page zoom-out'
        : 'contacts-page'
    "
  >
    <div class="add-contact">
      <img @click="toggleForrm" src="/img/plus.svg" alt="" class="add-button" />
    </div>
    <h2>Contacts</h2>
    <div class="contacts">
      <div v-for="(contact, index) in contacts" :key="contact.id">
        <span
          v-if="
            (contact.name !== ''
              ? contact.name.slice(0, 1)
              : contact.surname !== ''
              ? contact.surname.slice(0, 1)
              : '') !==
            (index - 1 in contacts
              ? contacts[index - 1].name !== ''
                ? contacts[index - 1].name.slice(0, 1)
                : contacts[index - 1].surname !== ''
                ? contacts[index - 1].surname.slice(0, 1)
                : ''
              : '')
          "
          class="index-letter"
        >
          {{
            contact.name !== ''
              ? contact.name.slice(0, 1)
              : contact.surname.slice(0, 1)
          }}
        </span>
        <span
          v-else-if="
            contact.name === '' &&
            contact.surname === '' &&
            (index - 1 in contacts
              ? contacts[index - 1] !== '' && contacts[index - 1].surname !== ''
              : true)
          "
          class="index-letter"
        >
          #
        </span>
        <ContactCard
          :id="contact.id"
          :name="contact.name"
          :surname="contact.surname"
          :phoneNumber="contact.phoneNumber"
        />
      </div>
      <p class="contacts-count">{{ contacts.length + ' contacts' }}</p>
    </div>
  </div>
  <transition name="slideUp">
    <ContactForm v-if="showForm" />
  </transition>
  <transition name="slide">
    <ContactPage v-if="displayedContactId" />
  </transition>
</template>
<script>
import ContactCard from '@/components/ContactCard.vue';
import ContactForm from '@/components/ContactForm.vue';
import ContactPage from '@/components/ContactPage.vue';
export default {
  name: 'ContactsView',
  components: {
    ContactCard,
    ContactForm,
    ContactPage,
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
        .slice()
        .sort((a, b) =>
          (a.name + a.surname !== '' ? a.name + a.surname : a.phoneNumber) >
          (b.name + b.surname !== '' ? b.name + b.surname : b.phoneNumber)
            ? 1
            : -1
        );
    },
    showForm() {
      return this.$store.state.showForm;
    },
    displayedContactId() {
      return this.$store.state.displayedContactId;
    },
  },
  methods: {
    toggleForrm() {
      this.$store.commit('toggleForm');
    },
  },
};
</script>
<style scoped>
.contacts-page {
  transition: all 0.3s ease;
}

.contacts-page.zoom-out {
  transform: scale(0.9);
}

h2 {
  font-size: 2rem;
  line-height: 3.5rem;
  margin: 0 1rem;
  position: relative;
}

.contacts {
  overflow: scroll;
  height: 618px;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.contacts::-webkit-scrollbar {
  display: none;
}

.index-letter {
  margin: 0 1rem;
  padding-bottom: 3px;
  height: 48px;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #b2b2b2;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
}

.add-contact {
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 1rem;
}

.add-contact img {
  height: 1.5rem;
  filter: invert(31%) sepia(58%) saturate(3583%) hue-rotate(200deg)
    brightness(101%) contrast(108%);
  cursor: pointer;
}

.contacts-count {
  text-align: center;
  padding: 1rem 0;
  font-weight: 600;
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 0.5s ease-in-out;
}

.slideUp-enter-from,
.slideUp-leave-to {
  transform: translateY(100vh);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>

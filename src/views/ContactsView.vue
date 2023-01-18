<template>
  <div class="contacts">
    <div v-for="contact in contacts" :key="contact.name">
      <ContactCard :name="contact.name" :phoneNumber="contact.phoneNumber" />
    </div>
    <ContactForm />
  </div>
</template>
<script>
import ContactCard from '@/components/ContactCard.vue';
import ContactForm from '@/components/ContactForm.vue';
export default {
  name: 'ContactsView',
  components: {
    ContactCard,
    ContactForm,
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
};
</script>
<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 2rem;
}
</style>

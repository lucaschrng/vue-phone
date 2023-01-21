<template>
  <div class="contact-page">
    <div class="contact-bar">
      <span @click="resetDisplayedContact" class="contact-link">
        <img src="/img/chevron.left.svg" alt="" />
        Contacts
      </span>
      <span>Modifier</span>
    </div>
    <div class="contact-img__container">
      <div class="contact-img">
        <img
          v-if="contact.name === '' && contact.surname === ''"
          src="/img/person.crop.circle.fill.svg"
          alt=""
        />
        {{ contact.name.slice(0, 1) + contact.surname.slice(0, 1) }}
      </div>
      <span class="name">{{ contact.name + ' ' + contact.surname }}</span>
    </div>
    <div class="actions__container">
      <div class="action-button">
        <img src="/img/message.fill.svg" alt="" /><span>message</span>
      </div>
      <CallButton
        :id="contact.id"
        :name="contact.name"
        :surname="contact.surname"
        :phoneNumber="contact.phoneNumber"
        :callType="'phone'"
        class="action-button active"
      >
        <img src="/img/phone.fill.svg" alt="" /><span>appel</span>
      </CallButton>
      <CallButton
        :id="contact.id"
        :name="contact.name"
        :surname="contact.surname"
        :phoneNumber="contact.phoneNumber"
        :callType="'video'"
        class="action-button active"
      >
        <img src="/img/video.fill.svg" alt="" /><span>vidéo</span>
      </CallButton>
      <div class="action-button">
        <img src="/img/envelope.fill.svg" alt="" /><span>e-mail</span>
      </div>
    </div>
    <CallButton
      :id="contact.id"
      :name="contact.name"
      :surname="contact.surname"
      :phoneNumber="contact.phoneNumber"
      :callType="'phone'"
      class="phone-infos"
    >
      <span>portable</span>
      <div class="phone-number">
        <span v-for="(digit, index) in [...contact.phoneNumber]" :key="index">
          {{ index % 2 === 1 ? digit : ' ' + digit }}
        </span>
      </div>
    </CallButton>
  </div>
</template>
<script>
import CallButton from '@/components/CallButton.vue';
export default {
  name: 'ContactView',
  components: {
    CallButton,
  },
  computed: {
    contactId() {
      return this.$store.state.displayedContactId;
    },
    contact() {
      return this.$store.state.contacts.find(
        (contact) => contact.id == this.contactId
      );
    },
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    resetDisplayedContact() {
      this.$store.commit('setDisplayedContactId', null);
    },
  },
};
</script>
<style>
.router-view__wrapper {
  background-color: #f2f2f6;
}
</style>
<style scoped>
@import url(//db.onlinewebfonts.com/c/ead4092f880f75ff0883ced1856b2c37?family=SF+Pro+Rounded);

.contact-page {
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f2f2f6;
}
.contact-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  color: rgb(0, 122, 255);
  padding: 0 1rem 0 1px;
}

.contact-bar img {
  height: 24px;
  filter: invert(31%) sepia(58%) saturate(3583%) hue-rotate(200deg)
    brightness(101%) contrast(108%);
}

.contact-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgb(0, 122, 255);
  cursor: pointer;
}

.contact-img__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

.contact-img {
  height: 86px;
  width: 86px;
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
  font-size: 2.5rem;
  font-family: 'SF Pro Rounded', sans-serif;
  text-transform: uppercase;
}

.contact-img img {
  height: 120%;
  mix-blend-mode: screen;
}

.contact-img__container .name {
  font-size: 1.75rem;
}

.actions__container {
  display: flex;
  gap: 9px;
  margin: 1rem 9px;
}

.action-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 100%;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
  font-size: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.0125);
}

.action-button.active {
  color: rgb(0, 122, 255);
  cursor: pointer;
}

.action-button.active img {
  opacity: 1;
  filter: invert(31%) sepia(58%) saturate(3583%) hue-rotate(200deg)
    brightness(101%) contrast(108%);
}

.action-button img {
  height: 1.75rem;
  opacity: 0.2;
}

.phone-infos {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background-color: #fff;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  width: calc(100% - 2 * 9px);
  margin: 0 auto;
  cursor: pointer;
}

.phone-infos .phone-number {
  font-size: 1.125rem;
  color: rgb(0, 122, 255);
}
</style>

<template>
  <div class="contact">
    <div>
      <span class="name">{{ name }}</span>
      <span>{{ phoneNumber }}</span>
    </div>

    <CallButton :name="name" />
  </div>
</template>
<script>
import CallButton from './CallButton.vue';
export default {
  name: 'ContactCard',
  components: {
    CallButton,
  },
  props: ['name', 'phoneNumber'],
};
</script>
<style>
.contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 0.5rem;
}

.contact div {
  display: flex;
  flex-direction: column;
}

.contact .name {
  font-size: 1.25rem;
  font-weight: 600;
}

.call-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0.7;
  border: none;
  padding: 0.5rem;
  border-radius: 1000px;
  font-size: 2rem;
  cursor: pointer;
}

.call-button:hover {
  opacity: 1;
}
</style>

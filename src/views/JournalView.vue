<template>
  <div class="entries">
    <div v-for="entry in entries" :key="entry.time">
      <EntryCard :name="entry.name" :time="entry.time" :date="entry.date" />
    </div>
  </div>
</template>
<script>
import EntryCard from '@/components/EntryCard.vue';
export default {
  name: 'JournalView',
  components: {
    EntryCard,
  },
  computed: {
    entries() {
      return this.$store.state.entries;
    },
  },
};
</script>
<style scoped>
.entries {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 2rem;
}
</style>

<template>
  <h2>Récents</h2>
  <div class="entries">
    <div v-for="entry in entries" :key="entry.time">
      <EntryCard
        :name="
          entry.name !== '' || entry.surname !== ''
            ? entry.name + ' ' + entry.surname
            : entry.phoneNumber
        "
        :time="entry.time"
        :date="entry.date"
        :callType="entry.callType"
      />
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
      return this.$store.state.entries.slice().reverse();
    },
  },
  created() {
    document.title = 'iPhone - Récents';
  },
};
</script>
<style scoped>
h2 {
  font-size: 2rem;
  line-height: 3.5rem;
  margin-left: 3rem;
  margin-top: 1rem;
  position: relative;
}
.entries {
  display: flex;
  flex-direction: column;
  height: 627px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
}

.entries::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
</style>

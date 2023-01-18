<template>
  <div class="entry">
    <span class="name">{{ name }}</span>
    <div>
      <span>{{ time }}</span
      >,
      <span>{{ date }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EntryCard',
  props: ['name', 'time', 'date'],
};
</script>
<style scoped>
.entry {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 3px;
}

.name {
  font-weight: 600;
  font-size: 1.25rem;
}
</style>

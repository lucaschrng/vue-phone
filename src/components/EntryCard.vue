<template>
  <div class="entry">
    <div>
      <span class="name__container">
        <span class="name" v-if="!/^\d+$/.test(name.split(' ').join(''))">{{
          name
        }}</span>
        <div class="name" v-else>
          <span v-for="(digit, index) in name" v-bind:key="index">
            {{ digit + (index % 2 === 1 ? ' ' : '') }}
          </span>
        </div>
        <div class="phone-icon__wrapper">
          <img
            v-if="callType === 'phone'"
            src="/img/phone.arrow.up.right.fill.svg"
            alt=""
            class="phone-icon"
          />
          <img
            v-else
            src="/img/arrow.up.right.video.fill.svg"
            alt=""
            class="phone-icon"
          />
        </div>
      </span>
      <span v-if="callType === 'phone'">téléphone</span>
      <span v-else>FaceTime vidéo</span>
    </div>
    <div class="date">
      <span>{{ date }}</span>
      <span>{{ time }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EntryCard',
  props: ['name', 'time', 'date', 'callType'],
};
</script>
<style scoped>
.entry {
  height: 60px;
  border-top: 1px solid #b2b2b2;
  margin-left: 3rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.entry > div {
  display: flex;
  flex-direction: column;
}

.entry > div.date {
  align-items: end;
}

.entry span {
  color: #7d7d7d;
}

.entry .name {
  font-size: 1.125rem;
  font-weight: 600;
  color: black;
}

.entry .name > span {
  color: black;
}

.name__container {
  position: relative;
}

.entry .phone-icon__wrapper {
  position: absolute;
  top: 0;
  left: -3rem;
  height: 100%;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.entry .phone-icon {
  height: 1rem;
  opacity: 0.5;
}
</style>

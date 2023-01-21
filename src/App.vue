<template>
  <div class="iphone-frame__container">
    <img
      src="/img/DeepPurpleFrame.png"
      alt="iPhone frame"
      class="iphone-frame"
    />
  </div>
  <div class="router-view__container">
    <div class="router-view__wrapper">
      <TopBar />
      <router-view />
      <nav>
        <router-link to="/">
          <img src="/img/clock.fill.svg" alt="" />
          Récents
        </router-link>
        <router-link to="/contacts">
          <img
            src="/img/person.crop.circle.fill.svg"
            alt=""
            class="contacts-icon"
          />
          <img
            src="/img/person.crop.circle.fill.active.svg"
            alt=""
            class="contacts-icon--active"
          />
          Contacts
        </router-link>
        <router-link to="/clavier">
          <img src="/img/keypad.svg" alt="" />
          Clavier
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
export default {
  created() {
    window.addEventListener('resize', this.myEventHandler);
  },
  mounted() {
    document
      .querySelector('.iphone-frame')
      .addEventListener('load', this.myEventHandler);
  },
  components: {
    TopBar,
  },
  methods: {
    myEventHandler() {
      let scale =
        document.querySelector('.iphone-frame').getBoundingClientRect().width /
        (1339 / 3);
      document.querySelector('.router-view__wrapper').style.scale = scale;
    },
  },
};
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'SF Pro Display', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 20px;
}

button {
  font-family: 'SF Pro Display', sans-serif;
}

nav {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 1rem 2rem 1rem;
  background-color: #f5f5f5;
  border-top: 1px solid #b2b2b2;
}

nav a {
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 0.75rem;
  opacity: 0.5;
  gap: 0.25rem;
}

nav a img {
  width: 32px;
}

nav .router-link-active {
  opacity: 1;
  color: rgb(0, 122, 255);
}

nav .router-link-active img {
  filter: invert(31%) sepia(58%) saturate(3583%) hue-rotate(200deg)
    brightness(101%) contrast(108%);
}

nav .router-link-active img.contacts-icon {
  display: none;
}

nav img.contacts-icon--active {
  display: none;
}

nav .router-link-active img.contacts-icon--active {
  filter: none;
  display: block;
}

.iphone-frame__container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.iphone-frame {
  height: 97%;
  z-index: 100;
  pointer-events: none;
}

.router-view__container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-view__wrapper {
  min-width: 393px;
  max-width: 393px;
  height: 852px;
  border-radius: 50px;
  overflow: hidden;
}
</style>

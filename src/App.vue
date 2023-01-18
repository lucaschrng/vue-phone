<template>
  <nav>
    <router-link to="/">Journal</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/clavier">Clavier</router-link>
  </nav>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
}

nav a {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5rem;
  border-radius: 3px;
}

nav a:hover {
  background-color: rgba(17, 70, 230, 0.2);
}
</style>

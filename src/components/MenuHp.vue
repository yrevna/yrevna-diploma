<script setup>
const contact = () =>
  window.scroll({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
</script>

<template>
  <menu>
    <router-link to="/">
      <img id="logo" alt="Лого" src="/logo_hp.png" />
    </router-link>

    <ul>
      <li>
        <router-link to="/catalog">Catalog</router-link>
      </li>

      <li>
        <router-link to="/discounts">Discounts</router-link>
      </li>

      <li>
        <router-link to="/faq">FAQ</router-link>
      </li>

      <li>
        <a href="#" @click.prevent="contact">Contact</a>
      </li>
    </ul>
  </menu>
</template>

<style>
#logo {
  height: 50px;
}

menu {
  color: var(--menu-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  position: fixed;
  backdrop-filter: blur(10px);
  transition: backdrop-filter 0.3s ease-in-out;
  z-index: 10;
  box-shadow: var(--main-shadow);
}

menu > ul {
  display: flex;
  gap: 20px;
  list-style: none;
  justify-content: space-between;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}

menu a {
  text-decoration: none;
}

menu::before {
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  left: 0;
  top: 0;
  opacity: 40%;
}
</style>

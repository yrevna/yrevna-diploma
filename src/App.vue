<script setup>
import { RouterView } from 'vue-router'
import MenuHp from '@/components/MenuHp.vue'
import FooterHp from '@/components/FooterHp.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <menu-hp />
    </header>
    <main>
      <RouterView />
    </main>
    <footer-hp />
  </div>
</template>

<style>
header {
  height: 90px;
}

main {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 50px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>

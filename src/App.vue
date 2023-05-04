<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <Menu />
    </header>
    <main>
      <RouterView />
    </main>
    <Footer />
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
}
</style>

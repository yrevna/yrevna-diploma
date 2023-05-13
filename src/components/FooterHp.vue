<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="footer-list-wrapper">
      <h5>Контактная информация</h5>
      <div class="footer-list">
        <div>ул. Арбат, 1, Москва, 119019</div>
        <div>+7 (800) 999-99-99</div>
        <div>+7 (495) 999-99-99</div>
        <div>+7 (999) 999-99-99</div>
      </div>
    </div>
    <div class="footer-list-wrapper">
      <h5>Мы в социальных сетях</h5>
      <div class="footer-list">
        <div>Facebook</div>
        <div>В контакте</div>
        <div>Одноклассники</div>
        <div>Instagram</div>
        <div>Twitter</div>
        <div>Telegram</div>
      </div>
    </div>
    <div class="footer-by">
      © {{ year }} yrevna.com. Все права защищены. Перепечатка и любое использование материалов
      возможно только при наличии ссылки на первоисточник.
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #001300;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 50px;
  padding: 20px;
  text-align: center;
  color: var(--menu-color);
}

.footer-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  text-align: left;
}

.footer-by {
  grid-column: span 2;
}

.footer-list-wrapper {
  width: min-content;
  justify-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.footer-list-wrapper > h5 {
  color: inherit;
  width: max-content;
}
</style>

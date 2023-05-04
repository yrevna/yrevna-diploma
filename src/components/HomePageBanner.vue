<script setup>
import HPB from '@/assets/img/HPB.jpg'
</script>

<template>
  <div class="container-wrapper">
    <h1 class="main-title text-center">Hogsmeade Village</h1>
    <img :src="HPB" alt="Баннер" class="main-img" />
    <div class="container">
      <p>Добро пожаловать в мир магии и приключений!</p>
      <p>
        Здесь вы можете забыть о том, что вам скажут проходящие мимо магглы о содержимом вашей
        корзины. Мы предлагаем широкий выбор товаров для настоящих ценителей волшебства. Здесь вы
        найдете книги, фильмы, игры, украшения и другие товары, связанные с миром Гарри Поттера и
        его преданных друзей. Мы всегда готовы помочь вам с выбором и ответить на все ваши вопросы.
      </p>
      <p>Приятных покупок!</p>
    </div>
  </div>
</template>

<style>
p {
  margin: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 600px;
}

.main-img {
  margin-top: 10px;
  position: relative;
  width: 100%;
  --gradient-percent: 40%;
  mask-image: linear-gradient(
    180deg,
    transparent 0,
    rgba(0, 0, 0, 1) var(--gradient-percent),
    rgba(0, 0, 0, 1) calc(100% - var(--gradient-percent)),
    transparent 100%
  );
}
</style>

<script setup></script>

<template>
  <h1>Корзина</h1>
  <div class="container-wrapper">
    <div class="cart container">
      <div class="card-of-cart">1</div>
      <div class="card-of-cart">2</div>
      <div class="cart-actions">
        <button class="catalog-button">Оформить заказ</button>
        <button class="catalog-button">Очистить корзину</button>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  text-align: center;
}

.cart {
  background-color: var(--product-card-color);
  box-shadow: var(--main-shadow);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //min-height: 50vh;
  padding: 30px;
  gap: 30px;
}

.cart-actions {
  display: flex;
  justify-content: center;
  gap: 50px;
}
</style>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  oldPrice: {
    type: Number
  }
})

const imgSrc = computed(() => `/img/goods/${props.id}.png`)
</script>

<template>
  <div class="product-card">
    <div class="product-card-img"><img :src="imgSrc" :alt="name" /></div>
    <div class="product-card-title">{{ name }}</div>
    <div class="product-card-price">
      <s v-if="oldPrice">{{ oldPrice }} ₽</s> {{ price }} ₽
    </div>
    <div class="product-card-cart">
      <button class="add-to-cart">В корзину</button>
    </div>
  </div>
</template>

<style>
.product-card-img img {
  width: 100%;
}

.product-card {
  background-color: var(--product-card-color);
  padding: 10px;
  border-radius: 5px;
  box-shadow: var(--main-shadow);
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: start;
}

.product-card-img,
.product-card-title {
  grid-column: span 2;
}

.product-card-title {
  grid-column: span 2;
  align-self: center;
}

button.add-to-cart {
  background-color: var(--background-color);
  color: var(--body-color);
  padding: 5px 20px;
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color var(--button-transition), color var(--button-transition);
}

button.add-to-cart:hover {
  background-color: var(--body-color);
  color: var(--background-color);
}

.product-card-price {
  font-size: large;
  color: var(--h-color);
  align-self: end;
}

.product-card-cart {
  justify-self: end;
  align-self: end;
}
</style>

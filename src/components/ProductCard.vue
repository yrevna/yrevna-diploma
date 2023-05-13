<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import CountClicker from '@/components/CountClicker.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

const imgSrc = computed(() => `/img/goods/${props.modelValue.id}.png`)

const cartStore = useCartStore()
const countInCart = computed({
  get: () => cartStore.itemInfo(props.modelValue.id),
  set: (v) => cartStore.setCount(props.modelValue.id, v)
})
</script>

<template>
  <div class="product-card">
    <div class="product-card-img"><img :src="imgSrc" :alt="modelValue.name" /></div>
    <div class="product-card-title">{{ modelValue.name }}</div>
    <div class="product-card-price">
      <s v-if="modelValue.oldPrice">{{ modelValue.oldPrice }} ₽</s> {{ modelValue.price }} ₽
    </div>
    <div class="product-card-cart">
      <button class="add-to-cart" v-if="!countInCart" @click="countInCart++">В корзину</button>
      <count-clicker v-model="countInCart" v-else />
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

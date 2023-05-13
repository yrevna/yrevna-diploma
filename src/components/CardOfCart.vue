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
  <div class="card-of-cart">
    <img class="card-of-cart-img" :src="imgSrc" :alt="modelValue.name" />
    <div class="card-of-cart-info">
      <div>
        <div>{{ modelValue.name }}</div>
        <div>
          <s v-if="modelValue.oldPrice">{{ modelValue.oldPrice }} ₽</s> {{ modelValue.price }} ₽
        </div>
      </div>
      <div>
        <div><count-clicker v-model="countInCart" /></div>
        <div><button class="add-to-cart" @click="countInCart = 0">Удалить</button></div>
      </div>
    </div>
  </div>
</template>

<style>
.card-of-cart {
  display: flex;
  border: 1px solid var(--body-color);
  box-shadow: var(--main-shadow);
}

.card-of-cart-img {
  max-width: 200px;
}

.card-of-cart-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
}

.card-of-cart-info > div {
  display: flex;
  justify-content: space-between;
}

.card-of-cart-info > div:first-child {
  font-size: 1.5rem;
}
</style>

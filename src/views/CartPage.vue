<script setup>
import { useCartStore } from '@/stores/cart'
import { useGoodsStore } from '@/stores/goods'
import { computed } from 'vue'
import CardOfCart from '@/components/CardOfCart.vue'

const cartStore = useCartStore()
const goodsStore = useGoodsStore()
const goodsInCart = computed(() =>
  goodsStore.goodsList({
    ids: cartStore.goods.map((v) => v.id)
  })
)
</script>

<template>
  <h1>Корзина</h1>
  <div class="container-wrapper">
    <div class="cart container">
      <card-of-cart :product="v" v-for="(v, i) of goodsInCart" :key="i" />
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

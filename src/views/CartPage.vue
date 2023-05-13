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

const clearCart = () => (cartStore.goods = [])
const orderCart = () => {
  alert('Ваш заказ оформлен!')
  clearCart()
}
const cost = computed(() => {
  const res = { price: 0, oldPrice: 0 }
  for (let v of goodsInCart.value) {
    const quantity = cartStore.itemInfo(v.id)
    res.price += v.price * quantity
    res.oldPrice += (v.oldPrice ?? v.price) * quantity
  }
  return res
})
</script>

<template>
  <h1>Корзина</h1>
  <div class="container-wrapper">
    <div class="cart container" v-if="goodsInCart.length">
      <card-of-cart :model-value="v" v-for="(v, i) of goodsInCart" :key="i" />
      <h3>
        Итого: <s v-if="cost.oldPrice !== cost.price">{{ cost.oldPrice }} ₽</s> {{ cost.price }} ₽
      </h3>
      <div class="cart-actions">
        <button class="catalog-button" @click="orderCart">Оформить заказ</button>
        <button class="catalog-button" @click="clearCart">Очистить корзину</button>
      </div>
    </div>
    <h3 class="text-center" v-else>Ваша корзина пуста</h3>
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

.cart h3 {
  text-align: end;
}
</style>

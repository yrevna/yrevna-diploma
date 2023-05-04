<script setup>
import { useGoodsStore } from '@/stores/goods'
import { computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps({
  category: {
    type: Number
  },
  count: {
    type: Number,
    default: 3
  },
  button: {
    type: Boolean,
    default: false
  },
  sale: {
    type: Boolean,
    default: false
  }
})

const goodsStore = useGoodsStore()

const title = computed(() => goodsStore.getCategoryName(props.category))
</script>

<template>
  <div class="container-wrapper goods-list">
    <h2 v-if="title">{{ title }}</h2>
    <div class="container">
      <product-card
        :id="v.id"
        :name="v.name"
        :price="v.price"
        :old-price="v.oldPrice"
        v-for="(v, i) of goodsStore.goodsList({ categoryId: category, sale })"
        :key="i"
      />
    </div>
    <button class="catalog-button" v-if="button" @click="$router.push('/catalog')">
      В каталог
    </button>
  </div>
</template>

<style>
.goods-list .container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.goods-list h2 {
  margin-bottom: 30px;
}

.catalog-button {
  background-color: var(--background-color);
  color: var(--body-color);
  padding: 10px 40px;
  border: 1px solid var(--body-color);
  border-radius: 20px;
  cursor: pointer;
  margin-top: 40px;
  font-size: large;
  transition: background-color var(--button-transition), color var(--button-transition);
}

.catalog-button:hover {
  background-color: var(--body-color);
  color: var(--background-color);
}
</style>

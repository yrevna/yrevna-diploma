<script setup>
import HomePageBanner from '@/components/HomePageBanner.vue'
import GoodsList from '@/components/GoodsList.vue'
import { useGoodsStore } from '@/stores/goods'
const goodsStore = useGoodsStore()
</script>

<template>
  <home-page-banner />
  <goods-list v-for="(v, i) of goodsStore.categoryList" :key="i" :category="v.id" button />
</template>

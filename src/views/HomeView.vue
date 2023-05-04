<script setup>
import HomePageBanner from '@/components/HomePageBanner.vue'
import GoodsList from '@/components/GoodsList.vue'
</script>

<template>
  <home-page-banner />
  <goods-list :category="1" button />
  <goods-list :category="2" button />
  <goods-list :category="3" button />
</template>

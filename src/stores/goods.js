import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGoodsStore = defineStore('goods', () => {
  const categoryList = ref([])
  const list = ref([])

  axios.get('/data/goods-list.json').then((v) => {
    list.value = v.data
  })
  axios.get('/data/category-list.json').then((v) => {
    categoryList.value = v.data
  })

  const goodsList = ({ categoryId, sale = false }) => {
    let result = list.value
    if (categoryId) result = result.filter((v) => v.category === categoryId)
    if (sale) result = result.filter((v) => v.oldPrice)
    return result
  }

  const getCategoryName = (categoryId) => {
    return categoryList.value.find((v) => v.id === categoryId)?.name
  }

  return { categoryList, list, goodsList, getCategoryName }
})

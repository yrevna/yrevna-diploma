import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const goods = ref([])
  const itemInfo = (id) => goods.value.find((v) => v.id === id)?.count ?? 0
  const setCount = (id, count) => {
    const itemIndex = goods.value.findIndex((v) => v.id === id)
    if (itemIndex === -1) {
      if (count > 0) {
        goods.value.push({ id, count })
      }
      return
    }
    if (count > 0) {
      goods.value[itemIndex].count = count
      return
    }
    goods.value.splice(itemIndex, 1)
  }
  return { goods, itemInfo, setCount }
})

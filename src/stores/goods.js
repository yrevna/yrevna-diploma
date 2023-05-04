import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGoodsStore = defineStore('goods', () => {
  const categoryList = ref([
    { name: 'Рекомендации', id: 1 },
    { name: 'Хиты', id: 2 },
    { name: 'Новинки', id: 3 }
  ])
  const list = ref([
    { id: 1, name: 'Письмо из Хогвартса', price: 490, category: 1, oldPrice: 590 },
    { id: 2, name: 'Часы-подвеска "Снитч"', price: 750, category: 1 },
    {
      id: 3,
      name: 'Волшебная палочка Полумны Лавгуд',
      price: 990,
      category: 1
    },
    { id: 4, name: 'Маховик времени Гермионы', price: 650, category: 2 },
    { id: 5, name: 'Часы "Дары смерти"', price: 750, category: 2 },
    { id: 6, name: 'Кулон Слизерина', price: 490, category: 2, oldPrice: 650 },
    { id: 7, name: 'Брелок Funko Воландеморт', price: 550, category: 3 },
    {
      id: 8,
      name: 'Коврик для мыши Министерство магии',
      price: 450,
      category: 3
    },
    { id: 9, name: 'Кошелек Хогвартс #2', price: 790, category: 3 },
    { id: 10, name: 'Обложка на паспорт Always', price: 450, oldPrice: 650 },
    { id: 11, name: 'Браслет Дары смерти', price: 390 },
    {
      id: 12,
      name: 'Фигурка Funko POP! Harry Potter: Hermione 77',
      price: 1290
    },
    { id: 13, name: 'Шахматы Гарри Поттер', price: 5990, oldPrice: 9990 },
    { id: 14, name: 'Игральные карты Гарри Поттер', price: 390, oldPrice: 590 },
    { id: 15, name: '3D светильник Олень', price: 990, oldPrice: 1490 }
  ])

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

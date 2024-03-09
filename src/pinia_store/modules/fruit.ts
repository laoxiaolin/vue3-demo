import { ref, computed } from 'vue';
import { defineStore } from "pinia";

export const useFruitStore = defineStore('fruit', () => {
  const fruit = ref('');
  const price = ref(0)

  const apple_fruit = computed(() => fruit.value='苹果')

  function changeName(newName: any) {
    fruit.value = newName
  }

  function changePrice(newPrice: any) {
    price.value = newPrice
  }

  function $reset() {
    fruit.value = '';
    price.value = 0;
  }

  return { fruit, price, apple_fruit, changeName, changePrice, $reset }
})
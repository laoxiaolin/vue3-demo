import { ref, computed } from 'vue';
import { defineStore } from "pinia";


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }

  function $reset() {
    count.value = 0
  }

  return { count, doubleCount, increment, $reset }
})

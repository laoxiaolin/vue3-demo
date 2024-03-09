import {ref , computed} from 'vue';

export const Counter = () => {
  const count = ref(0);

  const double = computed(() => count.value * 2);

  const increment = (print?) => {
    count.value++;
    // print || print();
    // console.log(print, typeof(print))
    if(typeof(print) === 'function') print();
  }

  const printCount = () => {
    console.log('in common', count.value);
  }

  return {
    count,
    double,
    increment
  }
}
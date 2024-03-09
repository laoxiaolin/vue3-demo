<template>
  <div class="about">
    <h1>This is an about page1</h1>
    <div class="btn">
      number：<button @click="count++">{{ count }}</button><br>
      objName：<button @click="add">{{ obj.name }}</button>
    </div>
    <div class="watchStr">
      {{ watchStr }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';

const count = ref(0);
const obj = ref({name: 'jackey'});
const watchStr = ref('');

const watchAction = (key, newVal, oldVal) =>{
  watchStr.value = `监听key(${key})--newVal:${newVal}===========`
  watchStr.value += `监听key(${key})--oldVal:${oldVal}=======`
}

const add = () =>{
  obj.value.name = `lee&${ count.value }`;
  // count.value++;
}

watch(count, (newVal, oldVal)=> watchAction('count', newVal, oldVal));
watch(() => obj.value.name, (newVal, oldVal)=> watchAction('value.name', newVal, oldVal), {})

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
  .btn {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>

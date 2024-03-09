<template>
  <div class="emit">
    <ChildPros />
  </div>

  <div>ChildEmit Value : {{ childStr.message }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import ChildPros from '../components/ChildPros.vue'

const childStr = ref({
  message: String,
});

//对应子组件emit(custom-event) 
const onCustomEvent = (data) => {
  childStr.value = data;
} 
</script>
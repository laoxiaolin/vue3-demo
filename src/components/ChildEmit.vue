<template>
  <div>这是子组件</div>
  <button @click="emit('custom-event', {message: 'No1.Hello world'})">方法一，直接调用</button>
  <button @click="paretClick2">方法二，简介调用</button>
</template>

<script setup lang="ts">
  import { defineEmits } from 'vue';

  // 方法二，简介调用
  const emit = defineEmits(['custom-event'])  //此处、强烈建议先声明
  const paretClick2 = () =>{
    emit('custom-event', {message: 'No2, Hello world'})
  }
  //
  // vue3强烈不建议使用第一种方法，
</script>
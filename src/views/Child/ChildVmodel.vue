<template>
  <div class="child">
    我是子组件,我从父类那里得到 {{ props.modelValue }}
    <button @click="changeMoney">我来改变父组件的money</button>
  </div>
</template>

<script setup lang="ts">
// import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  modelValue: Number        //必须定义为modelValue这个名字
})
// const model = defineModel();
const emit = defineEmits(['update:modelValue']);  //必须定义为modelValue这个名字

const changeMoney = () =>{
  emit("update:modelValue", props.modelValue);
}
</script>
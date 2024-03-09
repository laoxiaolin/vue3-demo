<template>
  <div class="emit">
    <child @custom-event="onCustomEvent"></child>
  </div>

  <div>ChildEmit Value : {{ childStr.message }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Child from '../components/ChildEmit.vue'

const childStr = ref({
  message: String,
});
const onCustomEvent = (data) => {
  childStr.value = data;
} 
</script>
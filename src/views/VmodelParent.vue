<template>
  <div class="parent">
    我是父组件,我的Money是 {{ money }}
    <hr />
    <child v-model="money" />
    <div><br />

      测试组合式API
      <button @click="increment">测试 {{ count }}</button>
  
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import Child from '@/views/Child/ChildVmodel.vue';
import { Counter as UseCounter } from '@/common/Counter'
// 测试组合API
const { count, double, increment } = UseCounter();

const printCount = () => {
  console.log('in this Compent', count.value);
}

// 测试v-model
const money = ref(100)
</script>
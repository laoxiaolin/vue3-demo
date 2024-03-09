<template>
  <div>这是Pinia测试模块，包含持续化插件和Zipson模块 </div>
 <!-- <div>模块一，State值 {{ state1 }}</div> -->

 <div>
  User模块actions调用： {{ userList }}
  <ul>
    <li v-for="item in userList">
      姓名：{{ item.name }} ---- 年龄：{{ item.name }}
    </li>
  </ul>
</div>
<br/>

<div>测试解构Store
  <div>错误参数：count:{{ count }}; doubleCount: {{ doubleCount }}</div>
  <!-- <div>正确用法：{{ doubleValue }}，或直接调用Store的Getter {{ appStore.useCounterStore.doubleCount }}</div> -->
</div><!--  -->
<br />

<div>
  模块引用piniaStore文件
  fruit：{{ fruit }}； price：{{ price }} ；apple_fruit： {{ apple_fruit }}
  <button @click="changeName('香蕉')">改为香蕉</button>
  <button @click="changePrice(20)">改为20单价</button>
</div>

</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import appStore from '../pinia_store';
import { storeToRefs } from 'pinia';

console.log(appStore)
// 引用PiniaStore
const { fruit, price, apple_fruit } = storeToRefs(appStore.useFruitStore);  //引入state和Getter的方法，需要转换为ref才能追踪其值变化
const { changeName, changePrice } = appStore.useFruitStore;  //action直接引入即可

// 使用pinia模块化引入是时，遇到需要监听的state的变量
// 解构变量后无法watch它，可以会无法检测到它的变化
watch(() => price,(newVal) =>{
  console.log('newPriceVal:', newVal)  //无法检测变化
})
// 需要把上面的代码修改为下面的代码，才能检测变化
watch(() => appStore.useFruitStore.fruit,(newVal) =>{
  console.log('newFruitVal:', newVal)
})


// 使用storeToRefs可以保证解构出来的数据也是响应式的
const { userList } = storeToRefs(appStore.useUserStore)
// 持久化测试
console.log(localStorage)



// =====解构方法=====
//错误的解构方法============
// const { count, doubleCount } = appStore.useCounterStore

// 正确的解构方式
const { count, doubleCount } = storeToRefs(appStore.useCounterStore)
// `count` 和 `doubleCount` 是响应式的 ref
// 同时通过插件添加的属性也会被提取为 ref
// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
// 作为 action 的 increment 可以直接解构
const { increment } = appStore.useCounterStore

setTimeout(() => {
  increment()
}, 1000)

// 变更单个state的值
appStore.useCounterStore.count++
// $patch用法 自动补全！ ✨
// 使用$patch方法可以修改多个state中的值
appStore.useCounterStore.$patch({ count: appStore.useCounterStore.count + 1 })

// ✅ 这样写是响应式的Getter
// 💡 当然你也可以直接使用 `store.doubleCount`
// const doubleValue = computed(() => counter.doubleCount)



</script>
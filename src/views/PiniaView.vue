<template>
  <div>这是Pinia测试模块，包含持续化插件和Zipson模块 </div>
 <!-- <div>模块一，State值 {{ state1 }}</div> -->

  <!-- <div>
    User模块actions调用 {{ userList }}
      <ul>
        <li v-for="item in userList">
          姓名：{{ item.name }} ---- 年龄：{{ item.name }}
        </li>
      </ul>
    </div>

  <div>测试解构Store
    <div>错误参数：count:{{ count }}; doubleCount: {{ doubleCount }}</div>
    <div>正确用法：{{ doubleValue }}，或直接调用Store的Getter {{ counter.doubleCount }}</div>
  </div> -->
  
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import appStore from '../pinia_store';

console.log(appStore)
// import { storeToRefs } from 'pinia'
// const { user, counter } = useStore();

// // 使用storeToRefs可以保证解构出来的数据也是响应式的
// const { userList } = storeToRefs(user)

// // =====解构方法=====
// //错误的解构方法============
// // const { name, doubleCount } = counter
// setTimeout(() => {
//   counter.increment()
// }, 1000)

// // ✅ 这样写是响应式的Getter
// // 💡 当然你也可以直接使用 `store.doubleCount`
// const doubleValue = computed(() => counter.doubleCount)

// // 正确的解构方式
// counter.count++
// // 自动补全！ ✨
// counter.$patch({ count: counter.count + 1 })
// // `name` 和 `doubleCount` 是响应式的 ref
// // 同时通过插件添加的属性也会被提取为 ref
// // 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
// const { count, doubleCount } = storeToRefs(counter)
// // 作为 action 的 increment 可以直接解构
// const { increment } = counter

// // console.log(localStorage)
// //正确的解构方法

</script>
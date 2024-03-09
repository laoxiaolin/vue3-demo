<template>
  <div>这是Vuex模块测试</div>
 <div>模块一，State值 {{ state1 }}</div>
 <div>模块二，State值 {{ state2 }} </div>
 <div>模块三，State值 {{ state3 }} </div>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex';

  const store = useStore();

  let state1 = store.state.test.test
  const state2 = store.state.test2.test2;
  const state3 = store.state.test3.test3;
  
  store.commit('setTest2', 'newValue(2)');
  state1 = store.state.test2.test2;
  // console.log(store);

</script>
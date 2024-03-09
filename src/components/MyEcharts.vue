<template>
  <div class="echarts" :id="id"></div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid';

import ECharts from 'vue-echarts';
import { use } from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

use([GridComponent, LineChart, CanvasRenderer])

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
});

const id = `vue-echarts-${uuidv4()}`
const chart = ref(null);

onMounted( () => {
  initEcharts()
})

const initEcharts = () => {
  if (!chart) {
      const dom = document.getElementById(id);
      chart.value = Echarts.init(dom);
  }else {
      return 
  }
  if(!props.options) return 

  chart.setOption(props.options) 

  // 图标自适应
  window.addEventListener(
    "resize", 
    () => {
      chart.resize();
    }, 
    false
  );
}
</script>

<style scoped>
.echarts {
    width: 100%;
    height: 100%;
}
</style>
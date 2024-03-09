<template>
  <div>
    <span>方法一：直接使用echarts中使用</span>
    <div id="main"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";

import MyEcharts from '@/components/MyEcharts.vue'

// 绘制图表
const options = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [200, 820, 932, 1600, 1330, 1320, 2000],
        type: 'line',
        smooth: true
      }
    ]
  };

//声明周期函数，自动执行初始化
onMounted(() => {
  init();
});

//初始化函数
function init() {
  // 基于准备好的dom，初始化echarts实例
  let Chart = echarts.init(document.getElementById("main"));
  
  // 渲染图表
  Chart.setOption(options);

  // 图标自适应
  window.addEventListener(
    "resize", 
    () => {
      Chart.resize();
    }, 
    false
  );
}
</script>

<style scoped>
/* 样式这里要设置长宽，不然显示不出来 */
#main {
  width: 50vw;
  height: 50vh;
}
</style>
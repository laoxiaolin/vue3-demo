<template>
  <div id="echart">
    <span>方法二：直接使用VueEcharts中使用</span>
    <VChart class="echarts" :option="options" autoresize="true"></VChart>
    <!--<ECharts class="echarts" :option="options1" autoresize="true"></ECharts>-->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import VChart from 'vue-echarts';
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  LineChart,
  CanvasRenderer
])


const options = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ['Email', 'Union Ads']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: [
      {
        name: '销售额',
        type: 'value'
      },
      {
        name: '销量',
        nameLocation: 'end',
        alignTicks: true,
        type: 'value',
        // inverse: true
      }
    ],
    series: [
      {
        name: '销售额',
        type: 'line',
        lineStyle: {
          width: 2,
          color: "#5dbcff"
        },
        data: [200, 820, 932, 1600, 1330, 1320, 2000],
        smooth: true,
        // stack: 'Total',
      },
      {
        name: '销量',
        type: 'line',
        lineStyle: {
          width: 2,
          color: "#00C657"
        },
        yAxisIndex: 1,
        data: [1, 2, 4, 7, 9, 20, 2],
        smooth: true,
        // stack: 'Total',
      }

    ]
  };

  const options1 = {
    title: {
      text: "ECharts 入门示例2",
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }
    ]
  };

  window.onresize = () => {
    ECharts.resize();
  }
  // onMounted(()=>{
  //   // 图标自适应
  //   window.addEventListener(
  //     "resize", 
  //     () => {
  //       
  //     }, 
  //     false
  //   );
  // })

</script>

<style scoped>
.echarts {
  width: 50vw;
  height: 50vh;
}
</style>
<template>
  <div>
    <span>Element-plus Tree : {{ nodeData }}</span>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
      <template #default="{node, data}">
        <div>
          <i v-if="data.icon" :class="data.icon"></i>
          <span style="font-size: 16px;font-weight:bold;">{{ data.label }}</span>
        </div>
      </template>
    </el-tree>
    <span>End</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Minus }  from '@element-plus/icons-vue'
const nodeData = ref();
interface Tree {
  label: string
  icon?: string
  link?: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  if(data.link) nodeData.value = data.link
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        icon: 'Minus',
        label: 'Level two 1-1',
        link: '/coupon'
      },
      {
        icon: 'Minus',
        label: 'Level two 1-2',
        link: '/coupon/offline'
      },
    ],
  }
]

const defaultProps = {
  children: 'children',
  label: 'label',
}

const menus = ref([
{
  name: '上架中优惠券',
  icon: 'iconshangjia',
  key: 'coupon_online',
  link: '/coupon'
},
{
  name: '下架过期优惠券',
  icon: 'iconxiajia',
  key: 'coupon_offline',
  link: '/coupon/offline'
},
{
  name: '优惠券使用记录',
  icon: 'iconhexiao',
  key: 'coupon_logs',
  link: '/coupon/logs'
},
]);
</script>

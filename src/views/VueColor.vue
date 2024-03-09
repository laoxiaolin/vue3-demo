<template>
  vmodel:{{ colors }} <br /> 
  input: {{ val }}
  <Sketch v-model="colors" @input="updateColors"/>
</template>
<script setup>
import { ref, watch } from 'vue';
import { Sketch } from '@ckpack/vue-color';

const val = ref();
const colors = ref('#194D33A8'); // etc: { h: 150, s: 0.66, v: 0.30 }, { r: 255, g: 0, b: 0 }, '#194d33' 

watch(colors, (newVal, oldVal) =>{
  val.value = newVal;
})

</script>
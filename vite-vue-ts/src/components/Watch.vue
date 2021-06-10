<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 15:18:51
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 15:30:49
-->
<template>
  <h1>{{ msg }}</h1>
</template>


<script setup lang="ts">
import { ref, reactive, watch, defineProps } from 'vue'

defineProps({
  msg: String
})

const state = reactive({
  count: 0
})

const state1 = reactive({
  count: {
    count: 0
  }
})

watch(() => state.count, (count, prevCount) => {
  console.log("第一个监听的值：", count, prevCount)
}, {
  immediate: true
})

watch(() => state1.count, (count, prevCount) => {
  console.log("第一个监听的值：", count, prevCount)
}, {
  deep: true,
  immediate: true
})

setTimeout(() => {
  state.count++
  state1.count.count++
}, 1000);

</script>
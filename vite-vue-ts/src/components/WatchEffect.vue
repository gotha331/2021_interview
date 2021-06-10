<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 15:18:51
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 15:44:25
-->
<template>
  <h1>{{ msg }}</h1>
</template>


<script setup lang="ts">
import { ref, defineProps, watch, watchEffect, onMounted } from 'vue'

/**
 * watchEffect
 * 1.不需要手动传入依赖
 * 2.不是lazy初始化执行分析依赖
 * 3.无法获取原始值
 * 4.一些异步操作放在里面更加合适
 * 5.watch的第三个参数是处理副作用的，现在依赖第一个参数
 */

defineProps({
  msg: String
})

const num = ref(0)

onMounted(() => {
  console.log('onMounted')
})

// 在onMounted之前调用
const stop = watchEffect((onInvalidate) => {
  console.log("watchEffect之前调用", num.value);
  onInvalidate(() => {
    /* 清除副作用 */
  })
}, {
  onTrigger(e) {
    // debugger
  }
})

//停用监听
stop()

setTimeout(() => {
  num.value++
}, 1000);


</script>
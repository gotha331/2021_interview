<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 15:45:58
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 15:51:20
-->
<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
import {
  defineProps,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured
} from 'vue'

defineProps({
  msg: String
})

onBeforeMount(() => {
  console.log("onBeforeMount");
})

onMounted(() => {
  console.log("onMounted");
})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
})

onUpdated(() => {
  console.log("onUpdated");
})

onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
})

onUnmounted(() => {
  console.log("onUnmounted");
})


</script>
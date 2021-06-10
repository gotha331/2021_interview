<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 14:54:00
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 15:16:24
-->
<template>
  <h1>{{ msg }}</h1>
  <h2>{{ plusOne }}</h2>
  <h2>{{ count }}</h2>
</template>


<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'

defineProps({
  msg: String
})

const count = ref(1)

// const plusOne = computed(() => count.value + 1)
// 返回一个readonly 触发警告
// plusOne.value++

// console.log("plusOne:", plusOne);

const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  }
})

console.log(plusOne.value);
plusOne.value = Math.random()






</script>

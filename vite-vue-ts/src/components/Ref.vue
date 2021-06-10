<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 10:22:35
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 14:14:20
-->
<template>
  <h1>{{ msg }}</h1>
  测试
  {{ count }}
  <h3>我是{{ ss }}</h3>
</template>


<script setup lang="ts">
import { ref, toRefs, reactive, defineProps } from 'vue'
// ref 就是一般某个元素 简单数据类型 
// reactive响应式对象

defineProps({
  msg: String
})

const count = ref(6)
console.log("count:", count.value);
count.value++
console.log("count2:", count.value);

// 使用reactive包裹单独的ref
const state = reactive({
  count
})

console.log("state:", state);

const obj = reactive({
  ss: "shuaishuai",
  address: "xi'an"
})

// toRefs解构obj
const { ss } = { ...toRefs(obj) }



</script>
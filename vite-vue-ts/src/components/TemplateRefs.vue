<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 14:17:18
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 14:26:16
-->
<template>
  <h1>{{ msg }}</h1>
  <input type="text" ref="root" value="ref使用示例" />
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'

defineProps({
  msg: String
})

const root = ref(null)

// DOM首次渲染完成之后，才能获取到真实的dom
onMounted(() => {
  console.log("🐻", root.value);
})
</script>
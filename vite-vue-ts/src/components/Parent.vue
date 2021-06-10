<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 17:01:21
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 17:14:32
-->
<template>
  <h1>{{ msg }}</h1>
  <DemoChild></DemoChild>
</template>

<script setup lang="ts">
import { ref, provide, defineProps, useContext } from 'vue'
import DemoChild from './Child.vue'

const { expose } = useContext()
defineProps({
  msg: String
})

const themeRef = ref("dark")

provide("test", themeRef)

function changeTheme() {
  themeRef.value = Math.random().toString()
}

expose({
  changeTheme
})

setTimeout(() => {
  themeRef.value = "red"
}, 1000);
</script>

<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-08 15:03:16
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-08 15:08:15
-->
<template>
  <piechart @click="handleClick" :data="state.data" :x="200" :y="200" :r="200"></piechart>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup() {
    const state = reactive({
      data: [
        { name: "大专", count: 200, color: "brown" },
        { name: "本科", count: 300, color: "yellow" },
        { name: "硕士", count: 100, color: "pink" },
        { name: "博士", count: 50, color: "skyblue" },
      ]
    });
    function handleClick() {
      state.data.push({ name: '其他', count: 300, color: "orange" })
    }

    return {
      state,
      handleClick
    }
  },
};
</script>

<style scoped>
</style>

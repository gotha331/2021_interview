<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 10:09:29
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 10:15:13
-->
<template>
  <div>默认的count:{{ state.count }}</div>
  <button @click="increment">增加</button>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

type DState = {
  count: number,
  double: number
}

const state: DState = reactive({
  count: 0,
  double: computed(() => state.count * 2)
})

function increment() {
  state.count++;
}

</script>
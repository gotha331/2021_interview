<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-08 16:24:48
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-08 16:38:14
-->
<template>
  <div @click="$emit('update:count', count + 1)">counter:{{ count }}</div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
</style>

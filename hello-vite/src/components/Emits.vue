<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-08 14:41:41
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-08 14:46:25
-->
<template>
  <div @click="$emit('click')">
    自定义事件
  </div>
</template>

<script>
export default {
 emits:['click']
};
</script>

<style scoped>
</style>

<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-09 11:39:32
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-09 13:57:37
-->
<template>
  <input type="text" :value="todoTitle" @input="onInputChange" v-bind="$attrs" />
</template>

<script>
export default {
  props: {
    todoTitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInputChange(e) {
      this.$emit("update:todoTitle", e.target.value)
    }
  }
};
</script>

<style scoped>
</style>

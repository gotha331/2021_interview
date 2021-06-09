<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-09 14:48:54
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-09 14:57:26
-->
<template>
  <p class="filters">
    <span
      v-for="item in items"
      :key="item.value"
      @click="$emit('udate:modelValue', item.value)"
      :class="{ selected: modelValue === item.value }"
    >{{ item.label }}</span>
  </p>
</template>

<script>
export default {
  props: ['items', 'modelValue'],
  emits: ["update:modelValue"],
  setup() {
    return {}
  },
};
</script>

<style scoped>
.filters > span {
  padding: 2px 4px;
  margin-right: 4px;
  border: 1px solid transparent;
}

.filters > span:hover {
  cursor: pointer;
}

.filters > span.selected {
  border-color: rgba(173, 47, 47, 0.2);
}
</style>

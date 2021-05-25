<!--
 * @Files: 订阅 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-05-25 13:54:46
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-05-25 14:24:26
-->
<template>
  <div>
    <h1>这里是孙子组件</h1>
    <Children />
  </div>
</template>

<script>
import pubsub from "@/utils/pubsub.js";
import Children from "./Children";

export default {
  components: {
    Children,
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style  lang="scss" scoped></style>

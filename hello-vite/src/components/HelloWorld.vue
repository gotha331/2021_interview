<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-07 21:24:14
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-07 22:47:43
-->
<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="data.counter++">counter is: {{ data.counter }}</button>
  <p>{{ data.counter }}</p>
  <p>{{ data.doubleCounter }}</p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { defineProps, reactive, computed, onMounted, onUnmounted } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const data = reactive({
      counter: 1,
      doubleCounter: computed(() => data.counter * 2),
    });

    let timer;

    onMounted(() => {
      timer = setInterval(() => {
        data.counter++;
      }, 1000);
    });

    onUnmounted(() => {
      clearInterval(timer);
    });

    return { data };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

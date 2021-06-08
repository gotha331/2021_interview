<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-07 21:24:14
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-08 10:53:11
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

  <button @click="counter++">counter is: {{ counter }}</button>
  <p>{{ counter }}</p>
  <p>{{ doubleCounter }}</p>
  <p>{{ msg2 }}</p>
  <p ref="desc"></p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import {
  defineProps,
  reactive,
  computed,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watch,
} from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { counter, doubleCounter } = useCounter();

    // 其他数据，ref单值响应式
    const msg2 = ref("some message");

    // 使用元素引用
    const desc = ref(null);

    watch(counter, (val, oldVal) => {
      console.log(val);
      console.log(oldVal);

      const p = desc.value;
      p.textContent = `counter change from ${oldVal} to ${val}`;
    });

    return { counter, doubleCounter, msg2, desc };
  },
};

function useCounter() {
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

  return toRefs(data);
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

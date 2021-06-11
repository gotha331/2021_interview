<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-11 16:28:08
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-11 17:24:14
-->
<template>
  <div id="app">
    <div class="cards">
      <card v-for="post in store.state.posts" :key="post.id">{{ post.title }}</card>
    </div>
  </div>
</template>

<script>
import { store } from './store.js'
import Card from './components/Card.vue'
export default {
  components: {
    Card
  },
  setup() {
    return { store }
  }
}
</script>

<style lang="scss" scoped>
</style>

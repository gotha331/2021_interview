<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-11 16:28:08
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-14 16:31:02
-->
<template>
  <div id="app">
    <div class="header">
      <label for="search">搜索话题：#</label>
      <input type="text" id="search" :value="currentHashtag" @input="setHashTag" />
    </div>
    <div class="cards">
      <card v-for="(post,index) in filteredPosts" :key="index">
        <template v-slot:title>{{ post.title }}</template>
        <template v-slot:content>{{ post.content }}</template>
        <template v-slot:description>
          <Controls :post="post"></Controls>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { store } from './store.js'
import Card from './components/Card.vue'
import Controls from './components/Controls.vue'
export default {
  components: {
    Card, Controls
  },
  setup() {
    const setHashTag = (e) => {
      store.setHashtag(e.target.value)
    }

    return {
      setHashTag,
      filteredPosts: store.filteredPosts,
      currentHashtag: computed(() => store.state.currentHashtag)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  height: 30px;
  font-size: 18px;
  border: none;
  border-bottom: 1pxx solid grey;
  outline: none;
}

.cards {
  width: 600px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
}
</style>

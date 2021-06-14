<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-14 14:20:58
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-14 16:24:52
-->
<template>
  <div>
    <div class="like">
      <button @click="like">点赞</button>
      <div>{{ post.likes }}</div>
    </div>
    <div class="hashtags">
      <hashtag v-for="(hashtag,index) in post.hashtags" :hashtag="hashtag" :key="index"></hashtag>
    </div>
  </div>
</template>

<script>
import { store } from '../store'
import Hashtag from './Hashtag'
export default {
  props: {
    post: Object
  },
  components: {
    Hashtag
  },
  setup(props, ctx) {
    const like = () => {
      store.incrementLike(props.post)
    }

    return { like }
  },
};
</script>

<style  lang="scss" scoped>
.like {
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.hashtags {
  display: flex;
  height: 100%;
  align-items: center;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
}
</style>

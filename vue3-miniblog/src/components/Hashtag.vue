<!--
 * @Files: 
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-14 14:31:20
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-14 15:55:06
-->
<template>
  <div class="hashtag" @click="setHashTag">#{{ hashtag }}</div>
</template>

<script>
import { store } from '../store.js'
export default {
  props: {
    hashtag: {
      type: String,
    }
  },
  setup(props, ctx) {
    const setHashTag = () => {
      // ctx.emit('setHashTag', props.hashtag)
      store.setHashtag(props.hashtag)
    }

    return { setHashTag }
  }
};
</script>

<style  lang="scss" scoped>
.hashtag {
  margin: 0 2px;

  &:hover {
    color: #eb7350;
  }
}
</style>

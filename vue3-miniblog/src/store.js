/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-11 16:32:25
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-14 16:31:15
 */
import { reactive, computed } from 'vue'
import { posts } from './data/posts'

class Store {
  constructor() {
    this.state = reactive({
      posts,
      currentHashtag: null
    })
  }

  get filteredPosts () {
    return computed(() => {
      if (!store.state.currentHashtag) {
        return store.state.posts
      }

      return store.state.posts.filter(post => {
        return post.hashtags.includes(store.state.currentHashtag)
      })
    })
  }

  setHashtag (tag) {
    this.state.currentHashtag = tag
  }

  incrementLike (post) {
    console.log(post);
    const thePost = this.state.posts.find(p => {
      return p.id === post.id
    })

    if (!thePost) {
      return
    }

    thePost.likes += 1
  }
}

export const store = new Store()